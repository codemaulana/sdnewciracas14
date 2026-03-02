import PdfDownload from "@/common/components/get-pdf";
import { getPdf } from "@/common/lib/action";
import Footer from "@/modules/footer/footer";
import Navbar from "@/modules/navbar/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unduhan Dokumen - SD Negeri Ciracas 14",
  description:
    "Pusat unduhan dokumen penting SD Negeri Ciracas 14 Jakarta Timur. Akses formulir pendaftaran, jadwal pelajaran, materi pembelajaran, dan dokumen sekolah lainnya dengan mudah.",
  keywords: [
    "Unduhan Dokumen SDN Ciracas 14",
    "Download Formulir Sekolah Dasar",
    "Materi Pembelajaran SD",
    "Dokumen Resmi SD Negeri Ciracas 14",
    "Berkas Sekolah Dasar Jakarta Timur",
  ],
  alternates: {
    canonical: "https://sdnciracas14.sch.id/file",
  },
};

export default async function UnduhanPage() {
  const data = await getPdf();

  return (
    <div className="bg-primary">
      <Navbar />
      <h1 className="text-center font-semibold text-2xl pt-20 pb-8 text-white">
        File Unduhan Sekolah
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 px-10 mx-auto gap-8 mb-10">
        {data.length === 0 ? (
          <p className="text-center text-white">Tidak ada file unduhan</p>
        ) : (
          data.map((item  : any) => <PdfDownload pdfData={item} key={item.id} />)
        )}
      </div>
      <Footer />
    </div>
  );
}
