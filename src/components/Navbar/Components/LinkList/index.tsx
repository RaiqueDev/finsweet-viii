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
    borderBottom: '3px solid #503AE7',
    borderRadius: "4px"
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

            <LinkText>
              Podcast
            </LinkText>
          </NavLink>

          <NavLink
            to="/host"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>

            <LinkText>
              Host
            </LinkText>
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>

            <LinkText>
              About
            </LinkText>
          </NavLink>

          <NavLink
            to="/blog"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>

            <LinkText>
              Blog
            </LinkText>
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive ? activeStyle : disable
            }>

            <LinkText>
              Contact
            </LinkText>
          </NavLink>
        </nav>
      </LinksListContainer>
    </>
  );
}