import {
  ContentLeftContainer,
  ContentLeftMain,
  Videos
} from "./styles";

import { motion } from 'framer-motion';

import {
  YoutubeLogo
} from "phosphor-react";

export const ContentLeft = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          delay: 0.2,
        }}
        style={{ width: '100%', height: '100%' }}>

        <ContentLeftContainer>
          <ContentLeftMain>
            <Videos>
              <YoutubeLogo size={32} color="#1ad993" weight="fill" />

              <h2>
                350+ Videos
              </h2>
            </Videos>
          </ContentLeftMain>
        </ContentLeftContainer>
      </motion.div>
    </>
  );
}