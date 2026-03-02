import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session");

    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    try {
      const decoded = verify(token.value, process.env.AUTH_SECRET!) as {
        id: string;
        email: string;
        name?: string | null;
        role?: string | null;
      };

      // Return user data from token without querying the database
      return NextResponse.json({ 
        user: {
          id: decoded.id,
          email: decoded.email,
          name: decoded.name,
          role: decoded.role,
        }
      });
    } catch (error) {
      // Token is invalid
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 }
    );
  }
} 