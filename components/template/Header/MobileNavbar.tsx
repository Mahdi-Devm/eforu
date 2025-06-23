"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi2";
import { IoGiftOutline } from "react-icons/io5";
import { PiCoinsLight } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";

export interface NavItem {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const ListItemsHeader: NavItem[] = [
  { title: "خانه", link: "#", icon: <HiOutlineHome size={24} /> },
  { title: "جوایز", link: "#", icon: <IoGiftOutline size={24} /> },
  { title: "سکه‌ها", link: "#", icon: <PiCoinsLight size={24} /> },
  { title: "سفارشات", link: "#", icon: <LuShoppingCart size={24} /> },
];

function MobileNavbar() {
  return (
    <nav
      aria-label="ناوبری موبایل"
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-primary shadow-inner md:hidden z-50"
    >
      <ul className="flex justify-around items-center py-3 text-primary">
        {ListItemsHeader.map((item, index) => (
          <li key={index} className="flex flex-col items-center text-xs">
            <Link
              href={item.link}
              aria-label={item.title}
              className="flex flex-col items-center text-primary hover:text-[#516f99] focus:text-[#076eff] focus:outline-none transition-colors duration-300"
              tabIndex={0}
            >
              <div className="mb-1">{item.icon}</div>
              <span className="text-[15px] font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavbar;
