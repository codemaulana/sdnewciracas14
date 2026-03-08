"use server";

import { prisma } from "@/lib/prisma";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function getHeroImages() {
  return await prisma.heroImage.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function uploadHeroImage(formData: FormData) {
  const file = formData.get("image") as File;
  if (!file) throw new Error("File tidak ditemukan");

  const blob = await put(file.name, file, {
    access: "public",
  });

  await prisma.heroImage.create({
    data: { url: blob.url },
  });

  revalidatePath("/");
  revalidatePath("/dashboard/hero");
}

export async function deleteHeroImage(id: number, url: string) {
  await del(url);

  await prisma.heroImage.delete({
    where: { id },
  });

  revalidatePath("/");
  revalidatePath("/dashboard/hero");
}