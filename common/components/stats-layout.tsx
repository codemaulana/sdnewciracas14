"use client";
import { motion } from "motion/react";

export default function StatsLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center py-16 w-full"
    >
      {children}
    </motion.section>
  );
}