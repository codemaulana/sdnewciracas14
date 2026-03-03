import {prisma }from "@/lib/prisma";
import { HiChartBar, HiCalendar, HiGlobeAlt, HiUsers } from "react-icons/hi";
import AnimatedNumber from "../components/animate-number";
import StatsLayout from "../components/stats-layout";

const getRanges = () => {
  const now = new Date();
  return {
    today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    lastWeek: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
    lastMonth: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
  };
};

export default async function VisitorStats() {
  const { today, lastWeek, lastMonth } = getRanges();

  try {
    const [todayCount, weekCount, monthCount, totalCount] = await Promise.all([
      prisma.visitor.count({ where: { createdAt: { gte: today } } }),
      prisma.visitor.count({ where: { createdAt: { gte: lastWeek } } }),
      prisma.visitor.count({ where: { createdAt: { gte: lastMonth } } }),
      prisma.visitor.count(),
    ]);

    const statsData = [
      { label: "Hari Ini", value: todayCount, icon: HiChartBar, color: "text-blue-500" },
      { label: "Minggu Lalu", value: weekCount, icon: HiCalendar, color: "text-green-500" },
      { label: "Bulan Lalu", value: monthCount, icon: HiGlobeAlt, color: "text-purple-500" },
    ];

    return (
      <StatsLayout>
        {/* Kontainer Utama Desain Per Baris */}
        <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Statistik</h2>
            <p className="text-sm text-gray-500">Pengunjung SDN Ciracas 14</p>
          </div>

          {/* List Per Baris */}
          <div className="space-y-6">
            {statsData.map((item) => (
              <div 
                key={item.label} 
                className="flex items-center justify-between border-b border-gray-50 pb-4"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
                    <item.icon className="text-2xl" />
                  </div>
                  <span className="font-medium text-gray-600">{item.label}</span>
                </div>
                <div className="text-xl text-gray-800">
                  <AnimatedNumber value={item.value} />
                </div>
              </div>
            ))}

            {/* Baris Total (Highlight) */}
            <div className="mt-4 pt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <HiUsers className="text-2xl" />
                </div>
                <span className="font-bold text-gray-800">Total Kunjungan</span>
              </div>
              <div className="text-3xl font-black text-blue-600 tracking-tighter">
                <AnimatedNumber value={totalCount} />
              </div>
            </div>
          </div>
        </div>
      </StatsLayout>
    );
  } catch (error) {
    console.error("Prisma Error:", error);
    return null;
  }
}