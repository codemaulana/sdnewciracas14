"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdCampaign } from "react-icons/md";

function ImageCarousel({ articles }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && articles && articles.length > 0) {
        setCurrentSlide((prev) =>
          prev === articles.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, articles]);

  // Jika tidak ada artikel
  if (!articles || articles.length === 0) {
    return (
      <div className="flex justify-center items-center h-96 bg-gray-100 rounded-xl">
        <div className="text-xl font-medium text-gray-700">
          Tidak ada artikel tersedia
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold mb-8 mt-16">Informasi Terkini</h2>

      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / articles.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="relative h-96 bg-gray-900">
          {articles.map((article: any, index: any) => (
            <div
              key={article.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full scale-90"
                    : "opacity-0 translate-x-full scale-90"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img
                src={article.image}
                alt={article.judul}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-white text-xl font-bold mb-3">
                  {article.judul}
                </h3>

                <Link
                  href={`/artikel/${article.id}`}
                  className="px-5 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Baca Selengkapnya
                </Link>
              </div>
              <div className="font-bold flex items-center gap-3 rounded-md p-4 bg-red-800 absolute text-white top-0 right-0">
                <MdCampaign size={30} />
                Informasi Terkini
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-20">
          {articles.map((_: any, index: any) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-5 gap-3">
        {articles.map((article: any, index: any) => (
          <button
            key={article.id}
            onClick={() => setCurrentSlide(index)}
            className={`overflow-hidden rounded-lg transition-all ${
              index === currentSlide
                ? "ring-2 ring-blue-600 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={article.image}
              alt={`Thumbnail ${article.judul}`}
              className="w-full h-16 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
