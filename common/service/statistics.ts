"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getStats() {
  return await prisma.statistic.findMany();
}

export async function updateStatCount(label: string, newCount: number) {
  await prisma.statistic.upsert({
    where: { label },
    update: { count: newCount },
    create: { label, count: newCount },
  });
  revalidatePath("/"); 
}