import styled from "styled-components";

export const ContentLeftContainer = styled.div`
  width: 100%;
  max-width: 30.375rem;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.875rem;
`;

export const Subscribe = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;

  input[type=email] {
    width: 100%;
    height: 3rem;

    padding: .75rem 1rem;

    border: 0;
    background-color: ${props => props.theme.off_white};
  }
`;