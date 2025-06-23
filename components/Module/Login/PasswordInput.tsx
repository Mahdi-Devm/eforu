import React from "react";
import { FiLock } from "react-icons/fi";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginFormInputs } from "./LoginForm";

type Props = {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
};

const PasswordInput: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className="relative">
      <FiLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="password"
        placeholder="رمز عبور"
        {...register("password", {
          required: "رمز عبور وارد نشده",
          minLength: {
            value: 6,
            message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
          },
        })}
        className="w-full pr-10 p-2 rounded-lg bg-gray-50 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>
  );
};

export default PasswordInput;
