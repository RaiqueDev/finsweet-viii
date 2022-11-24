import {
  ContentLeftContainer,
  ContentLeftMain
} from "./styles";

import {
  HeadingH2,
  Body
} from '../../../../../../styles/global';

export const ContentLeft = () => {
  return (
    <>
      <ContentLeftContainer>
        <ContentLeftMain>
          <HeadingH2>
            A podcast for makers and entrepreneurs
          </HeadingH2>

          <Body>
            Apparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased to
            twinkle.
          </Body>
        </ContentLeftMain>
      </ContentLeftContainer>
    </>
  );
}