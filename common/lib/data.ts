import { prisma } from "@/lib/prisma";

export const getArticleById = async (id: string) => {
  try {
    const res = await prisma.articles.findUnique({
      where: { id },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};

export const getPdfById = async (id: string) => {
  try {
    const res = await prisma.pdf.findUnique({
      where: { id },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get pdf");
  }
};

export const getImageById = async (id: string) => {
  try {
    const res = await prisma.galeri.findUnique({
      where: { id },
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get Image");
  }
};

export const getBestArticle = async () => {
  try {
    const res = await prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    return res.map((article : any) => ({
      ...article,
      createdAt: article.createdAt.toISOString(),
    }));
  } catch (error) {
    throw new Error("Failed to get article");
  }
};

export const incrementViewCount = async (articleId: string) => {
  await prisma.articles.update({
    where: { id: articleId },
    data: { viewCount: { increment: 1 } },
  });
};
