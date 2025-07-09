import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 px-4 py-5 rounded-2xl">
      <Image
        src="/404.png"
        alt="404"
        width={300}
        height={300}
        className="mb-6"
      />

      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        صفحه مورد نظر پیدا نشد!
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        آدرس وارد شده اشتباه است یا ممکن است صفحه مورد نظر حذف شده باشد.
      </p>
      <Link
        href="/"
        className="text-white bg-primary hover:bg-primary/90 px-6 py-2 rounded-lg transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
