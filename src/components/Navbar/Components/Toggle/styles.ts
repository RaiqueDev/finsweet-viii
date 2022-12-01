import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: none;

  color: ${props => props.theme.black};

  font-size: 2rem;
  cursor: pointer;

  transition: all .5s ease-in-out;

  @media (max-width: 64rem) {
    display: flex;
  }
`;