import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";
import Link from "next/link";
import EmailComponent from "./EmailComponent";

type EmailFormData = {
  email: string;
};

type Props = {
  register: UseFormRegister<EmailFormData>;
  errors: FieldErrors<EmailFormData>;
  handleSubmit: UseFormHandleSubmit<EmailFormData>;
  onSubmit: SubmitHandler<EmailFormData>;
};

export default function FormContent({
  register,
  errors,
  handleSubmit,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <EmailComponent register={register} errors={errors} />

      <button
        type="submit"
        className="w-full py-2 px-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
      >
        ارسال لینک بازیابی
      </button>
      <div className="text-center text-sm text-gray-600">
        <Link href="/" className="hover:text-purple-700 hover:underline">
          بازگشت به صفحه ورود
        </Link>
      </div>
    </form>
  );
}
