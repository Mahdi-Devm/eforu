"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../Module/ui/Logo/Logo";
import AuthButton from "../../Module/ui/AuthButton";
import MobileMenu from "../../Module/ui/MobileMenu";
import NavigationMenu from "../../Module/ui/NavigationMenu";
import { useRouter } from "next/navigation";
import HeaderAdBar from "./HeaderAdBar";
import MobileAuthButton from "./MobileAuthButton";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showAd, setShowAd] = useState<boolean>(true);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setShowAd(false);
      } else if (scrollTop < lastScrollTop) {
        setShowAd(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleRedirect = () => {
    setMenuOpen(!menuOpen);
    router.push("/Login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg rounded-3xl w-full md:w-[1400px] mx-auto">
      <HeaderAdBar visible={showAd} />

      <div className="flex justify-between items-center py-4 relative px-4 md:px-0 w-full md:w-300 mx-auto">
        <Logo />
        <NavigationMenu />
        <MobileAuthButton onClick={handleRedirect} />
        <AuthButton className="hidden md:flex" />
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
