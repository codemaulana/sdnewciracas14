"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaTrash, FaPlus, FaSpinner, FaExclamationCircle, FaUserTie } from "react-icons/fa";
import { deleteTeacher, getTeachers, uploadTeacher } from "@/common/service/guru";

export default function ManageGuru() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const refresh = async () => setTeachers(await getTeachers());
  
  useEffect(() => { refresh(); }, []);
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nama = formData.get("nama") as string;
    const file = formData.get("image") as File;

    if (file.size > 1024 * 1024) {
      return setErrorMessage("File terlalu besar! Maksimal 1MB.");
    }

    const isDuplicate = teachers.some(t => t.nama.toLowerCase() === nama.toLowerCase());
    if (isDuplicate) {
      return setErrorMessage("Nama Guru tersebut sudah terdaftar!");
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      await uploadTeacher(formData);
      formRef.current?.reset();
      await refresh();
    } catch (err: any) {
      setErrorMessage(err.message || "Gagal menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-10 text-slate-800 relative mb-32">
      
      <AnimatePresence>
        {errorMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-100 w-[90%] max-w-sm bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-500/50"
          >
            <FaExclamationCircle className="text-red-500 text-xl" />
            <span className="text-xs font-bold">{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-black">Data PTK SDN Ciracas 14</h1>
        <p className="text-slate-500 text-sm">Kelola informasi guru & staff secara real-time</p>
      </header>

      {/* FORM INPUT PREMIUM */}
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-6 rounded-4xl shadow-xl border border-slate-100 mb-12 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="nama" placeholder="Nama Lengkap & Gelar" className="p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500 text-sm" required />
          <input name="jabatan" placeholder="Jabatan (Contoh: Guru Kelas 4B)" className="p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500 text-sm" required />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <input type="file" name="image" accept="image/*" className="text-xs w-full" required />
          </div>
          <button disabled={loading} className="w-full md:w-auto bg-linear-to-br from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all active:scale-95 disabled:opacity-50">
            {loading ? <FaSpinner className="animate-spin" /> : <><FaPlus /> Simpan Data</>}
          </button>
        </div>
      </form>

      {/* GRID DATA GURU - 2 KOLOM MOBILE */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
        <AnimatePresence mode="popLayout">
          {teachers.map((t) => (
            <motion.div 
              key={t.id} 
              layout 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <img src={t.imageUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={t.nama} />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button 
                    onClick={() => deleteTeacher(t.id, t.imageUrl).then(refresh)}
                    className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-all active:scale-90"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>
              <div className="p-3 text-center bg-white">
                <h3 className="text-[10px] md:text-xs font-black line-clamp-1 uppercase text-slate-800">{t.nama}</h3>
                <p className="text-[8px] md:text-[10px] text-blue-600 font-bold mt-1 uppercase tracking-tighter">{t.jabatan}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}