import { motion } from 'framer-motion';

import {
  DreamSectionContainer,
  DreamSectionImage,
  DreamSectionMain,
  Wave
} from "./styles";

import {
  Body,
  Content,
  HeadingH2
} from '../../../../styles/global';

export const DreamSection = () => {
  return (
    <>
      <DreamSectionContainer>
        <DreamSectionMain>
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
                A small story about a big dream  —
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
                Apparently we had reached a great height in the atmosphere, for the sky
                was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon
              </Body>
            </motion.p>

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

              <Body variant="SemiBold">
                Apparently we had reached a great height in the atmosphere, for the sky
                was a dead black, and
              </Body>
            </motion.div>
          </Content>

          <motion.div
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              delay: 0.2,
            }}
            style={{ width: '100%', height: '100%' }}>
              
            <DreamSectionImage>
              <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" width="320" height="92" fill="none" viewBox="0 0 320 92">
                  <path fill="#1AD993" d="M7.048 25.464H0v40.25h7.048v-40.25Zm26.372-5.75h-7.928v52.572h7.929V19.714Z" />
                  <path fill="#F4F2FF" d="M58.913 18.893h-7.048v53.393h7.048V18.893Z" />
                  <path fill="#1AD993" d="M85.286 16.429h-7.929V75.57h7.929V16.43ZM111.659 0h-7.929v92h7.929V0Z" />
                  <path fill="#F4F2FF" d="M137.151 16.429h-7.048V75.57h7.048V16.43Z" />
                  <path fill="#1AD993" d="M189.897 25.464h-7.929v40.25h7.929v-40.25Zm-26.373 0h-7.929v40.25h7.929v-40.25Zm51.865-5.75h-7.048v52.572h7.048V19.714Z" />
                  <path fill="#F4F2FF" d="M241.762 16.429h-7.929V75.57h7.929V16.43Z" />
                  <path fill="#1AD993" d="M268.135 25.464h-7.929v40.25h7.929v-40.25Zm25.492-5.75h-7.048v52.572h7.048V19.714ZM320 33.679h-7.928v24.643H320V33.679Z" />
                </svg>
              </Wave>
            </DreamSectionImage>
          </motion.div>
        </DreamSectionMain>
      </DreamSectionContainer>
    </>
  );
}