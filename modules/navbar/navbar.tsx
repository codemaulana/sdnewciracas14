"use client";
import { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  IoHomeOutline, IoImagesOutline, IoSearchOutline, IoCloseOutline 
} from "react-icons/io5";
import { 
  FaUserCircle, FaBullhorn, FaNewspaper, FaRegFilePdf, FaSpinner 
} from "react-icons/fa";
import { searchEverything } from "@/common/service/search";

const navLinks = [
  { name: "Home", href: "/", icon: <IoHomeOutline size={22} /> },
  { name: "Profil", href: "/profile", icon: <FaUserCircle size={22} /> },
  { name: "Info", href: "/information", icon: <FaBullhorn size={20} /> },
  { name: "Artikel", href: "/artikel", icon: <FaNewspaper size={20} /> },
  { name: "File", href: "/file", icon: <FaRegFilePdf size={20} /> },
  { name: "Galeri", href: "/galeri", icon: <IoImagesOutline size={22} /> },
];

export default function NavbarPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Efek Glassmorphism saat Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logika Pencarian (Debounce 300ms)
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 1) {
        setIsLoading(true);
        const data = await searchEverything(query);
        setResults(data);
        setIsLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <>
      {/* --- TOP NAVBAR (Desktop) --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div className="text-white leading-tight">
              <h1 className="text-sm md:text-lg font-black tracking-tighter uppercase">SDN Ciracas 14</h1>
              <p className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest">Pendidikan Unggul</p>
            </div>
          </Link>

          {/* Navigasi Desktop - Tengah */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1 rounded-2xl border border-white/10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  pathname === link.href ? "bg-blue-600 text-white shadow-lg" : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}>
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Search Trigger */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-blue-600 transition-all border border-white/20 active:scale-90"
          >
            <IoSearchOutline size={22} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM DOCK --- */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm">
        <m.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-4xl p-2 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative flex-1">
                <div className={`flex flex-col items-center justify-center gap-1 py-2 transition-all ${
                  isActive ? "text-blue-400 scale-110" : "text-slate-500"
                }`}>
                  {link.icon}
                  <span className="text-[8px] font-black uppercase tracking-tighter italic">
                    {link.name}
                  </span>
                  {isActive && (
                    <m.div layoutId="userNav" className="absolute -bottom-1 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  )}
                </div>
              </Link>
            );
          })}
        </m.div>
      </nav>

      {/* --- FULLSCREEN SEARCH OVERLAY --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <m.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-slate-950/98 backdrop-blur-2xl flex flex-col p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-all hover:rotate-90"
            >
              <IoCloseOutline size={40} />
            </button>
            
            <div className="w-full max-w-2xl mx-auto mt-24">
              <m.h2 initial={{ y: 20 }} animate={{ y: 0 }} className="text-white text-3xl font-black mb-8 text-center tracking-tight">
                Mau cari <span className="text-blue-500 italic">apa</span> hari ini?
              </m.h2>
              
              <div className="relative group">
                <input 
                  autoFocus
                  type="text"
                  placeholder="Ketik judul artikel..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-white/5 border-b-2 border-slate-700 focus:border-blue-500 p-6 text-xl md:text-2xl text-white transition-all outline-none placeholder:text-slate-600"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {isLoading ? <FaSpinner className="animate-spin text-blue-500" /> : <IoSearchOutline className="text-slate-500" size={24} />}
                </div>
              </div>

              {/* Hasil Pencarian */}
              <div className="mt-10 space-y-3 max-h-[50vh] overflow-y-auto custom-scrollbar px-2">
                {results.length > 0 ? (
                  results.map((res) => (
                    <Link key={res.id} href={`/artikel/${res.id}`} onClick={() => setIsSearchOpen(false)}>
                      <m.div 
                        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                        className="p-5 bg-white/5 rounded-[20px] border border-white/5 hover:border-blue-500/50 flex justify-between items-center transition-all group"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-white font-bold group-hover:text-blue-400 transition-colors">{res.judul}</span>
                          <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">
                            {res.kategori || "Umum"}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <IoSearchOutline size={14} />
                        </div>
                      </m.div>
                    </Link>
                  ))
                ) : query.length > 1 && !isLoading ? (
                  <m.div initial={{ opacity: 0 }} className="text-center py-10">
                    <p className="text-slate-500 italic">Maaf, "{query}" tidak ditemukan.</p>
                  </m.div>
                ) : null}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}