import EditStatistics from "@/common/layouts/statistics-dashboard";
import { getStats } from "@/common/service/statistics";

export default async function DashboardStatsPage() {
  // 1. Ambil data terbaru dari database di sisi server
  const stats = await getStats();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Pengaturan Statistik Sekolah</h1>
      
      {/* 2. Panggil komponen edit dan kirim datanya */}
      <EditStatistics initialData={stats} />
      
      <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
        <p className="text-sm">
          <strong>Tips:</strong> Perubahan angka di sini akan langsung merubah tampilan di halaman utama SDN Ciracas 14 secara otomatis.
        </p>
      </div>
    </div>
  );
}