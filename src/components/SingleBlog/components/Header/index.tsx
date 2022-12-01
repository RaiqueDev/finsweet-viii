import {
  Caption,
  HeadingH2
} from '../../../../styles/global';

import {
  HeaderContainer,
  HeaderMain
} from "./styles";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <Caption variant='Purple'>12 Sep 2021</Caption>

          <HeadingH2>
            Apparently we had reached a great height in the 
            atmosphere, for the sky was a dead black, and the 
            stars.
          </HeadingH2>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}