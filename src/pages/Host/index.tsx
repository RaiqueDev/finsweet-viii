import { Header } from "./components/Header";
import { Brands } from "../../components/Brands";
import { DreamSection } from "./components/DreamSection";
import { Journey } from "./components/Journey";
import { Achievements } from "./components/Achievements";
import { CTA } from "../Podcasts/components/CTA";
import { RecentEpisodes } from "../Home/components/RecentEpisodes";

export const Host = () => {
  return (
    <>
      <Header />
      <Brands />
      <DreamSection />
      <Journey />
      <Achievements />
      <CTA />
      <RecentEpisodes />
    </>
  );
}