import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import {
  HeaderBox,
  HeaderContainer,
  HeaderMain,
  Content
} from "./styles";

import {
  Caption,
  HeadingH2,
  Body,
  Button
} from '../../../../styles/global';

import { PlayCircle } from 'phosphor-react';

export const Header = () => {
  return (
    <>
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
          delay: 0.2,
        }}>

        <HeaderContainer>
          <HeaderMain>
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
                delay: 0.3,
              }}>

              <HeaderBox>
                <Content>
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
                      delay: 0.4,
                    }}>

                    <Caption>
                      Featured
                    </Caption>
                  </motion.div>

                  <motion.h1
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
                      delay: 0.5
                    }}>

                    <HeadingH2>
                      A UX Case Study on Creating a Studious
                      Environment is
                    </HeadingH2>
                  </motion.h1>

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
                      delay: 0.6,
                    }}>

                    <Body>
                      Apparently we had reached a great height in the atmosphere, for the sky was
                      a dead black, and the stars had ceased to twinkle. By the same illusion which
                      lifts the horizon
                    </Body>
                  </motion.p>

                  <Link to="/singlepodcast" style={{ textDecoration: 'none' }}>
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
                        delay: 0.7,
                      }}>

                      <Button variant='Listen_White'>
                        <PlayCircle size={32} color="#1ad993" weight="fill" />

                        Listen Now
                      </Button>
                    </motion.div>
                  </Link>
                </Content>
              </HeaderBox>
            </motion.div>
          </HeaderMain>
        </HeaderContainer>
      </motion.div>
    </>
  );
}