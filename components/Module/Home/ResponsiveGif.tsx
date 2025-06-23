import React from "react";

const ResponsiveGif: React.FC = () => {
  return (
    <div className="relative w-full h-md md:h-70 rounded-2xl overflow-hidden mx-auto">
      <img
        src="/gif/desktop-gif.a76bb40f.gif"
        alt="animated gif desktop"
        className="hidden md:block mt-4 w-full rounded-lg"
      />

      <img
        src="/gif/mobile-gif.3dbec49d.gif"
        alt="animated gif mobile"
        className="block md:hidden mt-4 mb-5 w-full rounded-lg "
      />
    </div>
  );
};

export default ResponsiveGif;
