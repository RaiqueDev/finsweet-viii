import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { AboutOurTeam } from "./components/AboutOurTeam";
import { MeetOurTeam } from "./components/MeetOurTeam";
import { OurSponsors } from "./components/OurSponsors";
import { RecentEpisodes } from "../Home/components/RecentEpisodes";

export const About = () => {
  return (
    <>
      <Header />
      <Items />
      <AboutOurTeam />
      <MeetOurTeam />
      <OurSponsors />
      <RecentEpisodes />
    </>
  );
}