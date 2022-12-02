import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  @media (max-width: 64rem) {
    align-items: center; 
  }
`;