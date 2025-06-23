import React from "react";
import { FiMail } from "react-icons/fi";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginFormInputs } from "./LoginForm";

type Props = {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>;
};

const EmailInput: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className="relative">
      <FiMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="email"
        placeholder="ایمیل"
        {...register("email", {
          required: "ایمیل وارد نشده",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "فرمت ایمیل صحیح نیست",
          },
        })}
        className="w-full pr-10 p-2 rounded-lg bg-gray-50 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>
  );
};

export default EmailInput;
