"use client";

import Container from "../container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";

type BannerType = {
  siteBannerId: string;
  imageUrl: string;
  link: string;
  description: string;
};

interface Props {
  dataRewardPoints: BannerType[] | null;
  hasError: boolean;
}

function Sliderheaderbaner({ dataRewardPoints, hasError }: Props) {
  if (hasError || !dataRewardPoints) {
    return (
      <Container>
        <div className="text-center text-red-600  py-6">
          خطا در بارگذاری بنرها!
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Swiper
        className="py-4 rounded-2xl"
        spaceBetween={20}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {dataRewardPoints.map((item) => (
          <SwiperSlide key={item.siteBannerId}>
            <Image
              src={item.imageUrl}
              alt={item.description}
              width={4000}
              height={400}
              priority
              className="w-full h-90 object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Sliderheaderbaner;
