"use client";

import { useEffect, useState } from "react";

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default function AnalogClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:p-4">
      <div className="flex overflow-hidden items-center justify-center gap-6 md:bg-primary md:rounded-full p-4 md:text-white">
        <div className="text-sm font-semibold hidden md:block">
          Selamat Datang!
        </div>

        <div className="relative w-32 h-32 border-8 border-primary md:border-white rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full z-10" />
          </div>
          <div
            className="absolute bottom-1/2 left-1/2 w-0.5 h-6 bg-primary md:bg-white origin-bottom z-10"
            style={{
              transform: `translateX(-50%) rotate(${hourDeg}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/2 left-1/2 w-0.5 h-8 bg-primary md:bg-white origin-bottom z-10"
            style={{
              transform: `translateX(-50%) rotate(${minuteDeg}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/2 left-1/2 w-0.5 h-10 bg-red-500 origin-bottom z-20"
            style={{
              transform: `translateX(-50%) rotate(${secondDeg}deg)`,
            }}
          />
          {[...Array(12)].map((_, i) => {
            const angle = (i + 1) * 30;
            const radius = 45;
            const x = radius * Math.sin((angle * Math.PI) / 180);
            const y = -radius * Math.cos((angle * Math.PI) / 180);
            return (
              <div
                key={i}
                className="absolute text-xs font-semibold px-4"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {i + 1}
              </div>
            );
          })}
        </div>

        <div className="text-sm font-semibold hidden md:block">
          Semangat Hari Ini!
        </div>
      </div>

      <div className="text-center font-bold mb-8">
        <p className="text-base">
          {days[time.getDay()]}, {time.getDate()} {months[time.getMonth()]}{" "}
          {time.getFullYear()}
        </p>
      </div>
    </div>
  );
}
