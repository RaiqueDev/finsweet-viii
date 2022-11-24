import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 8rem 0;
`;

export const HeaderMain = styled.main`
  width: 90%;
  max-width: 64rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media (max-width: 48rem) {
    display: flex;
    align-items: center;
    text-align: center;

    flex-direction: column;
  }
`;

