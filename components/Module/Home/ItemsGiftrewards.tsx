import React from "react";
import { FaCoins } from "react-icons/fa";
import Image from "next/image";
import { truncateWords } from "../../../lib/Helpers";
import { formatDate } from "../../../lib/Format";
type Propsreward = {
  reward: {
    rewardName: string;
    points: number;
    urlImage: string;
    deadlineDate: string;
  };
};
function ItemsGiftrewards({ reward }: Propsreward) {
  return (
    <>
      {reward.points > 10 && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-br-lg shadow-lg -rotate-13">
          ویژه
        </div>
      )}
      <div className="flex items-center space-x-3 mb-3">
        <Image
          src={reward.urlImage || ""}
          alt={reward.rewardName}
          width={60}
          height={70}
          className="rounded-lg object-contain"
        />
        <h2
          className={`text-sm font-semibold text-black text-center ${
            reward.points > 10 ? "text-yellow-500 font-bold" : ""
          }`}
        >
          {truncateWords(reward.rewardName, 4)}
        </h2>
      </div>

      <div className="bg-[#f0f4f8] rounded-lg p-2 text-center flex justify-between mt-auto">
        <span className="flex items-center text-blue-900 font-semibold gap-1 text-sm">
          <FaCoins color="Gold" />
          {reward.points}
        </span>
        <span className="block text-[12px] text-gray-500">
          انقضا: {formatDate(reward.deadlineDate)}
        </span>
      </div>
    </>
  );
}

export default ItemsGiftrewards;
