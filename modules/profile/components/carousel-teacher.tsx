"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "motion/react";

import Image from "next/image";
import { guru } from "@/common/lib/item";

export default function CarouselImage() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="my-8">
      <h1 className="text-center text-xl font-bold">PTK</h1>
      <p className="text-center text-sm font-bold">Data PTK Kami</p>
      <div className="container overflow-hidden mx-auto px-16 md:px-28 lg:px-16 py-8">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              0: { slidesPerView: 1, slidesPerGroup: 1 },
              760: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 5, slidesPerGroup: 5 },
            }}
            className="w-full overflow-hidden"
          >
            {guru.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={data.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-0 text-center p-2 left-0 right-0 bg-primary text-white font-bold">
                    <h1 className="h-[30px]">{data.nama}</h1>
                    <p className="text-xs mt-2 h-[20px]">{data.jabatan}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="flex justify-between mt-4">
          <button
            className="swiper-button-prev-custom px-6 py-1 cursor-pointer font-bold text-sm bg-primary text-white hover:bg-gray-800 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isBeginning}
          >
            Prev
          </button>
          <button
            className="swiper-button-next-custom px-6 py-1 cursor-pointer font-bold text-sm bg-primary text-white rounded hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isEnd}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
