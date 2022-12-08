import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  Body,
  HeadingH1,
  Button
} from "../../../../../../styles/global";

import {
  ContentLeftContainer,
  Subscribe,
  Text
} from "./styles";

export const ContentLeft = () => {
  return (
    <>
      <ContentLeftContainer>
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
              delay: 0.3,
            }} >
            <HeadingH1>
              Become The Hero Of
              Your Own Story
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
              delay: 0.4,
            }}>

            <Body>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </Body>
          </motion.p>
        </Text>

        <motion.form
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
            delay: 0.5,
          }}>

          <Link to="/contact">
            <Subscribe>
              <input type="email" placeholder='Enter Your Email Id' />

              <Button variant='Primary_Button'>
                Subscribe
              </Button>
            </Subscribe>
          </Link>
        </motion.form>
      </ContentLeftContainer>
    </>
  );
}