import Container from "../container/Container";
import ItemsGift from "./ItemsGift";
export interface Reward {
  id: number;
  rewardName: string;
  points: number;
  urlImage: string;
  deadlineDate: string;
}

interface Props {
  rewards: { data: Reward[] } | null;
  hasError: boolean;
}

function Gift({ rewards, hasError }: Props) {
  if (hasError || !rewards?.data?.length) {
    return (
      <Container>
        <div className="text-center text-red-600  py-6">
          خطا در بارگذاری جوایز!
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className="bg rounded-2xl p-3">
        <div className="flex justify-between items-center p-2 bg-[#1C589B] rounded-xl">
          <h1 className="text-white text-xl font-bold">جوایز و هدایا</h1>
          <button className="bg-[#D1DDEB] text-sm rounded-xl p-1">
            نمایش همه
          </button>
        </div>
        <ItemsGift rewards={rewards} />
      </section>
    </Container>
  );
}

export default Gift;
