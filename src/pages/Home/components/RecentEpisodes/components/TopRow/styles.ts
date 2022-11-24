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
  max-width: 23.25rem;

  display: flex;
  flex-direction: column;
  
  gap: 1.25rem;
`;