import Link from "next/link";
import React from "react";

interface CheckboxProps {
  remember: boolean;
  setRemember: React.Dispatch<React.SetStateAction<boolean>>;
}

function Checkbox({ setRemember, remember }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="remember"
        className={`form-checkbox h-5 w-5 rounded transition-all duration-300 ${
          remember ? "bg-primary border-primary" : "border-gray-300"
        }`}
        checked={remember}
        onChange={() => setRemember(!remember)}
      />
      <label htmlFor="remember" className="text-sm text-gray-700">
        اطلاعات ذخیره شوند؟
      </label>
      <span>/</span>
      <Link
        className="text-gray-700 text-sm underline hover:text-primary"
        href={"/forgot-password"}
      >
        فراموشی رمز عبور!
      </Link>
    </div>
  );
}

export default Checkbox;
