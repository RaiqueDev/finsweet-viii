import styled from "styled-components";

export const TopRowContainer = styled.div`
  width: 100%;
`;

export const TopRowMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  gap: 2rem;

  @media (max-width: 48rem) {
    flex-direction: column; 
    align-items: center;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  
  gap: 1.25rem;

  @media (max-width: 48rem) {
    max-width: 100%; 
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;

`;

export const CategoriesMain = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 4fr);

  gap: 1rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media (max-width: 30rem) {
    grid-template-columns: repeat(2, 2fr);
  }
`;