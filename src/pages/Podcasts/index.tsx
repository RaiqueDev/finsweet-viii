import { Header } from "./components/Header";
import { AllPodcasts } from "./components/AllPodcasts";
import { CTA } from "./components/CTA";
import { RecentEpisodes } from "../../components/RecentEpisodes";

export const Podcasts = () => {
  return (
    <>
      <Header />
      <RecentEpisodes />
      <AllPodcasts />
      <CTA />
    </>
  );
}