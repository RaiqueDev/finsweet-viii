import styled from "styled-components";

export const OurSponsorsContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const OurSponsorsMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 3rem;
`;

export const SponsorLogos = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-items: center;

  gap: 1rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;