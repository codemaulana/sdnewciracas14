import EditArticle from "@/common/layouts/edit-form";
import { getArticleByIdServer } from "@/common/lib/action";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function ArticleEditPage({ params }: any) {
  const { id } = await params;
  const data = await getArticleByIdServer(id);

  if (!data) return notFound();
  return <EditArticle data={data} />;
}
