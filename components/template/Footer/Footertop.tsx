import Image from "next/image";
import React from "react";
import { BsSend } from "react-icons/bs";

function Footertop() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-10 ">
      <Image
        width={300}
        height={120}
        src="/images/enamad/enamad.webp"
        alt="نماد اعتماد"
      />
      <div className="text-center md:text-right">
        <h2 className="mb-4 font-bold text-sm">
          برای اطلاع از تخفیف‌ها و اخبار با ما همراه باشید
        </h2>

        <form className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              placeholder="آدرس ایمیل خودتان را وارد کنید"
              className="p-2 pl-10 border border-stone-400 rounded-md w-70 text-right text-sm "
            />
            <button
              type="submit"
              className="absolute inset-y-0 left-0 flex items-center px-3 text-white rounded-md rounded-r-none"
              style={{ backgroundColor: "#033884" }}
            >
              <BsSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footertop;
