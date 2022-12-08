import styled, { css } from "styled-components";

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

interface ItemListImageProps {
  variant?: 'List1' | 'List2' | 'List3'
}

export const ItemListImage = styled.div<ItemListImageProps>`
  width: 100%;
  height: 16rem;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.variant === 'List1' && css`
    background-image: url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'List2' && css`
    background-image: url('https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'List3' && css`
    background-image: url('https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}
`;

export const ItemContent = styled.div`
  width: 100%;
  margin: 2rem 0 0 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
