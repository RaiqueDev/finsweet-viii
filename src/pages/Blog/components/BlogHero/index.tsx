import { Link } from 'react-router-dom';
import { Caption, HeadingH2, Body, Button } from '../../../../styles/global';
import {
  BlogHeroContainer,
  BlogHeroMain,
  BlogHeroContent,
  BlogHeroImg
} from './styles';

export const BlogHero = () => {
  return (
    <>
      <BlogHeroContainer>
        <BlogHeroMain>
          <BlogHeroContent>
            <Caption variant='Purple'>
              Featured
            </Caption>

            <HeadingH2>
              Should I raise money for my startup, or not?
            </HeadingH2>

            <Body>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Body>

            <Link to="/singleblog">
              <Button variant='Listen'>
                Read Now
              </Button>
            </Link>
          </BlogHeroContent>

          <BlogHeroImg />
        </BlogHeroMain>
      </BlogHeroContainer>
    </>
  );
}