"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "motion/react";
import { FaChevronLeft, FaChevronRight, FaUserCheck } from "react-icons/fa";
import Image from "next/image";

export default function CarouselImage({ dbTeachers }: { dbTeachers: any[] }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        
        {/* Header Design */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">
              <FaUserCheck /> SD Negeri Ciracas 14
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Pendidik & <span className="text-blue-600">Tenaga Kependidikan</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm md:text-right font-medium">
            Mengenal lebih dekat sosok inspiratif di balik prestasi siswa-siswi kami.
          </p>
        </header>

        {/* Carousel Area */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ 
              nextEl: ".ptk-next", 
              prevEl: ".ptk-prev" 
            }}
            onSlideChange={(s) => { 
              setIsBeginning(s.isBeginning); 
              setIsEnd(s.isEnd); 
            }}
            breakpoints={{
              0: { slidesPerView: 1.4, spaceBetween: 12 }, // Intip sedikit kartu sebelah
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="overflow-visible!"
          >
            {dbTeachers.map((data) => (
              <SwiperSlide key={data.id}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="relative w-full h-90 md:h-card rounded-4xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100 group/card bg-slate-50"
                >
                  {/* Image - Full Color dengan Zoom halus */}
                  <Image
                    src={data.imageUrl}
                    alt={data.nama}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-110"
                  />
                  
                  {/* Bottom Info - Modern Gradient & Glass */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent pt-16">
                    <div className="relative z-10 transition-transform duration-300 group-hover/card:-translate-y-1">
                      <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight line-clamp-1">
                        {data.nama}
                      </h3>
                      <div className="h-0.5 w-8 bg-blue-500 my-2 group-hover/card:w-full transition-all duration-500" />
                      <p className="text-[10px] md:text-xs text-blue-300 font-bold uppercase tracking-widest">
                        {data.jabatan}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating Navigation - Melayang & Responsive */}
          <div className="hidden md:block">
            <button className={`ptk-prev absolute top-1/2 -left-6 z-40 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-2xl text-slate-800 border border-slate-100 transition-all hover:bg-blue-600 hover:text-white disabled:opacity-0 ${isBeginning ? 'pointer-events-none' : ''}`}>
              <FaChevronLeft size={16} />
            </button>
            <button className={`ptk-next absolute top-1/2 -right-6 z-40 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-2xl text-slate-800 border border-slate-100 transition-all hover:bg-blue-600 hover:text-white disabled:opacity-0 ${isEnd ? 'pointer-events-none' : ''}`}>
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
            <div className={`h-1.5 transition-all duration-300 rounded-full ${isBeginning ? 'w-8 bg-blue-600' : 'w-4 bg-slate-200'}`} />
            <div className={`h-1.5 transition-all duration-300 rounded-full ${!isBeginning && !isEnd ? 'w-8 bg-blue-600' : 'w-4 bg-slate-200'}`} />
            <div className={`h-1.5 transition-all duration-300 rounded-full ${isEnd ? 'w-8 bg-blue-600' : 'w-4 bg-slate-200'}`} />
        </div>
      </div>
    </section>
  );
}