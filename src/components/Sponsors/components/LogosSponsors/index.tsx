import { motion } from 'framer-motion';

import {
  LogoSponsors_01,
  LogoSponsors_02,
  LogoSponsors_03,
  LogoSponsors_04,
  LogoSponsors_05
} from '../../../../assets/Logos/LogoSponsors';

import {
  LogosSponsorsMain,
  LogosSponsorsContainer
} from "./styles";

export const LogosSponsors = () => {
  return (
    <>
      <LogosSponsorsContainer>
        <LogosSponsorsMain>
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
              delay: 0.1,
            }}>
            <LogoSponsors_01 />
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.2,
            }}>
            <LogoSponsors_02 />
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.3,
            }}>
            <LogoSponsors_03 />
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.4,
            }}>
            <LogoSponsors_04 />
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.5,
            }}>
            <LogoSponsors_05 />
          </motion.div>
        </LogosSponsorsMain>
      </LogosSponsorsContainer>
    </>
  );
}