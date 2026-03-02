import ArticleList from "@/common/layouts/article-card";
import { prisma } from "@/lib/prisma";
import Footer from "@/modules/footer/footer";
import NavbarPage from "@/modules/navbar/navbar-page";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artikel Pendidikan - SD Negeri Ciracas 14",
  description:
    "Kumpulan artikel pendidikan dari SD Negeri Ciracas 14 Jakarta Timur. Temukan informasi terbaru seputar kegiatan sekolah, tips pendidikan, dan artikel inspiratif untuk perkembangan anak.",
  keywords: [
    "Artikel Pendidikan SDN Ciracas 14",
    "Berita Sekolah Dasar Ciracas",
    "Informasi Pendidikan SD",
    "Kegiatan SD Negeri Ciracas 14",
    "Blog Pendidikan Sekolah Dasar",
  ],
  alternates: {
    canonical: "https://sdnciracas14.sch.id/artikel",
  },
};

export default async function ArticlesPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = parseInt(searchParams?.page || "1");
  const limit = 3;
  const skip = (page - 1) * limit;

  const [articles, total] = await Promise.all([
    prisma.articles.findMany({
      where: {
        OR: [
          { judul: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.articles.count({
      where: {
        OR: [
          { judul: { contains: query, mode: "insensitive" } },
          { content: { contains: query, mode: "insensitive" } },
        ],
      },
    }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <NavbarPage />
      <h1 className="mt-20 text-center mb-3 text-2xl font-semibold">
        Data Artikel
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-32 gap-6">
        {articles.map((item: any) => (
          <ArticleList key={item.id} data={item} />
        ))}
      </div>

      <div className="my-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i}
            href={`?page=${i + 1}`}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-primary text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
