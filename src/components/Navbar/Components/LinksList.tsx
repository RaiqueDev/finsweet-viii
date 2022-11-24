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
          <a href="#">
            <HeadingH5>
              Podcast
            </HeadingH5>
          </a>

          <a href="#">
            <HeadingH5>
              Host
            </HeadingH5>
          </a>

          <a href="#">
            <HeadingH5>
              About
            </HeadingH5>
          </a>

          <a href="#">
            <HeadingH5>
              Blog
            </HeadingH5>
          </a>

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