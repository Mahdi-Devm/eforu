import { User } from "lucide-react";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface FormData {
  username: string;
  password: string;
}
interface UsernameComponentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const UsernameComponent: React.FC<UsernameComponentProps> = ({
  register,
  errors,
}) => {
  return (
    <div>
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        نام کاربری
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="username"
          type="text"
          {...register("username")}
          className={`pl-10 w-full px-4 py-2 rounded-lg border ${
            errors.username ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          placeholder="نام کاربری خود را وارد کنید"
          maxLength={12}
        />
      </div>
      {errors.username && (
        <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
      )}
    </div>
  );
};

export default UsernameComponent;
