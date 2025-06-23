import React from "react";
import Container from "../../components/Module/container/Container";
import Gift from "../../components/Module/Home/Gift";
import Sliderheaderbaner from "../../components/Module/Home/Sliderheaderbaner";
import ConHomePage from "../../components/Module/Home/ConHomePage";
import {
  fetchMobileBanners,
  fetchRewardPoints,
  fetchSiteBanners,
} from "../../services/homeData";
import { homeMetadata } from "../../lib/Metadata";
import { headers } from "next/headers";
import { isMobile } from "../../lib/IsMobile";
export const metadata = homeMetadata;
async function Home() {
  const ua = (await headers()).get("user-agent");
  const mobile = isMobile(ua || "");

  let dataRewardPoint = null;
  let dataRewardPoints = null;
  let errorReward = false;
  let errorBanner = false;

  try {
    dataRewardPoint = await fetchRewardPoints();
  } catch {
    errorReward = true;
  }

  try {
    dataRewardPoints = mobile
      ? await fetchMobileBanners()
      : await fetchSiteBanners();
  } catch {
    errorBanner = true;
  }

  return (
    <Container>
      <Sliderheaderbaner
        dataRewardPoints={dataRewardPoints}
        hasError={errorBanner}
      />
      <Gift rewards={dataRewardPoint} hasError={errorReward} />
      <ConHomePage />
    </Container>
  );
}

export default Home;
