import { PagesContainer } from './styles';

import {
  HeadingH4,
  HeadingH5
} from '../../../../styles/global';

export const Pages = () => {
  return (
    <>
      <PagesContainer>
        <HeadingH4>
          Pages
        </HeadingH4>

        <HeadingH5 variant='White'>
          Home
        </HeadingH5>

        <HeadingH5 variant='White'>
          Podcast
        </HeadingH5>

        <HeadingH5 variant='White'>
          Host
        </HeadingH5>

        <HeadingH5 variant='White'>
          Blog
        </HeadingH5>
      </PagesContainer>
    </>
  );
}