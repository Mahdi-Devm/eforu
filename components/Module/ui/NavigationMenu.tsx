"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi2";
import { IoGiftOutline } from "react-icons/io5";
import { PiCoinsLight } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { NavItem } from "../../template/Header/MobileNavbar";

const ListItemsHeader: NavItem[] = [
  { title: "خانه", link: "/", icon: <HiOutlineHome size={24} /> },
  { title: "جوایز", link: "/rewards", icon: <IoGiftOutline size={24} /> },
  { title: "سکه‌ها", link: "/coins", icon: <PiCoinsLight size={24} /> },
  { title: "سفارشات", link: "/orders", icon: <LuShoppingCart size={24} /> },
];

const NavigationMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-12 text-gray-700 font-semibold text-sm select-none">
      {ListItemsHeader.map((item, i) => {
        const isactiv = pathname === item.link;

        return (
          <Link
            key={i}
            href={item.link}
            className={`relative flex items-center gap-2  transition-colors duration-300 ${
              isactiv
                ? "text-primary font-bold border-b-1 "
                : "hover:text-primary text-gray-700"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <h2 className="text-[15px]">{item.title}</h2>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
