"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaTrash, FaCloudUploadAlt, FaSpinner, FaExclamationTriangle } from "react-icons/fa";
import { deleteHeroImage, getHeroImages, uploadHeroImage } from "@/common/service/hero";

export default function ManageHero() {
  const [images, setImages] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadData = async () => {
    const res = await getHeroImages();
    setImages(res);
  };

  useEffect(() => { loadData(); }, []);

  // Fungsi untuk reset error setelah beberapa detik
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. VALIDASI UKURAN FILE (Maks 1MB)
    if (file.size > 1024 * 1024) {
      setErrorMessage("Ukuran file terlalu besar! Maksimal 1MB saja.");
      e.target.value = ""; // Reset input
      return;
    }

    // 2. VALIDASI NAMA DUPLIKAT (Cek di state lokal)
    // Mencari apakah nama file sudah ada di URL yang tersimpan
    const isDuplicate = images.some((img) => img.url.toLowerCase().includes(file.name.toLowerCase()));
    if (isDuplicate) {
      setErrorMessage("File dengan nama ini sudah ada! Gunakan nama lain.");
      e.target.value = "";
      return;
    }

    setIsUploading(true);
    setErrorMessage(null); // Bersihkan error sebelumnya
    
    const formData = new FormData();
    formData.append("image", file);

    try {
      await uploadHeroImage(formData);
      await loadData();
    } catch (err: any) {
      // Menangkap error dari Server (seperti error Vercel Blob)
      setErrorMessage(err.message || "Gagal mengunggah gambar.");
    } finally {
      setIsUploading(false);
      e.target.value = ""; // Reset input
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-10 text-slate-800 relative mb-36">
      
      {/* NOTIFIKASI ERROR (Floating Alert) */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md bg-red-50 border border-red-200 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <div className="bg-red-500 text-white p-2 rounded-xl">
              <FaExclamationTriangle />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-red-900">Upload Gagal</p>
              <p className="text-xs text-red-700">{errorMessage}</p>
            </div>
            <button onClick={() => setErrorMessage(null)} className="text-red-400 hover:text-red-600 text-xl font-bold px-2">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-black tracking-tight">Gallery Hero Beranda</h1>
        <p className="text-slate-500">Upload dan kelola foto utama SDN Ciracas 14</p>
      </header>

      {/* Upload Box Premium */}
      <label className={`group relative mb-12 flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-[32px] transition-all cursor-pointer overflow-hidden ${isUploading ? 'bg-slate-50 border-blue-200' : 'bg-white border-slate-300 hover:bg-slate-50 hover:border-blue-500'}`}>
        {isUploading ? (
          <div className="flex flex-col items-center gap-3">
            <FaSpinner className="animate-spin text-3xl text-blue-600" />
            <span className="font-bold text-slate-600">Sedang Mengunggah...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="bg-linear-to-br from-blue-600 to-cyan-500 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
              <FaCloudUploadAlt size={24} />
            </div>
            <span className="font-bold text-slate-700 mt-2 text-center px-4">Klik untuk Upload Foto Baru</span>
            <span className="text-xs text-slate-400 font-medium">Maksimal 1MB • Nama file harus unik</span>
          </div>
        )}
        <input type="file" className="hidden" onChange={handleFileChange} disabled={isUploading} accept="image/*" />
      </label>

      {/* Grid List - 2 Kolom di Mobile */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <AnimatePresence mode="popLayout">
          {images.map((img) => (
            <motion.div 
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative aspect-square md:aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl group border border-slate-100"
            >
              <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hero" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <button 
                  onClick={() => deleteHeroImage(img.id, img.url).then(loadData)}
                  className="bg-white/20 backdrop-blur-md text-white p-4 rounded-2xl hover:bg-red-500 transition-all active:scale-90"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}