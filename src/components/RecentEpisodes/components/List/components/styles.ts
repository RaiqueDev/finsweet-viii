import styled from "styled-components";

export const ListItemContainer = styled.div`
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
