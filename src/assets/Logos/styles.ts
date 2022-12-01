import styled from "styled-components";

export const LogoContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoSocialNavContainer = styled.div`
  display: flex;

  @media (max-width: 30rem) {
    display: none;
  }
`;