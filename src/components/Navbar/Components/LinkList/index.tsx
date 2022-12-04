import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import {
  LinksListContainer
} from './styles';

import { LinkText } from '../../../../styles/global';

export const LinksList = () => {

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
      <LinksListContainer>
        <nav>
          <NavLink
            to="/podcasts"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>
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
                delay: 0.2,
              }}>
              <LinkText>
                Podcast
              </LinkText>
            </motion.div>
          </NavLink>

          <NavLink
            to="/host"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>
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
                delay: 0.3,
              }}>

              <LinkText>
                Host
              </LinkText>
            </motion.div>
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>

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
                delay: 0.4,
              }}>
              <LinkText>
                About
              </LinkText>
            </motion.div>
          </NavLink>

          <NavLink
            to="/blog"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>
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
                delay: 0.5,
              }}>

              <LinkText>
                Blog
              </LinkText>
            </motion.div>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>

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
                delay: 0.6,
              }}>
              <LinkText>
                Contact
              </LinkText>
            </motion.div>
          </NavLink>
        </nav>
      </LinksListContainer>
    </>
  );
}