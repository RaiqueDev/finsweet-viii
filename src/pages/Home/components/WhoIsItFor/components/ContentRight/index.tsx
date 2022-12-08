import { motion } from 'framer-motion';

import {
  ContentRightImage
} from "./styles";

export const ContentRight = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          delay: 0.2,
        }}
        style={{ width: '100%', height: '100%' }}>

        <ContentRightImage />
      </motion.div>
    </>
  );
}