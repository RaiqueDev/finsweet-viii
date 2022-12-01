import {
  Author,
  HeaderContainer,
  HeaderMain,
  PodcastImage
} from "./styles";

import {
  Caption,
  Content,
  HeadingH2,
  Body,
  Button
} from '../../../../styles/global';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <PodcastImage />

          <Content>
            <Caption variant="Purple">Business</Caption>

            <HeadingH2>
              Ep 2: Getting the first 100 customers for
              your business
            </HeadingH2>

            <Body>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
              and the stars had ceased to twinkle. By the same illusion which lifts the horizon
            </Body>

            <Button variant="Primary_Button">
              Listen now

              <span>
                53:32
              </span>
            </Button>
          </Content>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}