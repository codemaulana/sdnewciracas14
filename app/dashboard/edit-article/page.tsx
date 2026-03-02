import Card from "@/common/components/card";
import { getArticle } from "@/common/lib/action";

export const dynamic = "force-dynamic";
export default async function EditArticlePage() {
  const article = await getArticle();

  return (
    <div className="p-4 lg:p-16 mb-24">
      <h1 className="font-bold text-xl">Edit & Delete Articles</h1>
      <div className="grid md:grid-cols-2 gap-8 my-5">
        {article.map((item : any) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
