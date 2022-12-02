import { CaretRight, X } from "phosphor-react";
import { NavLink } from "react-router-dom";

import { Logo } from "../../../../assets/Logos/Logo";
import { LinkText } from "../../../../styles/global";

import {
  CloseToggleContainer,
  CloseToggleMain,
  MenuContainer,
  CloseToggle,
  MenuMain,
  MenuLink
} from "./styles";

export const Menu = ({ handleOpen }: any) => {
  const disable = {
    textDecoration: 'none',
    borderBottom: '3px solid #fff',
  };

  const activeStyle = {
    textDecoration: 'none',
    borderBottom: '3px solid #503AE7'
  };

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
            <NavLink
              to="/"
              style={{ textDecoration: 'none', color: '#14142B' }}>

              <MenuLink>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeStyle : disable
                  }>

                  <LinkText>
                    Home
                  </LinkText>
                </NavLink>

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink
              to="/podcasts"
              style={{ textDecoration: 'none', color: '#14142B' }}>

              <MenuLink>
                <NavLink
                  to="/podcasts"
                  style={({ isActive }) =>
                    isActive ? activeStyle : disable
                  }>

                  <LinkText>
                    Podcasts
                  </LinkText>
                </NavLink>

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink
              to="/host"
              style={{ textDecoration: 'none', color: '#14142B' }}>

              <MenuLink>
                <NavLink
                  to="/host"
                  style={({ isActive }) =>
                    isActive ? activeStyle : disable
                  }>
                  <LinkText>
                    Host
                  </LinkText>
                </NavLink>

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/about" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                <NavLink
                  to="/about"
                  style={({ isActive }) =>
                    isActive ? activeStyle : disable
                  }>
                  <LinkText>
                    About
                  </LinkText>
                </NavLink>

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/blog" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                <NavLink
                  to="/blog"
                  style={({ isActive }) =>
                    isActive ? activeStyle : disable
                  }>
                  <LinkText>
                    Blog
                  </LinkText>
                </NavLink>

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>

          <CloseToggle onClick={handleOpen}>
            <NavLink to="/contact" style={{ textDecoration: 'none', color: '#14142B' }}>
              <MenuLink>
                <NavLink
                  to="/contact"
                  style={({ isActive }) =>
                    isActive ? activeStyle : disable
                  }>
                  <LinkText>
                    Contact
                  </LinkText>
                </NavLink>

                <CaretRight size={20} color="#14142B" weight="bold" />
              </MenuLink>
            </NavLink>
          </CloseToggle>
        </MenuMain>
      </MenuContainer>
    </>
  );
}