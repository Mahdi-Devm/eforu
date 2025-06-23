import Image from "next/image";
import React from "react";
function Logo() {
  return (
    <Image
      src="/images/logo/new-logo.8260ce94.svg"
      alt="Logo"
      width={96}
      height={96}
      className="w-24 md:w-32 lg:w-40 h-auto"
    />
  );
}

export default Logo;
