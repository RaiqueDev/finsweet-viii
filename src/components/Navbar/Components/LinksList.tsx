import { NavLink } from 'react-router-dom';

import {
  LinksListContainer
} from './styles';

import { HeadingH5 } from '../../../styles/global';

export const LinksList = () => {
  return (
    <>
      <LinksListContainer>
        <nav>
          <NavLink to="/podcasts">
            <HeadingH5>
              Podcast
            </HeadingH5>
          </NavLink>

          <NavLink to="/host">
            <HeadingH5>
              Host
            </HeadingH5>
          </NavLink>

          <NavLink to="/about">
            <HeadingH5>
              About
            </HeadingH5>
          </NavLink>

          <NavLink to="/blog">
            <HeadingH5>
              Blog
            </HeadingH5>
          </NavLink>

        <a href="#">
          <HeadingH5>
            Contact
          </HeadingH5>
        </a>
      </nav>
    </LinksListContainer>
    </>
  );
}