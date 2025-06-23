import React from "react";

interface IconCardData {
  image: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface IconCardsProps {
  data: IconCardData[];
}

const IconCards: React.FC<IconCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 justify-items-center">
      {data.map(({ image, icon: Icon }) => (
        <div
          key={image}
          className="w-full h-28 rounded-2xl shadow-md bg-white text-primary flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        >
          <Icon size={28} />
          <span className="text-sm font-semibold text-center">{image}</span>
        </div>
      ))}
    </div>
  );
};

export default IconCards;
