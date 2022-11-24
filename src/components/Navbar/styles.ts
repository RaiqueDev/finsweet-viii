import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
`;

export const NavbarMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
`;

export const NavbarRight = styled.div`
  width: 100%;
  max-width: 36.125rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media (max-width: 64rem) {
    max-width: 10rem;
  }
`;

export const Menu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 64rem) {
    display: flex;
  }
`;