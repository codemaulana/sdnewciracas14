import CountSection from "../components/count-section";

export default function StatisticSekolah() {
  return (
    <section className="bg-primary text-white p-8 md:px-28 md:py-16">
      <h1 className="font-bold text-3xl">Statistik Sekolah</h1>
      <p className="my-2 font-semibold">
        Informasi Statistik Keseluruhan Dari Sekolah Kami. Info Selengkapnya
        Silahkan Berkunjung Ke Alamat Sekolah Kami.
      </p>
      <CountSection />
    </section>
  );
}
