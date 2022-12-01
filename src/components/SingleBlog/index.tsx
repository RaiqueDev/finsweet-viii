import { ArticlesAndNews } from '../../pages/Home/components/ArticlesAndNews';
import { ListEpisodeDescription } from '../SinglePodcast/components/EpisodeDescription/styles';
import { Header } from "./components/Header";
import { SingleBlogAuthor } from './components/SingleBlogAuthor';

import {
  HeadingH2,
  Body,
  HeadingH3
} from '../../styles/global';

import {
  SingleBlogContent,
  SingleBlogImg
} from "./styles";

export const SingleBlog = () => {
  return (
    <>
      <Header />
      <SingleBlogImg />

      <SingleBlogContent>
        <HeadingH2>
          Apparently we had reached a great height in the atmosphere, for the sky was
        </HeadingH2>

        <Body>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
        </Body>

        <HeadingH3>
          Apparently we had reached a great height in the atmosphere
        </HeadingH3>

        <Body>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose uppe
        </Body>

        <HeadingH3>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black
        </HeadingH3>

        <ListEpisodeDescription>
          <ul>
            <li>we both celebrate and challenge</li>
            <li>the culture around us as we orient our lives around Jesus</li>
            <li>we want to help you take that next step</li>
          </ul>
        </ListEpisodeDescription>

        <Body>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle
        </Body>
      </SingleBlogContent>

      <SingleBlogAuthor />
      <ArticlesAndNews />
    </>
  );
}