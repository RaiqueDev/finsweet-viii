import { motion } from 'framer-motion';

import {
  HeadingH4,
  HeadingH5
} from "../../../../styles/global";
import { ReachUsContainer } from "./styles";

export const ReachUs = () => {
  return (
    <>
      <ReachUsContainer>
        <motion.h4
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

          <HeadingH4>
            Reach Us
          </HeadingH4>
        </motion.h4>

        <motion.h5
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

          <HeadingH5 variant='White'>
            Contact
          </HeadingH5>
        </motion.h5>

        <motion.h5
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

          <HeadingH5 variant='White'>
            About
          </HeadingH5>
        </motion.h5>
      </ReachUsContainer>
    </>
  );
}