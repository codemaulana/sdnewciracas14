"use server";
import { prisma } from "@/lib/prisma";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getArticleById, getImageById, getPdfById } from "./data";
import {
  contactSchema,
  editSchema,
  PostFilePdfSchema,
  uploadImageSchema,
  uploadSchema,
} from "./zodSchema";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";

export const uploadArticle = async (prevState: unknown, formData: FormData) => {
  const validateFields = uploadSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { judul, image, author, content, kategori } = validateFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.articles.create({
      data: {
        judul,
        image: url,
        author,
        content,
        kategori: kategori || "Berita Sekolah",
        viewCount: 0,
      },
    });
  } catch (error) {
    return { message: "Failed to create article" };
  }

  revalidatePath("/");
  redirect("/artikel");
};

export const deleteArticle = async (id: string) => {
  const data = await getArticleById(id);

  if (!data) return { message: "Article not found" };

  await del(data.image);
  try {
    await prisma.articles.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete article" };
  }

  revalidatePath("/dashboard/edit-article");
};

export const deletePdf = async (id: string) => {
  const data = await getPdfById(id);

  if (!data) return { message: "Pdf not found" };

  await del(data.file);
  try {
    await prisma.pdf.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete pdf" };
  }
};

export const updateArticle = async (
  id: string,
  prevState: unknown,
  formData: FormData,
) => {
  const validateFields = editSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const data = await getArticleById(id);

  if (!data) return { message: "Article no data found" };

  const { judul, image, author, content } = validateFields.data;

  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });

    imagePath = url;
  }

  try {
    await prisma.articles.update({
      data: {
        judul,
        image: imagePath,
        author,
        content,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to create article" };
  }

  revalidatePath("/dashboard/edit-article");
  redirect("/dashboard/edit-article");
};

export async function login(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required",
      };
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    return {
      success: true,
      message: "Login successful",
      data: {
        name: "sdciracas",
        role: "Admin",
      },
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}

export const PostFilePdf = async (formData: FormData) => {
  const validateFields = PostFilePdfSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { file, title } = validateFields.data;

  const { url } = await put(file.name, file, {
    access: "public",
    allowOverwrite: true,
  });

  try {
    await prisma.pdf.create({
      data: {
        file: url,
        title,
      },
    });
  } catch (error) {
    return { message: "Failed to create pdf" };
  }

  revalidatePath("/dashboard/delete-file");
  redirect("/dashboard/delete-file");
};

export const uploadImage = async (prevState: any, formData: FormData) => {
  const validateFields = uploadImageSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { image } = validateFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.galeri.create({
      data: {
        image: url,
      },
    });
  } catch (error) {
    return { message: "Failed to create article" };
  }
};

export const deleteImage = async (id: string) => {
  const data = await getImageById(id);

  if (!data) return { message: "Image not found" };

  await del(data.image);
  try {
    await prisma.galeri.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete image" };
  }
};

export const getImage = async () => {
  try {
    const res = await prisma.galeri.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get image");
  }
};

export const getArticle = async () => {
  try {
    const res = await prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};

export const getArticleByIdServer = async (id: string) => {
  try {
    const res = await prisma.articles.findUnique({
      where: { id },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};

export const getPdf = async () => {
  try {
    const res = await prisma.pdf.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get pdf");
  }
};

export const getInfo = async () => {
  try {
    const res = await prisma.articles.findMany({
      where: {
        kategori: "Informasi",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to get information");
  }
};

export async function sendMessage(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    contactSchema.parse(data);

    const res = await fetch(`/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Terjadi kesalahan saat mengirim.",
        errors: result.errors || {},
      };
    }

    return {
      success: true,
      message: "Pesan berhasil dikirim!",
      errors: {},
    };
  } catch (err: any) {
    if (err instanceof ZodError) {
      const fieldErrors: any = {};
      err.issues.forEach((e: any) => {
        fieldErrors[e.path[0]] = e.message;
      });

      return {
        success: false,
        message: "Validasi gagal.",
        errors: fieldErrors,
      };
    }
  }
}
