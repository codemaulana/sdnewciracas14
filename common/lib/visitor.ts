"use server";

import {prisma }from "@/lib/prisma";
import { cookies } from "next/headers";

export async function recordVisit() {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.get("has_visited");

  if (!hasVisited) {
    try {
      await prisma.visitor.create({
        data: {}, 
      });

      cookieStore.set("has_visited", "true", { 
        maxAge: 3600, 
        httpOnly: true, 
        path: "/",
      });

      return { success: true };
    } catch (error) {
      console.error("Gagal mencatat pengunjung:", error);
      return { success: false };
    }
  }

  return { success: "already_tracked" };
}