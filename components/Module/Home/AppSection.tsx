import React from "react";
import Image from "next/image";

const AppSection: React.FC = () => {
  return (
    <div className="applicationContainer flex flex-col md:flex-row items-center justify-around gap-6 my-10 p-4 bg-white rounded-xl shadow-md">
      <div>
        <Image
          src="/images/cardmain/2.svg"
          alt="لوگوی اپلیکیشن"
          width={70}
          height={100}
        />
      </div>
      <div className="text-center md:text-right max-w-md">
        <h5 className="text-primary font-semibold text-lg mb-2">
          تنها یک کلیک با دنیایی از تخفیف‌ها فاصله داری
        </h5>
        <h6 className="text-primary text-sm leading-relaxed">
          با نصب اپلیکیشن باشگاه مشتریان انتخاب هرجایی که باشید می‌توانید از
          تخفیف‌های شگفت انگیز استفاده کنید.
        </h6>
      </div>
      <div className="flex gap-4">
        <div className="relative w-30 h-10 cursor-pointer">
          <Image
            src="/images/cardmain/1.svg"
            alt="دانلود از بازار"
            width={120}
            height={100}
          />
        </div>
        <div className="relative w-30 h-10 cursor-pointer">
          <Image
            src="/images/cardmain/3.svg"
            alt="دانلود از سیبچه"
            width={120}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AppSection;
