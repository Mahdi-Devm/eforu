import { FiPhoneCall } from "react-icons/fi";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./RegisterForm";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function PhoneNumberInput({ register, errors }: Props) {
  return (
    <div className="relative">
      <FiPhoneCall className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
      <input
        {...register("number", {
          required: "شماره تماس وارد نشده",
          pattern: {
            value: /^[0-9]{10,15}$/,
            message: "شماره تماس معتبر نیست",
          },
        })}
        type="text"
        placeholder="شماره تماس"
        className="w-full pr-10 p-2 rounded-lg bg-gray-50 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.number && (
        <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
      )}
    </div>
  );
}
