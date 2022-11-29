import {
  FooterContainer,
  FooterMain
} from "./styles";

import { Pages } from "./components/Pages";
import { ReachUs } from "./components/ReachUs";
import { Subscribe } from "./components/Subscribe";

import { LogoFooter } from "../../assets/Logos/LogoFooter";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterMain>
          <LogoFooter />
          <Pages />
          <ReachUs />
          <Subscribe />
        </FooterMain>
      </FooterContainer>
    </>
  );
}