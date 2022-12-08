import { motion } from 'framer-motion';

import {
  ListContainer,
  ListMain,
  ListItem,
  ItemContent,
  ItemListImage
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
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.1,
              }}>

              <ItemListImage variant='List1' />
                
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
                  Ep 1: How to build a world-class business brand
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
                  stiffness: 600,
                  damping: 20,
                  mass: 6,
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
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.1,
              }}>

              <ItemListImage variant='List2' />
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
                  stiffness: 600,
                  damping: 20,
                  mass: 6,
                  delay: 0.3,
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
                  stiffness: 600,
                  damping: 20,
                  mass: 6,
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
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.1,
              }}>

              <ItemListImage variant='List3' />
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
                  stiffness: 600,
                  damping: 20,
                  mass: 6,
                  delay: 0.3,
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
                  stiffness: 600,
                  damping: 20,
                  mass: 6,
                  delay: 0.4,
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