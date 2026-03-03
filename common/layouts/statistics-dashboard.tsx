"use client";
import { useState } from "react";
import { FaChalkboardTeacher, FaSchool, FaUserGraduate, FaAward, FaCheckCircle, FaSave } from "react-icons/fa";
import { updateStatCount } from "../service/statistics";

export default function EditStatistics({ initialData }: { initialData: any[] }) {
  const [formData, setFormData] = useState(
    initialData.reduce((acc, curr) => ({ ...acc, [curr.label]: curr.count }), {})
  );
  const [loading, setLoading] = useState<string | null>(null);

  const handleChange = (label: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [label]: parseInt(value) || 0 }));
  };

  const handleSave = async (label: string) => {
    setLoading(label);
    try {
      await updateStatCount(label, formData[label]);
      // Bisa tambahkan toast notification di sini
    } finally {
      setLoading(null);
    }
  };

  const statConfig = [
    { label: "Staff & Guru", icon: <FaChalkboardTeacher />, color: "bg-blue-500" },
    { label: "Kelas", icon: <FaSchool />, color: "bg-emerald-500" },
    { label: "Siswa", icon: <FaUserGraduate />, color: "bg-amber-500" },
    { label: "Penghargaan", icon: <FaAward />, color: "bg-purple-500" },
  ];

  return (
    <div className="max-w-md mx-auto pb-24 px-4 pt-4 bg-slate-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-2xl font-extrabold text-slate-800">Statistik Sekolah</h1>
        <p className="text-sm text-slate-500">Kelola data real-time SDN Ciracas 14</p>
      </header>

      <div className="grid gap-4">
        {statConfig.map((item) => (
          <div 
            key={item.label} 
            className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-4 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className={`${item.color} p-3 rounded-2xl text-white text-xl shadow-lg shadow-opacity-20`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {item.label}
                </label>
                <input 
                  type="number" 
                  value={formData[item.label] ?? 0}
                  className="w-full text-2xl font-bold text-slate-700 bg-transparent focus:outline-none"
                  onChange={(e) => handleChange(item.label, e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={() => handleSave(item.label)}
              disabled={loading === item.label}
              className={`w-full py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-all active:scale-95 ${
                loading === item.label 
                ? "bg-slate-100 text-slate-400" 
                : "bg-slate-900 text-white hover:bg-black"
              }`}
            >
              {loading === item.label ? (
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-300 border-t-slate-600" />
              ) : (
                <><FaSave /> Simpan Perubahan</>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100">
        <p className="text-[11px] text-amber-700 leading-relaxed">
          <strong>Perhatian:</strong> Angka yang Anda simpan akan langsung memperbarui grafik animasi di halaman beranda sekolah.
        </p>
      </div>
    </div>
  );
}