import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinksListContainer = styled.nav`
  width: 100%;
  max-width: 27.5rem;
  height: 100%;

  display: flex;
  align-items: center;

  nav {
    display: flex;
    gap: 3rem;
  }

  @media (max-width: 64rem) {
    display: none;
  }
`;

export const NLink = styled(NavLink)`
color: springgreen;
`;