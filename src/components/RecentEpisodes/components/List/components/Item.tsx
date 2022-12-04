import { motion } from 'framer-motion';
import { PlayCircle } from "phosphor-react";

import {
  ItemContent,
  ItemImage,
  ListItemContainer
} from "./styles";

import {
  Body,
  Button,
  HeadingH3
} from "../../../../../styles/global";

interface ItemListProps {
  id?: number;
  img: string;
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
            stiffness: 400,
            damping: 40,
            mass: 3.5,
            delay: 0.5,
          }}>

          <ItemImage>
            <img src={img} />
          </ItemImage>
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
              stiffness: 400,
              damping: 40,
              mass: 3.5,
              delay: 0.6,
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
              delay: 0.7,
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
              delay: 0.8,
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