import { motion } from 'framer-motion';

import { AboutImg } from "../../../../../../assets/ImgSvg/AboutImg";

import { AboutFinsweetContainer } from "./styles";

export const AboutFinsweet = () => {
  return (
    <>
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

        <AboutFinsweetContainer>
          <AboutImg />
        </AboutFinsweetContainer>
      </motion.div>
    </>
  );
}