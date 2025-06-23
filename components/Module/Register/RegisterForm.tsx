import React from "react";
import { useForm } from "react-hook-form";
import NationalCodeInput from "./NationalCodeInput";
import PhoneNumberInput from "./PhoneNumberInput";
import BirthDatePicker from "./BirthDatePicker";
import { DateObject } from "react-multi-date-picker";
import { useRouter } from "next/navigation";

export type FormData = {
  Nationalcode: string;
  number: string;
  date: DateObject | null;
};
const RegisterForm: React.FC = () => {
  const nav = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      date: null,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    nav.push("/PanelUser");
  };

  return (
    <div className="w-full max-w-sm space-y-4 mx-auto">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <NationalCodeInput register={register} errors={errors} />
        <PhoneNumberInput register={register} errors={errors} />
        <BirthDatePicker control={control} errors={errors} />

        <button
          type="submit"
          className="w-full text-white p-3 rounded-lg bg-[#033884] hover:bg-[#022c6a] transition-colors font-semibold"
        >
          ثبت‌نام
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
