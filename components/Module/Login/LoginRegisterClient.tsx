"use client";

import React, { useState } from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";
import RegisterForm from "../Register/RegisterForm";

const LoginRegisterClient: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => setIsLogin(true);
  const handleRegister = () => setIsLogin(false);

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className=" rounded-xl flex justify-center items-center p-1 ">
          <Image
            src="/images/logo/new-logo.8260ce94.svg"
            alt=" Logo"
            width={180}
            height={20}
            style={{ objectFit: "contain", padding: "5px" }}
            priority
          />
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded ">
          <h2 className="text-white text-xl font-semibold">
            {isLogin ? "ورود" : "ثبت‌نام"}
          </h2>
        </div>
      </div>
      <div className="flex flex-row mb-6 gap-3">
        <button
          onClick={handleLogin}
          className={`flex-1 py-2 px-10  rounded-lg transition text-center ${
            isLogin
              ? "bg-[#022C6A]/20 hover:bg-[#022C6A]/30"
              : "bg-[#022C6A]/10 hover:bg-[#022C6A]/20"
          }`}
        >
          ورود
        </button>
        <button
          onClick={handleRegister}
          className={`flex-1 py-2 px-10  rounded-lg transition text-center ${
            !isLogin
              ? "bg-[#022C6A]/20 hover:bg-[#022C6A]/30"
              : "bg-[#022C6A]/10 hover:bg-[#022C6A]/20"
          }`}
        >
          ثبت‌نام
        </button>
      </div>

      {isLogin ? (
        <h3 className="text-stone-700 text-md font-bold mb-4 transition-colors duration-300 border-b border-stone-400">
          ساخت حساب
        </h3>
      ) : (
        <h3 className="text-stone-700 text-md font-bold mb-4 transition-colors duration-300 border-b border-stone-400">
          وارد شدن به حساب
        </h3>
      )}
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default LoginRegisterClient;
