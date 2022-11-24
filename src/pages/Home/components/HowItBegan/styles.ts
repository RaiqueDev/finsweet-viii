import styled from "styled-components";

export const HowItBeganContainer = styled.div`
  width: 100%;
  padding: 8rem 0 0 0;

  display: flex;
  justify-content: flex-start; 

  @media (max-width: 64rem) {
    justify-content: center; 
  }
`;

export const HowItBeganMain = styled.main`
  width: 90%;
  max-width: 81.4375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 3rem;

  @media (max-width: 64rem) {
    flex-direction: column-reverse;
  }
`;