import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";


async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

// PERUBAHAN UTAMA: Nama fungsi diubah dari middleware menjadi proxy
export async function proxy(request: NextRequest) {
  const origin = request.headers.get("origin");
  const { pathname } = request.nextUrl;

  // Skip proxy for API routes except auth routes
  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/auth/")) {
    return NextResponse.next();
  }

  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  // Get the token from the cookies
  const token = request.cookies.get("session");
  console.log("Proxy - Token:", token ? "Present" : "Not present");
  console.log("Proxy - Path:", pathname);

  // Create base response
  const response = NextResponse.next();

  // Handle CORS for the actual request
  if (origin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-CSRF-Token"
    );
  }

  // Protect dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      console.log("Proxy - No token, redirecting to login");
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    const payload = await verifyToken(token.value);
    if (!payload) {
      console.log("Proxy - Token verification failed");
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    console.log("Proxy - Token verified successfully");
    return response;
  }

  // Handle login page
  if (pathname === "/login") {
    if (token) {
      const payload = await verifyToken(token.value);
      if (payload) {
        console.log("Proxy - Valid token on login page, redirecting to dashboard");
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      console.log("Proxy - Invalid token on login page");
    }
    return response;
  }

  return response;
}

// Matcher tetap sama, Next.js akan menggunakannya untuk file proxy.ts
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/api/auth/:path*"],
};