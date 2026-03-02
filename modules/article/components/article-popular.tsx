import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { BsCalendarWeekFill, BsFillTagsFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

export default async function ArticlePopular({
  excludeId,
}: {
  excludeId: string;
}) {
  const popularArticles = await prisma.articles.findMany({
    where: {
      id: {
        not: excludeId,
      },
    },
    orderBy: {
      viewCount: "desc",
    },
    take: 4,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("id-ID", options).replace(".", ":");
  };

  return (
    <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-10">
      <h1 className="font-semibold text-2 xl w-full bg-primary text-white p-2 rounded text-center">
        Artikel Popular
      </h1>
      {popularArticles.map((data: any) => (
        <Link href={`/article/${data.id}`} key={data.id}>
          <div className="grid gap-2 md:flex md:justify-between md:items-center">
            <div className="grid md:flex md:items-center gap-1 md:gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-600 ">
                <BsCalendarWeekFill size={15} className="text-red-800" />
                <p>{formatDate(data.createdAt.toString())}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-600 ">
                <BsFillTagsFill size={17} className="text-red-800" />
                <p>{data.kategori || "Berita Sekolah"}</p>
              </div>
            </div>
            <div className="flex items-center text-xs gap-2">
              <FaRegUserCircle size={16} className="text-red-600" />
              <h4 className="font-bold">{data.author}</h4>
            </div>
          </div>
          <h1 className="text-xl font-semibold">{data.judul}</h1>
          <div
            className="line-clamp-2 text-xs"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </Link>
      ))}
    </div>
  );
}
