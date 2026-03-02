import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/common/components/providers";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "SD Negeri Ciracas 14 Jakarta Timur - Website Resmi",
  description:
    "Selamat datang di website resmi SDN Ciracas 14 Jakarta Timur. Dapatkan informasi terkini seputar profil sekolah, guru, kegiatan siswa, pengumuman, prestasi, dan artikel pendidikan.",
  keywords: [
    "SDN Ciracas 14",
    "SD Negeri Ciracas 14",
    "Sekolah Dasar Negeri Ciracas 14",
    "SD Ciracas 14 Jakarta",
    "SD Negeri Ciracas 14 Jakarta Timur",
    "Sekolah Dasar di Jakarta Timur",
    "Pendidikan Dasar Jakarta Timur",
    "Sekolah Negeri Ciracas",
    "Website Resmi SDN Ciracas 14",
    "sdnciracas14.sch.id",
    "sdciracas14",
    "Sekolah Dasar Negeri Jakarta Timur",
    "Sekolah Dasar Negeri Ciracas",
    "SDN Ciracas",
    "Sekolah Ciracas",
  ],
  metadataBase: new URL("https://sdnciracas14.sch.id"),
  openGraph: {
    title: "SD Negeri Ciracas 14 Jakarta Timur - Website Resmi",
    description:
      "Website resmi SDN Ciracas 14 Jakarta Timur. Temukan berbagai informasi penting seperti profil sekolah, data guru, agenda kegiatan, pengumuman resmi, dan artikel seputar pendidikan dasar.",
    url: "https://sdnciracas14.sch.id",
    siteName: "SD Negeri Ciracas 14 Jakarta Timur",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo SD Negeri Ciracas 14 Jakarta Timur",
      },
    ],
    locale: "id-ID",
    type: "website",
  },
  alternates: {
    canonical: "https://sdnciracas14.sch.id",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YAHOO_VERIFICATION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
