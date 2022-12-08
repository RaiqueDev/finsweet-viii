import { motion } from 'framer-motion';
import {
  AllBlogsImg,
  AllBlogsItemsContainer
} from "./styles";

import {
  Body,
  Button,
  HeadingH3
} from "../../../../../../styles/global";

interface AllBlogsItemsProps {
  id?: number;
  img: string;
  title: string;
  description: string;
}

export const AllBlogsItems = ({ img, title, description }: AllBlogsItemsProps) => {
  return (
    <>
      <AllBlogsItemsContainer>
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

          <AllBlogsImg>
            <img src={img} />
          </AllBlogsImg>
        </motion.div>

        <motion.h3
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
            stiffness: 400,
            damping: 40,
            mass: 3.5,
            delay: 0.3,
          }}>

          <HeadingH3>
            {title}
          </HeadingH3>
        </motion.h3>

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
            stiffness: 400,
            damping: 40,
            mass: 3.5,
            delay: 0.4,
          }}>

          <Body>
            {description}
          </Body>
        </motion.p>

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
            stiffness: 400,
            damping: 40,
            mass: 3.5,
            delay: 0.4,
          }}>

          <Button variant="Read_Now">
            Read Now
          </Button>
        </motion.div>
      </AllBlogsItemsContainer>
    </>
  );
}