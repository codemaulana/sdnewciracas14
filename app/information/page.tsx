import ContactPage from "@/common/layouts/contact";
import ImageCarousel from "@/common/layouts/information";
import { getInfo } from "@/common/lib/action";
import Footer from "@/modules/footer/footer";
import NavbarPage from "@/modules/navbar/navbar-page";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Informasi Sekolah - SD Negeri Ciracas 14 Jakarta Timur",
  description:
    "Dapatkan informasi terbaru dan lengkap seputar SDN Ciracas 14, termasuk jadwal PPDB, kurikulum, tata tertib sekolah, dan pengumuman penting lainnya.",
  keywords: [
    "Informasi SDN Ciracas 14",
    "Pengumuman SDN Ciracas 14",
    "Info Sekolah Ciracas",
    "Website Sekolah Dasar Ciracas",
    "sdnciracas14.sch.id",
    "Informasi Pendidikan Dasar",
    "Informasi Sekolah Dasar Jakarta Timur",
  ],
  alternates: {
    canonical: "https://sdnciracas14.sch.id/information",
  },
};

export default async function DataGuru() {
  const information = await getInfo();
  return (
    <>
      <NavbarPage />
      <ImageCarousel articles={information} />
      <ContactPage />
      <Footer />
    </>
  );
}
