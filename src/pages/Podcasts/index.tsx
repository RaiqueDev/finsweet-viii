import { Header } from "./components/Header";
import { RecentEpisodes } from "./components/RecentEpisodes";
import { AllPodcasts } from "./components/AllPodcasts";
import { CTA } from "./components/CTA";

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