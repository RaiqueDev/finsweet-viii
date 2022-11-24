import styled from "styled-components";

export const LogosSponsorsContainer = styled.div`
  width: 100%;
`;

export const LogosSponsorsMain = styled.main`
  width: 90%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, 5fr);
  justify-items: center;

  gap: 3rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(4, 4fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media (max-width: 30rem) {
    grid-template-columns: repeat(2, 2fr);
  }
`;