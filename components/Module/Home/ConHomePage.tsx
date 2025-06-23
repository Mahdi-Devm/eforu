import React from "react";
import Container from "../container/Container";
import ResponsiveGif from "./ResponsiveGif";
import BrandCarousel from "./BrandCarousel";
import MidBanners from "./MidBanners";
import IconCards from "./IconCards";
import AppSection from "./AppSection";

import { brandImages } from "../../../data/bannersitems";
import {
  FiMessageSquare,
  FiUsers,
  FiMessageCircle,
  FiGift,
} from "react-icons/fi";

interface IconCardData {
  image: string;
  icon: React.ComponentType<{ size?: number }>;
}

const data: IconCardData[] = [
  { image: "نظرسنجی", icon: FiMessageSquare },
  { image: "معرفی به دوستان", icon: FiUsers },
  { image: "نظرات و پیشنهادات", icon: FiMessageCircle },
  { image: "هدایای من", icon: FiGift },
];

const ConHomePage: React.FC = () => {
  return (
    <Container>
      <ResponsiveGif />
      <BrandCarousel brandImages={brandImages} />
      <MidBanners />
      <IconCards data={data} />
      <AppSection />
    </Container>
  );
};

export default ConHomePage;
