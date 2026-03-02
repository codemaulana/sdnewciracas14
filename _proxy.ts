import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Pakai default export
export default function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};