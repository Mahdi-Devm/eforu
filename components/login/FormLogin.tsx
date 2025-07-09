"use client";
import React, { useState } from "react";
import Checkbox from "../ui/Checkbox";
import SubmitBtn from "./SubmitBtn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import UsernameComponent from "../../components/login/UsernameComponent";
import PasswordComponent from "../../components/login/PasswordComponent";
import { formSchema } from "../../types/types";
type FormData = z.infer<typeof formSchema>;

function FormLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [remember, setRemember] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    console.log(data);
    setTimeout(() => setIsSubmitting(false), 1500);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <UsernameComponent register={register} errors={errors} />
      <PasswordComponent register={register} errors={errors} />
      <Checkbox remember={remember} setRemember={setRemember} />

      <SubmitBtn isSubmitting={isSubmitting} />

      <div className="text-center text-sm  text-gray-600">
        اگر در سایت عضویت ندارید؟{" "}
        <a
          href="/signup"
          className="inline-block mt-2 w-full text-white bg-primary hover:bg-white hover:text-primary hover:border hover:border-primary py-2 rounded-lg font-medium transition"
        >
          عضویت در سایت
        </a>
      </div>
    </form>
  );
}

export default FormLogin;
