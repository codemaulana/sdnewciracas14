import CountSection from "../components/count-section";
import { getStats } from "../service/statistics";

export default async function StatisticSekolah() {
  const stats = await getStats();
  
  return (
    <section className="relative bg-slate-900 overflow-hidden py-20 px-6 md:px-28">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-600 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
            Data Real-Time
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Statistik Sekolah
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Informasi statistik keseluruhan dari sekolah kami. Data ini mencerminkan 
            dedikasi kami dalam menciptakan lingkungan pendidikan yang berkualitas.
          </p>
        </div>

        <CountSection dbData={stats} />
      </div>
    </section>
  );
}