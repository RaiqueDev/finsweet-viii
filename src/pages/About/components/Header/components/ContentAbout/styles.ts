import styled from "styled-components";

export const ContentAboutContainer = styled.div`
  width: 100%;
  max-width: 30.375rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: 64rem) {
    align-items: center;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.875rem;
`;