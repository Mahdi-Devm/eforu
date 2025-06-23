import React from "react";
import Image from "next/image";

const MidBanners: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mt-10">
      <div className="relative w-full md:flex-1 h-40 md:h-65 rounded-2xl overflow-hidden">
        <Image
          src="/images/bannermobile/banner1.webp"
          alt="بنر 1"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="relative w-full md:flex-1 h-40 md:h-65 rounded-2xl overflow-hidden">
        <Image
          src="/images/bannermobile/banner2.webp"
          alt="بنر 2"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default MidBanners;
