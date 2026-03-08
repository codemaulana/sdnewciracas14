"use server";

import { prisma } from "@/lib/prisma";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function getTeachers() {
  return await prisma.teacher.findMany({ orderBy: { createdAt: "asc" } });
}

export async function uploadTeacher(formData: FormData) {
  const nama = formData.get("nama") as string;
  const jabatan = formData.get("jabatan") as string;
  const file = formData.get("image") as File;

  const existingTeacher = await prisma.teacher.findUnique({ where: { nama } });
  if (existingTeacher) throw new Error("Data Guru dengan nama ini sudah ada!");

  try {
    const blob = await put(file.name, file, { 
      access: "public",
      addRandomSuffix: true 
    });

    await prisma.teacher.create({
      data: { nama, jabatan, imageUrl: blob.url },
    });
  } catch (error) {
    throw new Error("Gagal mengunggah gambar ke server.");
  }

  revalidatePath("/");
  revalidatePath("/dashboard/guru");
}

export async function deleteTeacher(id: number, imageUrl: string) {
  await del(imageUrl);
  await prisma.teacher.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/dashboard/guru");
}