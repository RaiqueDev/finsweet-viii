import styled from "styled-components";

export const ContentRightContainer = styled.div`
  width: 100%;
  max-width: 32.0625rem;
  height: 21rem;

  display: flex;
  align-items: center;
`;

export const ContentRightMain = styled.div`
  width: 90%;
  max-width: 25.6875rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 2.25rem;

  span {
    color: ${props => props.theme.blue};
  }

  @media (max-width: 64rem) {
    text-align: center
  }
`;