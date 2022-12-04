import { motion } from 'framer-motion';

import {
  ContentLeftContainer,
  ContentLeftMain
} from "./styles";

import {
  HeadingH2,
  Body
} from '../../../../../../styles/global';

export const ContentLeft = () => {
  return (
    <>
      <ContentLeftContainer>
        <ContentLeftMain>
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
              A podcast for makers and entrepreneurs
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
              Apparently we had reached a great height in the atmosphere,
              for the sky was a dead black, and the stars had ceased to
              twinkle.
            </Body>
          </motion.p>
        </ContentLeftMain>
      </ContentLeftContainer>
    </>
  );
}