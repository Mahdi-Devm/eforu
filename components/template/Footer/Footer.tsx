"use client";
import React from "react";
import Container from "../../Module/container/Container";

import "swiper/css";

import Footertop from "./Footertop";
import FooterSwiper from "./FooterSwiper";
import FooterAddres from "./FooterAddres";
import FooterRules from "./FooterRules";
function Footer() {
  return (
    <footer className="bg-gray-100  mt-20 p-1">
      <Container>
        <Footertop />
        <FooterSwiper />
        <FooterAddres />
        <FooterRules />
      </Container>
    </footer>
  );
}

export default Footer;
