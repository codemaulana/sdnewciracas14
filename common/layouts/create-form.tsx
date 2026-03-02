"use client";

import React, { useEffect } from "react";
import { useActionState } from "react";
import { uploadArticle } from "../lib/action";
import IsiKontenArticle from "../components/isi-article";

export default function FormArticle() {
  const [state, action] = useActionState(uploadArticle, null);

  const kategoriOptions = [
    "Berita Sekolah",
    "Prestasi Siswa",
    "Kegiatan Belajar",
    "Pengumuman",
    "Budaya & Seni",
    "Olahraga",
    "Teknologi",
    "Jurnal Harian",
    "Tips Pendidikan",
    "Informasi",
    "Lainnya",
  ];

  return (
    <form
      action={action}
      className="mt-8 mb-32 md:w-[50%] lg:w-[70%] p-8 grid gap-6 shadow-md shadow-primary rounded md:shadow-none"
    >
      <h1 className="text-2xl font-bold">Tambah Article</h1>

      <div className="grid gap-2">
        <label htmlFor="judul" className="font-bold">
          Judul Article
        </label>
        <input
          type="text"
          name="judul"
          placeholder="Masukkan judul artikel"
          className="border border-gray-300 p-2 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {state?.error?.judul && (
          <div
            className="text-red-500 text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.error.judul}
          </div>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="image" className="font-bold">
          Upload Judul Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-primary file:text-white hover:file:bg-blue-900 file:cursor-pointer"
        />
        {state?.error?.image && (
          <div
            className="text-red-500 text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.error.image}
          </div>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="author" className="font-bold">
          Nama Penulis
        </label>
        <input
          type="text"
          name="author"
          placeholder="Nama penulis"
          className="border border-gray-300 p-2 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {state?.error?.author && (
          <div
            className="text-red-500 text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.error.author}
          </div>
        )}
      </div>

      {/* Tambahan field kategori */}
      <div className="grid gap-2">
        <label htmlFor="kategori" className="font-bold">
          Kategori
        </label>
        <select
          name="kategori"
          className="border border-gray-300 p-2 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Pilih Kategori</option>
          {kategoriOptions.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>
        {state?.error?.kategori && (
          <div
            className="text-red-500 text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.error.kategori}
          </div>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="content" className="font-bold">
          Isi Konten Article
        </label>
        <IsiKontenArticle />
        {state?.error?.content && (
          <div
            className="text-red-500 text-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.error.content}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 font-semibold rounded hover:bg-blue-900 transition"
      >
        Upload
      </button>
    </form>
  );
}
