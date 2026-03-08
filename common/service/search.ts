"use server";

import { prisma } from "@/lib/prisma";

export async function searchEverything(query: string) {
  if (!query || query.length < 2) return [];

  try {
    const articles = await prisma.articles.findMany({
      where: {
        judul: { 
          contains: query, 
          mode: 'insensitive' 
        }
      },
      take: 5, 
      select: {
        id: true,
        judul: true,
      }
    });

    return articles;
  } catch (error) {
    console.error("Search Error:", error);
    return [];
  }
}