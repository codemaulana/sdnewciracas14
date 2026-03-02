"use client";
import { useState } from "react";
import TiptapEditorComponent from "./TiptapEditorComponent";
import dynamic from 'next/dynamic';

// 1. Inisialisasi dynamic import
// Kita beri tahu Next.js: "Jangan load file ini di server, load di browser saja!"
const TiptapEditor = dynamic(() => import('./TiptapEditorComponent'), { 
  ssr: false, // KUNCINYA ADA DI SINI
  loading: () => (
    <div className=" w-full bg-gray-800 animate-pulse rounded border border-gray-700 flex items-center justify-center">
      <p className="text-gray-400">Menyiapkan editor teks...</p>
    </div>
  )
});
export default function IsiKontenArticle() {
  const [content, setContent] = useState("");

  return (
    <div className="w-full space-y-2">
      <TiptapEditorComponent onChange={(html : any) => setContent(html)} />
      <input type="hidden" name="content" value={content} />
    </div>
  );
}