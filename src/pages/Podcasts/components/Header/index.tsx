import {
  HeaderBox,
  HeaderContainer,
  HeaderMain,
  Content
} from "./styles";

import {
  Caption,
  HeadingH2,
  Body,
  Button
} from '../../../../styles/global';

import { PlayCircle } from 'phosphor-react';
import { Link } from "react-router-dom";

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

              <Link to="/singlepodcast" style={{ textDecoration: 'none' }}>
                <Button variant='Listen_White'>
                  <PlayCircle size={32} color="#1ad993" weight="fill" />

                  Listen Now
                </Button>
              </Link>
            </Content>
          </HeaderBox>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}