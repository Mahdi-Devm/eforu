import { useState, useEffect } from "react";

const messages = [
  "🎉 تخفیف ویژه فقط امروز! تا ۳۰٪ تخفیف روی همه محصولات",
  "🚚 ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان",
  "🛍️ خرید بالای ۱ میلیون، هدیه ویژه دریافت کنید",
];

function AdvertisingContainer() {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeState("fade-out");
    }, 3500);

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (fadeState === "fade-out") {
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFadeState("fade-in");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [fadeState]);

  return (
    <div className="bg-primary text-white flex justify-center items-center gap-2 py-1 font-semibold text-sm min-h-[2rem]">
      <h1
        className={`transition-opacity duration-500 ease-in-out m-0 ${
          fadeState === "fade-in" ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[index]}
      </h1>
    </div>
  );
}

export default AdvertisingContainer;
