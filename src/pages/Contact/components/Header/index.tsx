import { motion } from 'framer-motion';

import { FormSchema } from "../Form";
import { HeaderContainer } from "./styles";

import {
  HeadingH3,
  HeadingH4
} from '../../../../styles/global';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <motion.h3
          style={{ width: '100%' }}
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

          <HeadingH3>
            Contact Us
          </HeadingH3>
        </motion.h3>

        <motion.h4
          style={{ width: '100%' }}
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

          <HeadingH4 variant="Purple">
            Interested in collaborating? Please fill the form below.
          </HeadingH4>
        </motion.h4>

        <FormSchema />
      </HeaderContainer>
    </>
  );
}