"use client";

import { useState, DragEvent, FormEvent } from "react";
import { PostFilePdf } from "@/common/lib/action";

export default function UploadPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Judul wajib diisi");
      return;
    }
    if (!file) {
      setError("Wajib upload file");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await PostFilePdf(formData);
      if (result?.error) {
        setError("Gagal mengupload file");
      } else {
        setSuccess(true);
        setTitle("");
        setFile(null);
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengupload");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col gap-6"
    >
      <h1 className="text-center text-2xl font-semibold">Upload Your PDF</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-medium">
          Judul
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul file"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-blue-500 transition-colors"
      >
        {!file ? (
          <>
            <p className="text-gray-600">Drag & drop your PDF here</p>
            <p className="mt-2 text-gray-600 text-sm">or</p>
            <label
              htmlFor="file"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition"
            >
              Select File
              <input
                type="file"
                id="file"
                name="file"
                accept="application/pdf"
                onChange={handleFileChange}
                hidden
              />
            </label>
          </>
        ) : (
          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700 truncate max-w-xs">
              📄 {file.name}
            </span>
            <button
              type="button"
              onClick={removeFile}
              className="ml-4 text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm">File berhasil diupload!</p>
      )}

      <button
        type="submit"
        disabled={isLoading || !file}
        className="w-full py-2 bg-primary cursor-pointer text-white rounded-md font-medium hover:bg-primary/80 transition disabled:opacity-50"
      >
        {isLoading ? "Uploading..." : "Upload File"}
      </button>
    </form>
  );
}
