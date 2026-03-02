import { MetadataRoute } from "next";
import {prisma }from "@/lib/prisma"; // Pastikan path prisma kamu benar

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sdnciracas14.sch.id";

  // Ambil data semua artikel dari database sekolah
  const articles = await prisma.articles.findMany({
    select: { id: true, updatedAt: true },
  });

  // Petakan artikel ke format sitemap
  const articleEntries = articles.map((post) => ({
    url: `${baseUrl}/artikel/${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Gabungkan dengan halaman statis kamu yang tadi
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/profil`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...articleEntries, 
  ];
}