import { motion } from 'framer-motion';

import { ItemContainer } from "./styles";

import {
  Body,
  HeadingH4
} from "../../../../../../styles/global";

interface ItemProps {
  id?: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Item = ({ icon, title, description }: ItemProps) => {
  return (
    <>
      <ItemContainer>
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

          {icon}
        </motion.div>

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
            delay: 0.2,
          }}>

          <HeadingH4>
            {title}
          </HeadingH4>
        </motion.h4>

        <motion.p
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

          <Body>
            {description}
          </Body>
        </motion.p>
      </ItemContainer>
    </>
  );
}