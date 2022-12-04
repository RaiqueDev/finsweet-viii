import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  Caption,
  HeadingH2,
  Body,
  Button
} from '../../../../styles/global';

import {
  BlogHeroContainer,
  BlogHeroMain,
  BlogHeroContent,
  BlogHeroImg
} from './styles';

export const BlogHero = () => {
  return (
    <>
      <BlogHeroContainer>
        <BlogHeroMain>
          <BlogHeroContent>
            <motion.h5
              initial={{
                opacity: 0,
                y: 40,
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

              <Caption variant='Purple'>
                Featured
              </Caption>
            </motion.h5>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
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
              <HeadingH2>
                Should I raise money for my startup, or not?
              </HeadingH2>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
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

              <Body>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </Body>
            </motion.p>

            <Link to="/singleblog" style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
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

                <Button variant='Listen'>
                  Read Now
                </Button>
              </motion.div>
            </Link>
          </BlogHeroContent>

          <BlogHeroImg />
        </BlogHeroMain>
      </BlogHeroContainer>
    </>
  );
}