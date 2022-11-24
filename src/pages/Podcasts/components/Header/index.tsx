import { Button } from '../../../../styles/global';
import {
  HeaderBox,
  HeaderContainer,
  HeaderMain,
  Content
} from "./styles";

import {
  Caption,
  HeadingH2,
  Body
} from '../../../../styles/global';
import { PlayCircle } from 'phosphor-react';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <HeaderBox>
            <Content>
              <Caption>
                Featured
              </Caption>

              <HeadingH2>
                A UX Case Study on Creating a Studious
                Environment is
              </HeadingH2>

              <Body>
                Apparently we had reached a great height in the atmosphere, for the sky was
                a dead black, and the stars had ceased to twinkle. By the same illusion which
                lifts the horizon
              </Body>

              <Button variant='Listen_White'>
                <PlayCircle size={32} color="#1ad993" weight="fill" />

                Listen Now
              </Button>
            </Content>
          </HeaderBox>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}