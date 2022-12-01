import { NavLink } from "react-router-dom";

import {
  NavbarContainer,
  NavbarMain,
  NavbarRight
} from "./styles";


import { Logo } from "../../assets/Logos/Logo";
import { LogoSocialNav } from "../../assets/Logos/LogoSocialNav";
import { Menu } from "./Components/Menu";
import { useState } from "react";
import { LinksList } from "./Components/LinkList";
import { Toggle } from "./Components/Toggle";

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

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

            {open ? <Menu handleOpen={handleOpen} /> : null}  
            <Toggle handleOpen={handleOpen} />
          </NavbarRight>
        </NavbarMain>
      </NavbarContainer>
    </>
  );
}