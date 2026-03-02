import HomeComponent from "@/modules/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SD Negeri Ciracas 14 - Sekolah Dasar Negeri Jakarta Timur",
  description:
    "Website resmi SD Negeri Ciracas 14 Jakarta Timur. Menyediakan informasi lengkap tentang kegiatan belajar mengajar, prestasi siswa, dan fasilitas sekolah untuk membangun generasi unggul dan berakhlak mulia.",
  keywords: [
    "SD Negeri Ciracas 14",
    "SDN Ciracas 14",
    "Sekolah Dasar Jakarta Timur",
    "Pendidikan Dasar Ciracas",
    "Sekolah Negeri Ciracas",
  ],
};

export default function Home() {
  return <HomeComponent />;
}
