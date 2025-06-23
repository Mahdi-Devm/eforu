import React from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

function FooterAddres() {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
      <div className="flex gap-4 mb-4 md:mb-0">
        <SiTelegram size={25} className="hover:text-blue-400 " />
        <FaInstagramSquare size={25} className="hover:text-red-600" />
        <FaLinkedin size={25} className="hover:text-blue-600" />
      </div>
      <div className="text-center md:text-left">
        <span className="font-bold">1699</span> - اصفهان، بلوار کشاورز، سه‌راه
        مفتح، ساختمان برج آزاد، طبقه پنجم، واحد 508
      </div>
    </div>
  );
}

export default FooterAddres;
