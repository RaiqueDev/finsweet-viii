import { PagesContainer } from './styles';
import { motion } from 'framer-motion';

import {
  HeadingH4,
  HeadingH5
} from '../../../../styles/global';

export const Pages = () => {
  return (
    <>
      <PagesContainer>
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
            Pages
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
            delay: 0.1,
          }}>

          <HeadingH5 variant='White'>
            Home
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
            Podcast
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
            delay: 0.4,
          }}>

          <HeadingH5 variant='White'>
            Host
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
            delay: 0.5,
          }}>

          <HeadingH5 variant='White'>
            Blog
          </HeadingH5>
        </motion.h5>
      </PagesContainer>
    </>
  );
}