import { motion } from 'framer-motion';

import {
  CategoriesContainer,
  CategoriesMain,
  Content,
  TopRowContainer,
  TopRowMain
} from "./styles";

import {
  CategoriesButtons,
  HeadingH2,
} from "../../../../../../styles/global";

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
                All Podcasts
              </HeadingH2>
            </motion.h2>

            <CategoriesContainer>
              <CategoriesMain>
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
                    delay: 0.2,
                  }}>

                  <CategoriesButtons variant="Active">
                    All Podcasts
                  </CategoriesButtons>
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
                    stiffness: 400,
                    damping: 40,
                    mass: 3.5,
                    delay: 0.3,
                  }}>

                  <CategoriesButtons variant="Disable">
                    Startup
                  </CategoriesButtons>
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
                    stiffness: 400,
                    damping: 40,
                    mass: 3.5,
                    delay: 0.4,
                  }}>

                  <CategoriesButtons variant="Disable">
                    Marketing
                  </CategoriesButtons>
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
                    stiffness: 400,
                    damping: 40,
                    mass: 3.5,
                    delay: 0.5,
                  }}>

                  <CategoriesButtons variant="Disable">
                    Business
                  </CategoriesButtons>
                </motion.div>
              </CategoriesMain>
            </CategoriesContainer>
          </Content>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}