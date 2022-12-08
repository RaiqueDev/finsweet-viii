import {
  LogoContainer,
  SubscribeContainer
} from "./styles";

import { HeadingH4 } from "../../../../styles/global";
import { motion } from 'framer-motion';

import {
  LogoFooter_ApplePodcast,
  LogoFooter_GooglePodcast,
  LogoFooter_SoundCloud,
  LogoFooter_Spotify
} from "../../../../assets/Logos/LogoSubscribe";

export const Subscribe = () => {
  return (
    <>
      <SubscribeContainer>
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
            Subscribe
          </HeadingH4>
        </motion.h4>

        <LogoContainer>
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

            <LogoFooter_ApplePodcast />
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

            <LogoFooter_GooglePodcast />
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

            <LogoFooter_SoundCloud />
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

            <LogoFooter_Spotify />
          </motion.div>
        </LogoContainer>
      </SubscribeContainer>
    </>
  );
}