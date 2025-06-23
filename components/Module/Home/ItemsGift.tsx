"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Reward } from "./Gift";
import "swiper/css";

import ItemsGiftrewards from "./ItemsGiftrewards";

export interface Propsrewards {
  rewards: { data: Reward[] } | null;
}
function ItemsGift({ rewards }: Propsrewards) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView="auto"
      navigation
      autoplay={{ delay: 4000 }}
      loop={true}
      breakpoints={{
        234: { slidesPerView: 1.2 },
        396: { slidesPerView: 2.2 },
        640: { slidesPerView: 3.2 },
        1024: { slidesPerView: 6.2 },
      }}
      className="mt-4 h-35"
    >
      {rewards?.data.map((reward) => (
        <SwiperSlide
          key={reward.id}
          className="bg-white rounded-xl p-4 shadow-md flex flex-col h-full transition-transform duration-300 ease-in-out hover:scale-101 "
        >
          <ItemsGiftrewards reward={reward} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ItemsGift;
