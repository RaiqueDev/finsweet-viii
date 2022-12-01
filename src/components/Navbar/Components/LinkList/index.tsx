import { NavLink } from 'react-router-dom';

import {
  LinksListContainer
} from './styles';

import { HeadingH4, HeadingH5 } from '../../../../styles/global';

export const LinksList = () => {
  return (
    <>
      <LinksListContainer>
        <nav>
          <NavLink to="/podcasts" style={{ textDecoration: 'none' }}>
            <HeadingH5>
              Podcast
            </HeadingH5>
          </NavLink>

          <NavLink to="/host" style={{ textDecoration: 'none' }}>
            <HeadingH5>
              Host
            </HeadingH5>
          </NavLink>

          <NavLink to="/about" style={{ textDecoration: 'none' }}>
            <HeadingH5>
              About
            </HeadingH5>
          </NavLink>

          <NavLink to="/blog" style={{ textDecoration: 'none' }}>
            <HeadingH5>
              Blog
            </HeadingH5>
          </NavLink>

          <NavLink to="/contact" style={{ textDecoration: 'none' }}>
            <HeadingH5>
              Contact
            </HeadingH5>
          </NavLink>
        </nav>
      </LinksListContainer>
    </>
  );
}