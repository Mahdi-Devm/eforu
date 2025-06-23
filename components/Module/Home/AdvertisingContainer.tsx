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
    <div
      style={{
        backgroundColor: "#033884",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.25rem 0",
        fontWeight: "600",
        fontSize: "0.875rem",
        minHeight: "2rem",
      }}
    >
      <h1
        className={fadeState}
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: fadeState === "fade-in" ? 1 : 0,
          margin: 0,
        }}
      >
        {messages[index]}
      </h1>
    </div>
  );
}

export default AdvertisingContainer;
