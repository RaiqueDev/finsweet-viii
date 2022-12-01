import styled from "styled-components";

import Lines from '../../../../../../assets/ImgSvg/Lines.svg';

export const ContentLeftContainer = styled.div`
  width: 100%;
  max-width: 32.0625rem;
  height: 21rem;

  display: flex;
  align-items: center;

  background-image: url(${Lines});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ContentLeftMain = styled.main`
  width: 90%;
  max-width: 25.6875rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 2.25rem;

  @media (max-width: 64rem) {
    text-align: center
  }
`;