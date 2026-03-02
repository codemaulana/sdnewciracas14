import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

async function verifyToken(token: string) {
  try {
    const secretKey = process.env.AUTH_SECRET;
    // Pengecekan ekstra agar tidak crash di Edge
    if (!secretKey || secretKey.length === 0) {
      console.error("AUTH_SECRET is missing!");
      return null;
    }

    const secret = new TextEncoder().encode(secretKey);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

// COBA: Ganti jadi default export untuk stabilitas di Vercel
export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Lewati API selain Auth
  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  // 2. Proteksi Dashboard
  if (pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("session");

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

  // Kembalikan response di akhir proses
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/api/auth/:path*"],
};