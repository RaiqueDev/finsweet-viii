import styled from "styled-components";

export const BrandsContainer = styled.div`
  width: 100%;
  padding: 1rem 0 0 0;
`;

export const BrandsMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media (max-width: 64rem) {
    flex-direction: column;
  }
`;

export const BrandsText = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 64rem) {
    width: 100%;
  }
`;