import styled from "styled-components";

import LineContact from '../../assets/ImgSvg/LineContact.svg';

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${LineContact});
  background-size: 20%;
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64rem  ) {
    height: 150vh;
  }
`;

export const ContactMain = styled.main`
  width: 90%;
  max-width: 80rem;
  
  display: flex;
  gap: 2rem;

  padding: 4rem 0;

  @media (max-width: 64rem) {
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 5rem;
  }
`;
 