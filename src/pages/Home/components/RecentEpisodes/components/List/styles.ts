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
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.div`
  width: 100%;
  max-width: 26rem;
`;

export const ItemImage = styled.div`
  img {
    width: 100%;
    height: 16rem;
    background-size: auto;
    background-repeat: no-repeat;
  }
`;

export const ItemContent = styled.div`
  width: 100%;
  margin: 2rem 0 0 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
