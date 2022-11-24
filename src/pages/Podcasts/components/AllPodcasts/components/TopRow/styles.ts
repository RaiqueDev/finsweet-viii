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
  max-width: 38.375rem;

  display: flex;
  flex-direction: column;
  
  gap: 1.25rem;
`;

export const CategoriesContainer = styled.div`
  width: 100%;

`;

export const CategoriesMain = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 4fr);

  gap: 1rem;
`;