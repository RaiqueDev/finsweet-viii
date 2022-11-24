import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 8rem 0;

  background-color: ${props => props.theme.black};
`;

export const FooterMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 4fr);

  gap: 3rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 30rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;