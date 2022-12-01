import { Header } from "./components/Header";
import { EpisodeDescription } from "./components/EpisodeDescription";
import { Author } from "./components/Author";
import { RecentEpisodes } from "../RecentEpisodes";

export const SinglePodcast = () => {
  return (
    <>
      <Header />
      <EpisodeDescription />
      <Author />
      <RecentEpisodes />
    </>
  );
}