"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const ref = useRef(null);
  
  // Deteksi scroll: animasi jalan sekali (once: true) saat masuk area layar
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  
  const rounded = useTransform(count, (latest) => 
    new Intl.NumberFormat("id-ID").format(Math.round(latest))
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration: 2, 
        ease: "easeOut" 
      });
      return () => controls.stop();
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref} className="tabular-nums font-bold">{rounded}</motion.span>;
}