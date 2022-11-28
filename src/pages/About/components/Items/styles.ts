import styled from "styled-components";

export const ItemsContainer = styled.div`
  width: 100%;
`;

export const ItemsMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-items: center;

  gap: 2rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;