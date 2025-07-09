"use client";

import React from "react";
import SuccessMessage from "./SuccessMessage";
import FormContent from "./FormContent";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید"),
});

type EmailFormData = z.infer<typeof emailSchema>;
function FormForgotPas() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: EmailFormData) => {
    console.log(data);
    setIsSubmitted(true);
  };
  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        بازیابی رمز عبور
      </h1>

      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <FormContent
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}

export default FormForgotPas;
