import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  margin: 4rem 0 0 0;
`;

export const ListMain = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-items: center;
  gap: 1rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 2fr);
    gap: 2rem;
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
`;
