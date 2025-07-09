import { Mail } from "lucide-react";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormData {
  email: string;
}
interface EmailComponentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const EmailComponent: React.FC<EmailComponentProps> = ({
  register,
  errors,
}) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        ایمیل
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={`pl-10 w-full px-4 py-2 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          placeholder="ایمیل خود را وارد کنید"
        />
      </div>
      {errors.email && (
        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
      )}
    </div>
  );
};

export default EmailComponent;
