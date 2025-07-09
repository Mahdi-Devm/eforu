import Image from "next/image";
import React from "react";

function ImageComponents() {
  return (
    <div className="hidden md:flex w-1/2 items-center justify-center p-12">
      <Image
        src="/undraw_feedback_ebmx.svg"
        width={100}
        height={100}
        alt="Forgot Password Illustration"
        className="w-full "
      />
    </div>
  );
}

export default ImageComponents;
