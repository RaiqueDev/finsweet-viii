import styled, { css } from "styled-components";

export const ArticlesAndNewsContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const ArticlesAndNewsMain = styled.div`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

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

export const Items = styled.div`
  width: 100%;
  max-width: 53rem;
  height: 32.25rem;

  display: flex;
  gap: 1rem;
`;

interface ItemCardProps {
  variant?: 'Off_White'
}

export const ItemCard = styled.div<ItemCardProps>`
  width: 100%;
  max-width: 26rem;
  height: 32.25rem;

  ${props => props.variant === 'Off_White' && css`
    margin: 0 auto;
    background-color: ${props => props.theme.off_white};
  `}
`;

interface ItemCardContentProps {
  variant?: 'Margin'
}

export const ItemCardContent = styled.div<ItemCardContentProps>`
  width: 100%;
  margin-top: 1.25rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: .75rem;

  ${props => props.variant === 'Margin' && css`
    width: 90%;
    margin: 0 auto;
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.625rem;
  `}

  a {
    text-decoration: none;
    color: ${props => props.theme.blue};
  }
`;

export const ItemCardImg = styled.div`
  width: 100%;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
  }
`;