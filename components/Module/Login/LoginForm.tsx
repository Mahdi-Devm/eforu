"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const router = useRouter();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    router.push("/PanelUser");
  };

  return (
    <div className="w-full max-w-sm space-y-4 mx-auto">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />

        <div className="flex justify-center items-center">
          <Link
            href="/Login"
            className="underline text-blue-600 hover:text-primary-dark"
          >
            فراموشی رمز عبور
          </Link>
        </div>

        <button
          type="submit"
          className="w-full text-white p-3 rounded-lg bg-primary hover:bg-primary transition-colors font-semibold"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
