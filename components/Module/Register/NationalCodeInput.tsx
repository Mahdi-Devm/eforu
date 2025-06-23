import { FiUser } from "react-icons/fi";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./RegisterForm";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function NationalCodeInput({ register, errors }: Props) {
  return (
    <div className="relative">
      <FiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
      <input
        {...register("Nationalcode", {
          required: "کد ملی وارد نشده",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "کد ملی باید ۱۰ رقم باشد",
          },
        })}
        type="text"
        placeholder="کد ملی"
        className="w-full pr-10 p-2 rounded-lg bg-gray-50 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.Nationalcode && (
        <p className="text-red-500 text-sm mt-1">
          {errors.Nationalcode.message}
        </p>
      )}
    </div>
  );
}
