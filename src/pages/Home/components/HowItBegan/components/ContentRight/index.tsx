import { motion } from 'framer-motion';

import {
  Body,
  HeadingH2
} from "../../../../../../styles/global";

import {
  ContentRightContainer,
  ContentRightMain
} from "./styles";

export const ContentRight = () => {
  return (
    <>
      <ContentRightContainer>
        <ContentRightMain>
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
              My origins on <span>YouTube</span> in 2008
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
              volutpat ut netus malesuada enim penatibus non aliquet.
            </Body>
          </motion.p>
        </ContentRightMain>
      </ContentRightContainer>
    </>
  );
}         