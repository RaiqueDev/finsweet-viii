import styled from "styled-components";

export const MenuContainer = styled.div`
  display: none;

  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;

  background-color: ${props => props.theme.white};
  z-index: 99;

  display: flex;
  flex-direction: column;

  transition: all .5s ease;

  @media (max-width: 64rem) {
    display: flex;
  }
`;

export const CloseToggleContainer = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: .1rem solid ${props => props.theme.off_white};
`;

export const CloseToggleMain = styled.main`
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const CloseToggle = styled.button`
  border: 0;
  line-height: 0;

  background-color: transparent;
`;

export const MenuMain = styled.main`
  width: 90%;
  padding: 4rem 0;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const MenuLink = styled.div`
  width: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font: 300 .90rem Inter, sans-serif;

  color: ${props => props.theme.black};
`;