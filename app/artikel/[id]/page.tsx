import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ArticleIdComponent from "@/modules/article/article-by-id";

export default async function ArticlePage({ params }: any) {
  const { id } = await params;
  const article = await prisma.articles.findUnique({
    where: {
      id,
    },
  });

  if (!article) {
    return notFound();
  }

  return <ArticleIdComponent data={article} />;
}
