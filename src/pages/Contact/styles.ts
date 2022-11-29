import styled from "styled-components";

import LineContact from '../../assets/LineContact.svg';

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
`;

export const ContactMain = styled.main`
  width: 90%;
  max-width: 80rem;
  
  display: flex;
  gap: 2rem;

  @media (max-width: 64rem) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
 