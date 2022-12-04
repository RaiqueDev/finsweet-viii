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
                stiffness: 400,
                damping: 40,
                mass: 3.5,
                delay: 0.2,
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
                stiffness: 400,
                damping: 40,
                mass: 3.5,
                delay: 0.3,
              }}>

              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus
                morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada
                enim penatibus non aliquet.
              </Body>
            </motion.p>
          </Content>

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
              stiffness: 400,
              damping: 40,
              mass: 3.5,
              delay: 0.4,
            }}>

            <Arrows>
              <ButtonArrow>
                <ArrowLeft size={24} />
              </ButtonArrow>

              <ButtonArrow>
                <ArrowRight size={24} />
              </ButtonArrow>
            </Arrows>
          </motion.div>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}