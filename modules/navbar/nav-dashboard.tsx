"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { 
  FaFilePdf, FaImages, FaChartBar, FaUserTie, 
  FaHome, FaPlusCircle, FaTimes, FaLayerGroup 
} from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";

// 1. KONFIGURASI MENU (Agar rapi dan mudah diubah)
const dashboardMenus = [
  {
    category: "Konten & Artikel",
    items: [
      { name: "Main Dashboard", path: "/dashboard", icon: <FaHome /> },
      { name: "Add Article", path: "/dashboard/add-article", icon: <FaPlusCircle /> },
      { name: "Edit & Delete", path: "/dashboard/edit-article", icon: <RiFileEditLine /> },
      { name: "Manage PDF", path: "/dashboard/upload-file", icon: <FaFilePdf /> },
    ]
  },
  {
    category: "Data Sekolah",
    items: [
      { name: "Hero Beranda", path: "/dashboard/hero", icon: <FaImages /> },
      { name: "Data Guru (PTK)", path: "/dashboard/guru", icon: <FaUserTie /> },
      { name: "Statistik", path: "/dashboard/statistics", icon: <FaChartBar /> },
    ]
  }
];

export default function NavbarDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper untuk cek active link
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* --- 2. DESKTOP & TABLET SIDEBAR (Tampil di md ke atas) --- */}
      <nav className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 w-72 bg-slate-950 border-r border-slate-800 text-white z-50">
        {/* Logo Section */}
        <div className="p-8 flex items-center gap-3 bg-linear-to-b from-slate-900 to-transparent">
          <Image
            src="https://res.cloudinary.com/dkfnmnao2/image/upload/v1744373841/Gambar_WhatsApp_2025-04-10_pukul_19.15.07_786a139d-removebg-preview_oamhmn.png"
            width={40} height={40} alt="logo" className="w-10 h-10"
          />
          <div>
            <h1 className="text-sm font-black tracking-tighter leading-tight uppercase">
              SDN 14 <span className="text-blue-500 block">Ciracas</span>
            </h1>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
          {dashboardMenus.map((group) => (
            <div key={group.category}>
              <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
                {group.category}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <div className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group ${
                      isActive(item.path) 
                        ? "bg-linear-to-r from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-900/20" 
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`}>
                      <span className={`text-lg transition-colors ${isActive(item.path) ? "text-white" : "text-blue-500 group-hover:text-blue-400"}`}>
                        {item.icon}
                      </span>
                      <span className="text-sm font-bold tracking-tight">{item.name}</span>
                      
                      {/* Active Indicator Dot */}
                      {isActive(item.path) && (
                        <motion.div layoutId="activeDot" className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Sidebar */}
        <div className="p-6 border-t border-slate-900 bg-slate-950">
            <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs">M</div>
                <div className="overflow-hidden">
                    <p className="text-xs font-bold truncate text-slate-200">Admin SDN Ciracas</p>
                    <p className="text-[9px] text-slate-500 font-medium">Administrator</p>
                </div>
            </div>
        </div>
      </nav>

      {/* --- 3. MOBILE BOTTOM NAVIGATION (Tampil di bawah md) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-18 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800 flex items-center justify-around z-50 px-4 pb-2">
        <Link href="/dashboard" className={`flex flex-col items-center gap-1 p-2 ${isActive('/dashboard') ? 'text-blue-500' : 'text-slate-500'}`}>
          <FaHome size={20} />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Home</span>
        </Link>
        <Link href="/dashboard/add-article" className={`flex flex-col items-center gap-1 p-2 ${isActive('/dashboard/add-article') ? 'text-blue-500' : 'text-slate-500'}`}>
          <FaPlusCircle size={20} />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Add</span>
        </Link>

        {/* Center Floating Button - Menu Utama */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-14 h-14 -translate-y-6 bg-linear-to-br from-blue-600 to-indigo-700 text-white rounded-full border-4 border-slate-950 flex items-center justify-center shadow-2xl shadow-blue-900/50 transition-all active:scale-90"
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaLayerGroup size={22} />}
        </button>

        <Link href="/dashboard/guru" className={`flex flex-col items-center gap-1 p-2 ${isActive('/dashboard/guru') ? 'text-blue-500' : 'text-slate-500'}`}>
          <FaUserTie size={20} />
          <span className="text-[8px] font-bold uppercase tracking-tighter">PTK</span>
        </Link>
        <Link href="/dashboard/statistics" className={`flex flex-col items-center gap-1 p-2 ${isActive('/dashboard/statistics') ? 'text-blue-500' : 'text-slate-500'}`}>
          <FaChartBar size={20} />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Stats</span>
        </Link>
      </nav>

      {/* --- 4. MOBILE MENU DRAWER (Overlay) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40 md:hidden"
            />
            {/* Drawer Content */}
            <motion.div 
              initial={{ y: "100%", opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-24 left-4 right-4 bg-slate-900 rounded-[40px] p-8 z-45 border border-slate-800 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-black text-white tracking-tight">Main Navigation</h2>
                <div className="px-3 py-1 bg-blue-600/20 text-blue-500 rounded-full text-[10px] font-bold uppercase">All Access</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {dashboardMenus.flatMap(g => g.items).map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex flex-col items-center justify-center p-5 rounded-[28px] border transition-all duration-300 ${
                      isActive(item.path) 
                        ? "bg-linear-to-br from-blue-600 to-indigo-700 border-transparent text-white shadow-lg" 
                        : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-blue-500/50"
                    }`}
                  >
                    <span className={`text-2xl mb-2 ${isActive(item.path) ? "text-white" : "text-blue-500"}`}>{item.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-tight text-center">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}