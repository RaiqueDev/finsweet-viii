import { Content, Caption, HeadingH2, Body, Button } from '../../../../styles/global';

import {
  HeaderContainer,
  HeaderImg,
  HeaderMain
} from "./styles";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <HeaderImg />

          <Content>
            <Caption variant="Purple">
              About The Host
            </Caption>

            <HeadingH2>
              Hey there, I’m Andrew Jonson and welcome to my Podcast
            </HeadingH2>

            <Body>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </Body>

            <Button variant="Primary_Button">
              Know More
            </Button>
          </Content>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}