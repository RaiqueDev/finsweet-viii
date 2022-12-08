import { motion } from 'framer-motion';

import {
  Arrows,
  ButtonArrow,
  Content,
  TopRowContainer,
  TopRowMain
} from "./styles";

import {
  HeadingH2,
  Body
} from "../../../../../../styles/global";

import {
  ArrowLeft,
  ArrowRight
} from "phosphor-react";

export const TopRow = () => {
  return (
    <>
      <TopRowContainer>
        <TopRowMain>
          <Content>
            <motion.h2
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.1,
              }}>

              <HeadingH2>
                What our listeners say
              </HeadingH2>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.2,
              }}>

              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus
                morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada
                enim penatibus non aliquet.
              </Body>
            </motion.p>
          </Content>

          <Arrows>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.3,
              }}>
                
              <ButtonArrow>
                <ArrowLeft size={24} />
              </ButtonArrow>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.4,
              }}>

              <ButtonArrow>
                <ArrowRight size={24} />
              </ButtonArrow>
            </motion.div>
          </Arrows>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}