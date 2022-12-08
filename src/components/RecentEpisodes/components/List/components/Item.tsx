import { motion } from 'framer-motion';
import { PlayCircle } from "phosphor-react";

import {
  ItemContent,
  ListItemContainer
} from "./styles";

import {
  Body,
  Button,
  HeadingH3
} from "../../../../../styles/global";

interface ItemListProps {
  id?: number;
  img: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export const ItemList = ({ img, title, description, link }: ItemListProps) => {
  return (
    <>
      <ListItemContainer>
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

          {img}
        </motion.div>

        <ItemContent>
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.2,
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.3,
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.4,
            }}>

            <Button variant="Listen">
              <PlayCircle size={32} color="#503AE7" weight="fill" />
              {link}
            </Button>
          </motion.div>
        </ItemContent>
      </ListItemContainer>
    </>
  );
}