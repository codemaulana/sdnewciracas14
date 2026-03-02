import { prisma } from "@/lib/prisma";

export const getBestArticles = async () => {
  try {
    const res = await prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return res;
  } catch (error) {
    throw new Error("Failed to get article");
  }
};
