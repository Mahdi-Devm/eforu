"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
interface Brand {
  url: string;
}

interface BrandCarouselProps {
  brandImages: Brand[];
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ brandImages }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        350: {
          slidesPerView: 2.7,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2.7,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 10,
          spaceBetween: 40,
        },
      }}
      className="mySwiper"
    >
      {brandImages.map((brand, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="bg-white p-4 shadow-md rounded-lg min-w-[100px] md:min-w-[120px] h-24 border border-stone-300 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={brand.url}
              alt={`brand-${index}`}
              width={80}
              height={72}
              objectFit="contain"
              className="select-none"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandCarousel;
