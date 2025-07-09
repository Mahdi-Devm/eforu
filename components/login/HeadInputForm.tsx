import { Mail } from "lucide-react";
import React from "react";

function HeadInputForm() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        ورود به حساب کاربری
      </h1>

      <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
        <Mail className="text-xl" />
        ورود با حساب گوگل
      </button>

      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">یا</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
    </>
  );
}

export default HeadInputForm;
