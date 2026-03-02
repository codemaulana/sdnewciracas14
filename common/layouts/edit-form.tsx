"use client";

import React, { useState, useEffect } from "react";
import { useActionState } from "react";
import { updateArticle } from "../lib/action";
import { Articles } from "@prisma/client";
import EditKontenArticle from "../components/edit-content";

export default function EditArticle({ data }: { data: Articles }) {
  const [state, action, pending] = useActionState(
    updateArticle.bind(null, data.id),
    null
  );

  return (
    <form
      action={action}
      className="mt-4 mb-32 md:w-[50%] lg:w-[70%]  grid gap-6 rounded "
    >
      <h1 className="text-2xl font-bold">Update Article</h1>

      <div className="grid gap-2">
        <label htmlFor="judul" className="font-bold">
          Judul Article
        </label>
        <input
          type="text"
          name="judul"
          defaultValue={data.judul}
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
          defaultValue={data.author}
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

      <div className="grid gap-2">
        <label htmlFor="content" className="font-bold">
          Isi Konten Article
        </label>
        <EditKontenArticle values={data.content} />
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
        disabled={pending}
        className="bg-primary text-white py-2 px-4 font-semibold rounded cursor-pointer hover:bg-blue-900 transition"
      >
        {pending ? "Updating..." : "Update"}
      </button>
    </form>
  );
}
