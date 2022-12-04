import { motion } from 'framer-motion';

import {
  HeaderContainer,
  HeaderImg,
  HeaderMain
} from "./styles";

import {
  Content,
  Caption,
  HeadingH2,
  Body,
  Button
} from '../../../../styles/global';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <HeaderImg />

          <Content>
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
                delay: 0.2,
              }}>

              <Caption variant="Purple">
                About The Host
              </Caption>
            </motion.p>

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
                Hey there, I’m Andrew Jonson and welcome to my Podcast
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
                Apparently we had reached a great height in the atmosphere, for the sky
                was a dead black, and the stars had ceased to twinkle.
              </Body>
            </motion.p>

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

              <Button variant="Primary_Button">
                Know More
              </Button>
            </motion.div>
          </Content>
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}