"use server";
import {prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function cleanupOldVisitors() {
  try {
    await prisma.visitor.deleteMany({
      where: {
        createdAt: {
          lt: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        },
      },
    });
    revalidatePath("/dashboard"); // Refresh data di dashboard
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}