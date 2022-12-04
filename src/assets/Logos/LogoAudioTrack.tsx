import { motion } from 'framer-motion';
import { LogoContainer } from "../styles";

export const LogoAudioTrack = () => {
  return (
    <>
      <LogoContainer>

        <svg width="432" height="256" viewBox="0 0 432 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Audio track">
            <motion.rect
              id="Color stripe 6"
              x="400"
              y="40"
              width="32"
              height="178"
              fill="#1AD993"
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
                delay: 0.6,
              }}
            />
            <motion.rect
              id="Color stripe 5"
              x="320"
              width="32"
              height="256"
              fill="#503AE7"
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
              }} />

            <motion.rect
              id="Color stripe 4"
              x="240"
              y="79"
              width="32"
              height="99"
              fill="#1AD993"
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
              }} />

            <motion.rect
              id="Color stripe 3"
              x="160"
              y="40"
              width="32"
              height="178"
              fill="#503AE7"
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
              }} />

            <motion.rect
              id="Color stripe 2"
              x="80"
              width="32"
              height="256"
              fill="#1AD993"
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
              }} />

            <motion.rect
              id="Color stripe 1"
              y="79"
              width="32"
              height="99"
              fill="#503AE7"
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
                delay: 0.1,
              }} />
          </g>
        </svg>
      </LogoContainer>
    </>
  );
}