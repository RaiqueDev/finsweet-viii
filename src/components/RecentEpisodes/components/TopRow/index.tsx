import { motion } from 'framer-motion';
import {
  Content,
  TopRowContainer,
  TopRowMain
} from "./styles";

import {
  Button,
  HeadingH2,
  Body
} from "../../../../styles/global";

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
                Recent Episodes
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
                Apparently we had reached a great height in the
                atmosphere, for the sky was a dead black.
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.3,
            }}>

            <Button variant="Primary_Button">
              See All Episiodes
            </Button>
          </motion.div>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}