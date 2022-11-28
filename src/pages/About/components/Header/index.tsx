import {
  HeaderContainer,
  HeaderMain,
} from "./styles";

import { ContentAbout } from "./components/ContentAbout";
import { AboutFinsweet } from "./components/AboutFinsweet";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <ContentAbout />
          <AboutFinsweet />
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}