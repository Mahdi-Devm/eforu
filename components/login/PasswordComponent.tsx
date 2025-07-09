import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface FormData {
  username: string;
  password: string;
}
interface PasswordComponentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}
const PasswordComponent: React.FC<PasswordComponentProps> = ({
  register,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        رمز عبور
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-8 pl-3 flex items-center ">
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className={`pl-10 w-full px-4 py-2 rounded-lg border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
          placeholder="رمز عبور خود را وارد کنید"
          maxLength={12}
        />
      </div>
      {errors.password && (
        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
      )}
    </div>
  );
};

export default PasswordComponent;
