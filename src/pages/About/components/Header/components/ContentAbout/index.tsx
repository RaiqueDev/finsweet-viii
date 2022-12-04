import { motion } from 'framer-motion';

import {
  Body,
  HeadingH1,
  Button
} from "../../../../../../styles/global";

import {
  ContentAboutContainer,
  Text
} from "./styles";

export const ContentAbout = () => {
  return (
    <>
      <ContentAboutContainer>
        <Text>
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
              delay: 0.2,
            }}>

            <HeadingH1>
              About Finsweet
              Podcast
            </HeadingH1>
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
              delay: 0.3,
            }}>

            <Body>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </Body>
          </motion.p>
        </Text>

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

          <Button variant="Primary_Button">
            Subscribe Now!
          </Button>
        </motion.div>
      </ContentAboutContainer>
    </>
  );
}