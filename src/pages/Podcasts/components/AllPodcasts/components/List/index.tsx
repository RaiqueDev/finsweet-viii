import { motion } from 'framer-motion';

import {
  ListContainer,
  ListMain,
  ListItem,
  ItemContent,
  ItemImage
} from "./styles";

import {
  HeadingH3,
  Body,
  Button
} from '../../../../../../styles/global';

import {
  PlayCircle
} from "phosphor-react";

export const List = () => {
  return (
    <>
      <ListContainer>
        <ListMain>
          <ListItem>
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
                delay: 0.2,
              }}>

              <ItemImage>
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
                  delay: 0.3,
                }}>

                <HeadingH3>
                  Ep 1: How to build a world-class business brand
                </HeadingH3>
              </motion.h3>

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
                  delay: 0.4,
                }}>

                <Body>
                  Lorem ipsum at vero eos et accusam et justo duo <br />
                  dolores et ea rebum.
                </Body>
              </motion.h3>

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

                <Button variant="Listen">
                  <PlayCircle size={32} color="#503AE7" weight="fill" />

                  Listen Now
                </Button>
              </motion.div>
            </ItemContent>
          </ListItem>

          <ListItem>
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
                delay: 0.3,
              }}>

              <ItemImage>
                <img src="https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
                  delay: 0.5,
                }}>

                <HeadingH3>
                  Ep 2: Getting the first 100 customers for your business
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
                  delay: 0.6,
                }}>

                <Body>
                  Lorem ipsum at vero eos et accusam et justo duo <br />
                  dolores et ea rebum.
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
                  delay: 0.7,
                }}>

                <Button variant="Listen">
                  <PlayCircle size={32} color="#503AE7" weight="fill" />

                  Listen Now
                </Button>
              </motion.div>
            </ItemContent>
          </ListItem>

          <ListItem>
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

              <ItemImage>
                <img src='https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
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
                  delay: 0.8,
                }}>

                <HeadingH3>
                  Ep 3: Should I raise money for my startup, or not?
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
                  delay: 0.9,
                }}>

                <Body>
                  Lorem ipsum at vero eos et accusam et justo duo <br />
                  dolores et ea rebum.
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
                  delay: 1,
                }}>

                <Button variant="Listen">
                  <PlayCircle size={32} color="#503AE7" weight="fill" />

                  Listen Now
                </Button>
              </motion.div>
            </ItemContent>
          </ListItem>
        </ListMain>
      </ListContainer>
    </>
  );
}