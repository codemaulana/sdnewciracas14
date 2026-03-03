"use client";
import CountUp from "react-countup";
import { motion } from "motion/react";
import { FaChalkboardTeacher, FaSchool, FaUserGraduate, FaAward } from "react-icons/fa";

export default function CountSection({ dbData }: { dbData: any[] }) {
  const getCount = (label: string, defaultVal: number) => {
    const item = dbData.find((d) => d.label === label);
    return item ? item.count : defaultVal;
  };

  const data = [
    { id: 1, label: "Staff & Guru", count: getCount("Staff & Guru", 200), icon: <FaChalkboardTeacher />, color: "from-blue-600 to-cyan-500" },
    { id: 2, label: "Kelas", count: getCount("Kelas", 150), icon: <FaSchool />, color: "from-indigo-600 to-purple-500" },
    { id: 3, label: "Siswa", count: getCount("Siswa", 100), icon: <FaUserGraduate />, color: "from-emerald-600 to-teal-500" },
    { id: 4, label: "Penghargaan", count: getCount("Penghargaan", 100), icon: <FaAward />, color: "from-rose-600 to-orange-500" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      /* UBAH: Jadi 2 kolom di mobile (grid-cols-2), gap diperkecil */
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full mt-6 md:mt-16"
    >
      {data.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -5 }}
          /* UBAH: Padding diperkecil (p-4) agar tidak terlalu makan tempat di HP */
          className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-8 rounded-[20px] md:rounded-4xl overflow-hidden shadow-xl"
        >
          {/* Ikon diperkecil untuk mobile */}
          <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white text-lg md:text-2xl mb-4 md:mb-8 shadow-lg`}>
            {item.icon}
          </div>

          <div className="relative z-10 text-white">
            <div className="flex items-baseline gap-1">
              {/* Angka disesuaikan sizenya (text-2xl di mobile) */}
              <span className="text-2xl md:text-5xl font-black tracking-tight">
                <CountUp end={item.count} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />
              </span>
              <span className="text-lg md:text-2xl font-bold text-blue-400">/</span>
            </div>
            {/* Label dibuat lebih proporsional */}
            <h3 className="text-slate-400 font-bold text-[9px] md:text-xs uppercase tracking-wider mt-1">
              {item.label}
            </h3>
          </div>
          
          <div className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r ${item.color} group-hover:w-full transition-all duration-500`} />
        </motion.div>
      ))}
    </motion.div>
  );
}