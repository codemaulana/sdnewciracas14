"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/common/service/custom-motion";
import { faqs } from "@/common/lib/item";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <motion.section
      className="max-w-3xl mx-auto p-6 space-y-6"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h2 className="text-4xl font-extrabold text-center mb-4">FAQ Sekolah</h2>

      {faqs.map((item, idx) => (
        <motion.div
          key={idx}
          className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <button
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-content-${idx}`}
            className="w-full flex cursor-pointer justify-between items-center p-5 focus:outline-none"
          >
            <span className="text-xl font-semibold text-gray-800">
              {item.question}
            </span>
          </button>

          <motion.div
            id={`faq-content-${idx}`}
            initial={{ height: 0, opacity: 0 }}
            animate={
              openIndex === idx
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-5 overflow-hidden group-open:bg-gray-50"
          >
            <p className="py-4 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
}
