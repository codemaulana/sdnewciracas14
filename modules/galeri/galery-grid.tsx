// File: app/galeri/gallery-grid.tsx (versi yang ditingkatkan dengan modal)
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageModal } from "./galery-modal";

type GalleryImage = {
  id: string;
  image: string;
  createdAt: Date | string;
};

type GridSize = "small" | "medium" | "large";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className={`grid gap-4 grid-cols-3 md:grid-cols-5 lg:grid-cols-8 `}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end z-10">
              <p className="text-white text-xs md:text-sm pb-2">
                {new Date(image.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <Image
              src={image.image}
              alt="Foto Galeri"
              width={1000}
              height={1000}
              className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal for image detail */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.image}
          date={selectedImage.createdAt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
