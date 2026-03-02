import { prisma } from "@/lib/prisma";
import Footer from "@/modules/footer/footer";
import { GalleryGrid } from "@/modules/galeri/galery-grid";
import NavbarPage from "@/modules/navbar/navbar-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Foto - SD Negeri Ciracas 14",
  description:
    "Kumpulan foto kegiatan dan dokumentasi visual dari SD Negeri Ciracas 14 Jakarta Timur. Lihat berbagai momen berharga dan aktivitas sekolah melalui galeri foto kami.",
  keywords: [
    "Galeri Foto SDN Ciracas 14",
    "Dokumentasi Kegiatan Sekolah",
    "Foto Kegiatan SD Negeri Ciracas 14",
    "Album Foto Sekolah Dasar",
    "Dokumentasi Visual Pendidikan",
  ],

  alternates: {
    canonical: "https://sdnciracas14.sch.id/galeri",
  },
};

export default async function GalleryPage() {
  const [images, total] = await Promise.all([
    prisma.galeri.findMany({
      orderBy: { createdAt: "desc" },
    }),
    prisma.galeri.count(),
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarPage />

      <main className="flex-grow pt-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          <h1 className="text-center text-2xl font-semibold">
            Galeri Foto Sekolah
          </h1>
          <h3 className="text-center font-bold text-sm mb-6">
            Kumpulan foto kegiatan dan dokumentasi visual dari SD Negeri Ciracas
            14
          </h3>

          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="py-16 text-center text-gray-500">
              <p className="text-xl">Belum ada foto yang tersedia</p>
            </div>
          )}

          <div className="text-center text-gray-500 text-sm my-8">
            <p>
              Menampilkan {images.length} dari {total} foto
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
