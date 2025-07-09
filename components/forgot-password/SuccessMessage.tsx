import Link from "next/link";

export default function SuccessMessage() {
  return (
    <div className="text-center">
      <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-6">
        لینک بازیابی رمز عبور به ایمیل شما ارسال شد.
      </div>
      <Link
        href="/"
        className="text-purple-600 hover:text-purple-800 hover:underline"
      >
        بازگشت به صفحه ورود
      </Link>
    </div>
  );
}
