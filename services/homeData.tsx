import { NetworkError } from "../lib/network-error";

export async function fetchRewardPoints() {
  try {
    const res = await fetch(
      "https://api.entekhabgroup.com/club-awards/v1/RewardPoint/GetAllRewards",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new NetworkError("عدم دریافت امتیازات");
    return await res.json();
  } catch {
    throw new NetworkError();
  }
}

export async function fetchSiteBanners() {
  try {
    const res = await fetch(
      "https://api.entekhabgroup.com/club-awards/v1/SiteBanner/GetSiteBanner",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new NetworkError("بنرها دریافت نشدند");
    const data = await res.json();

    return data.data;
  } catch {
    throw new NetworkError();
  }
}
export async function fetchMobileBanners() {
  try {
    const res = await fetch("http://localhost:3000/api/Getbannermobile", {
      cache: "no-store",
    });
    if (!res.ok) throw new NetworkError("بنرها دریافت نشدند");
    const users = await res.json();

    return users;
  } catch {
    throw new NetworkError();
  }
}
