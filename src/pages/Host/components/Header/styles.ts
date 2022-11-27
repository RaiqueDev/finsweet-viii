import styled from "styled-components";

import HeaderLines from '../../../../assets/HeaderLines.svg';
import ImageHeader from '../../../../assets/ImageHeader.jpg';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
  padding: 0 0 8rem 0;
`;

export const HeaderMain = styled.main`
  width: 90%;
  max-width: 66.8125rem;
  height: 28.875rem;

  margin: 0 auto;

  background-image: url(${HeaderLines});
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  @media (max-width: 48rem) {
    height: 100%;
    flex-direction: column-reverse; 
  }
`;

export const HeaderImg = styled.div`
  width: 100%;
  max-width: 21.1875rem;
  height: 28.875rem;

  background-image: url(${ImageHeader});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;