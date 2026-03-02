"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/images/404-illustration.svg"
            alt="404 Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800">
          Oops! Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin
          telah dipindahkan atau dihapus.
        </p>

        <div className="flex flex-col cursor-pointer sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Kembali ke Halaman Sebelumnya
          </button>

          <Link
            href={"/"}
            className="px-6 py-3 bg-white cursor-pointer  text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
