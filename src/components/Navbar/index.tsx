import { NavLink } from "react-router-dom";
import { List } from "phosphor-react";

import {
  Menu,
  NavbarContainer,
  NavbarMain,
  NavbarRight
} from "./styles";

import { LinksList } from "./Components/LinksList";

import { Logo } from "../../assets/Logos/Logo";
import { LogoSocialNav } from "../../assets/Logos/LogoSocialNav";

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarMain>
          <NavLink to="/">
            <Logo />
          </NavLink>

          <NavbarRight>
            <LinksList />
            <LogoSocialNav />

            <Menu>
              <List size={24} weight="duotone" />
            </Menu>
          </NavbarRight>
        </NavbarMain>
      </NavbarContainer>
    </>
  );
}