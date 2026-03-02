import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

async function verifyToken(token: string) {
  try {
    // PROTEKSI: Cek apakah AUTH_SECRET ada di Vercel
    const secretKey = process.env.AUTH_SECRET;
    if (!secretKey) {
      console.error("PROXY ERROR: AUTH_SECRET is missing in Vercel Settings!");
      return null;
    }

    const secret = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

// Gunakan Named Export 'proxy' sesuai standar Next.js 16
export async function proxy(request: NextRequest) {
  const origin = request.headers.get("origin");
  const { pathname } = request.nextUrl;

  // 1. Lewati API selain Auth
  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("session");
  const response = NextResponse.next();

  // 2. Proteksi Dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    const payload = await verifyToken(token.value);
    if (!payload) {
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/api/auth/:path*"],
};