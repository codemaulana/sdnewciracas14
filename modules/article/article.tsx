import SearchBar from "@/common/components/search";
import ArticleList from "@/common/layouts/article-card";
import { prisma } from "@/lib/prisma";

export default async function ArticlesPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const articles = await prisma.articles.findMany({
    where: {
      OR: [
        { judul: { contains: query, mode: "insensitive" } },
        { content: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1>Data Artikel</h1>
      {articles.map((item : any) => (
        <ArticleList key={item.id} data={item} />
      ))}
    </div>
  );
}
