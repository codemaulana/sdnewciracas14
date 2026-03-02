// File: app/galeri/image-modal.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageModalProps = {
  imageUrl: string;
  date: Date | string;
  onClose: () => void;
};

export function ImageModal({ imageUrl, date, onClose }: ImageModalProps) {
  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 z-10 hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

        <div className="aspect-video relative">
          <Image
            src={imageUrl}
            alt="Detail Foto"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        <div className="p-4 bg-white">
          <p className="text-gray-700 text-sm">Diambil pada: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
}
