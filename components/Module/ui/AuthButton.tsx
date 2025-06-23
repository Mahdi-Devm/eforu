"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FiUser } from "react-icons/fi";

interface AuthButtonProps {
  className?: string;
  onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ className = "", onClick }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/Login");
  };

  return (
    <button
      onClick={onClick || handleRedirect}
      className={`flex items-center gap-2 bg-[#033884] hover:bg-[#022c6a] transition-colors text-white  rounded-lg px-5 py-2 shadow-lg select-none ${className}`}
    >
      <FiUser size={20} />
      ورود / ثبت‌نام
    </button>
  );
};

export default AuthButton;
