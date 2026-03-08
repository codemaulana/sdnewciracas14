import ProfileComponent from "@/modules/profile/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Sekolah - SD Negeri Ciracas 14",
  description:
    "Profil lengkap SD Negeri Ciracas 14 Jakarta Timur. Pelajari sejarah sekolah, visi misi, fasilitas, prestasi, dan keunggulan pendidikan yang ditawarkan untuk putra-putri Anda.",
  keywords: [
    "Profil SDN Ciracas 14",
    "Sejarah SD Negeri Ciracas 14",
    "Visi Misi Sekolah Dasar Ciracas",
    "Fasilitas SD Negeri Jakarta Timur",
    "Prestasi Sekolah Dasar Negeri Ciracas 14",
  ],
  alternates: {
    canonical: "https://sdnciracas14.sch.id/profil",
  },
};
export default function ProfilSekolah() {
  return <ProfileComponent />;
}
