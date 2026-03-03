"use client";

import { useEffect } from "react";
import { recordVisit } from "../lib/visitor";

export default function VisitorTracker() {
  useEffect(() => {
    // Fungsi ini akan berjalan di browser setelah render selesai
    const track = async () => {
      await recordVisit();
    };
    track();
  }, []);

  return null; // Komponen ini "hantu", tidak terlihat
}