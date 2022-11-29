import styled from "styled-components";

export const BrandsContainer = styled.div`
  width: 100%;
`;

export const BrandsMain = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 4fr);

  gap: 3rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 2fr);
  }
`;