import { CaretRight, X } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../../../../assets/Logos/Logo";
import { Body } from "../../../../styles/global";

import {
  CloseToggleContainer,
  CloseToggleMain,
  MenuContainer,
  CloseToggle,
  MenuMain,
  MenuLink
} from "./styles";

export const Menu = ({ handleOpen }: any) => {
  return (
    <>
      <MenuContainer>
        <CloseToggleContainer>
          <CloseToggleMain>
            <Logo />

            <CloseToggle onClick={handleOpen}>
              <X size={24} />
            </CloseToggle>
          </CloseToggleMain>
        </CloseToggleContainer>

        <MenuMain>
          <CloseToggle onClick={handleOpen}>
            <MenuLink>
              <NavLink to="/" style={{ textDecoration: 'none', color: '#14142B' }}>
                HOME
              </NavLink>

              <CaretRight size={20} color="#14142B" weight="bold" />
            </MenuLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <MenuLink>
              <NavLink to="/podcasts" style={{ textDecoration: 'none', color: '#14142B' }}>
                PODCASTS
              </NavLink>

              <CaretRight size={20} color="#14142B" weight="bold" />
            </MenuLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <MenuLink>
              <NavLink to="/host" style={{ textDecoration: 'none', color: '#14142B' }}>
                HOST
              </NavLink>

              <CaretRight size={20} color="#14142B" weight="bold" />
            </MenuLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <MenuLink>
              <NavLink to="/about" style={{ textDecoration: 'none', color: '#14142B' }}>
                ABOUT
              </NavLink>

              <CaretRight size={20} color="#14142B" weight="bold" />
            </MenuLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <MenuLink>
              <NavLink to="/blog" style={{ textDecoration: 'none', color: '#14142B' }}>
                BLOG
              </NavLink>

              <CaretRight size={20} color="#14142B" weight="bold" />
            </MenuLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <MenuLink>
              <NavLink to="/contact" style={{ textDecoration: 'none', color: '#14142B' }}>
                CONTACT
              </NavLink>

              <CaretRight size={20} color="#14142B" weight="bold" />
            </MenuLink>
          </CloseToggle>
        </MenuMain>
      </MenuContainer>
    </>
  );
}