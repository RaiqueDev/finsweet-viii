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
  max-width: 32rem;

  display: flex;
  flex-direction: column;
  
  gap: 1.25rem;
`;

export const Arrows = styled.div`
  width: 100%;
  max-width: 8rem;

  display: flex;

  gap: 1rem;
`;

export const ButtonArrow = styled.button`
  width: 3rem;
  height: 3rem;

  border-radius: 999px;
  border: none;
  line-height: 0;
  cursor: pointer;

  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
`;