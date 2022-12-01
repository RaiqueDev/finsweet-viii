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
            <NavLink to="/" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                HOME

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/podcasts" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                PODCASTS

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/host" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                HOST

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/about" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                ABOUT

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/blog" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                BLOG

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/contact" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                CONTACT

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>
        </MenuMain>
      </MenuContainer>
    </>
  );
}