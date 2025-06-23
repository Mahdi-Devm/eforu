import React from "react";
import Image from "next/image";
import { logosData } from "../../../data/LogoDataFooter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
function FooterSwiper() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 7 },
      }}
      className="py-8 border-y border-gray-300 "
    >
      {logosData.map((logo, index) => (
        <SwiperSlide
          key={index}
          className="h-[70px] flex items-center justify-center"
        >
          <div className="max-w-[80px] max-h-[80px] w-full h-full flex items-center justify-center">
            <Image
              src={logo.imageUrl}
              alt={logo.title || "لوگو"}
              title={logo.title}
              className="object-contain w-40 h-15"
              width={80}
              height={40}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FooterSwiper;
