import { useState } from "react";
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";

import {
  NavbarContainer,
  NavbarMain,
  NavbarRight
} from "./styles";

import { Logo } from "../../assets/Logos/Logo";
import { LogoSocialNav } from "../../assets/Logos/LogoSocialNav";

import { LinksList } from "./Components/LinkList";
import { Menu } from "./Components/Menu";
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
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 3.5,
                delay: 0.1,
              }}>
              <Logo />
            </motion.div>
          </NavLink>

          <NavbarRight>
            <LinksList />

            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 3.5,
                delay: 0.7,
              }}>
              <LogoSocialNav />
            </motion.div>

            {open ? <Menu handleOpen={handleOpen} /> : null}
            <Toggle handleOpen={handleOpen} />
          </NavbarRight>
        </NavbarMain>
      </NavbarContainer>
    </>
  );
}