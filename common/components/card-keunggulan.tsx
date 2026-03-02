"use client";
import Image from "next/image";
import { motion as m } from "motion/react";

interface KeunggulanProps {
  src: string;
  judul: string;
  isi: string;
}

export default function CardKeunggulan({ src, judul, isi }: KeunggulanProps) {
  return (
    <m.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="grid text-center justify-items-center"
    >
      <Image
        src={src}
        alt={judul}
        width={1000}
        height={1000}
        className="w-24 h-24 object-cover rounded-full"
      />
      <h3 className="font-bold text-lg my-3">{judul}</h3>
      <p className="text-sm font-semibold text-gray-600">{isi}</p>
    </m.div>
  );
}
