import { Header } from "./components/Header";
import { Brands } from "../../components/Brands";
import { WhoIsItFor } from "./components/WhoIsItFor";
import { HowItBegan } from "./components/HowItBegan";
import { RecentEpisodes } from "./components/RecentEpisodes";
import { Testimonials } from "./components/Testimonials";
import { Subscribe } from "./components/Subscribe";
import { ArticlesAndNews } from "./components/ArticlesAndNews";

export const Home = () => {
  return (
    <>
      <Header />
      <Brands />
      <WhoIsItFor />
      <HowItBegan />
      <RecentEpisodes />
      <Testimonials />
      <Subscribe />
      <ArticlesAndNews />
    </>
  );
}