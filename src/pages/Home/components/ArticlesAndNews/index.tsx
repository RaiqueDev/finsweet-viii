import { motion } from 'framer-motion';

import {
  ArticlesAndNewsContainer,
  ArticlesAndNewsMain,
  ItemCard,
  ItemCardContent,
  ItemCardImg
} from "./styles";

import {
  Body,
  HeadingH3,
  Button,
  HeadingH2,
  HeadingH4
} from '../../../../styles/global';

export const ArticlesAndNews = () => {
  return (
    <>
      <ArticlesAndNewsContainer>
        <ArticlesAndNewsMain>

          <ItemCard variant="Off_White">
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

              <ItemCardContent variant="Margin">
                <motion.h2
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

                  <HeadingH2>
                    Read our <br />
                    articles & new2
                  </HeadingH2>
                </motion.h2>

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

                  <a href="#">
                    <HeadingH4>
                      See More
                    </HeadingH4>
                  </a>
                </motion.h4>
              </ItemCardContent>
            </motion.div>
          </ItemCard>

          <ItemCard>
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

              <ItemCardImg variant="ImgCard1" />

              <ItemCardContent>
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
                    Getting the first 100 customers for your business
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
                    Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
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

                  <Button variant="Read_Now">
                    Read Now
                  </Button>
                </motion.div>
              </ItemCardContent>
            </motion.div>
          </ItemCard>

          <ItemCard>
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

              <ItemCardImg variant='ImgCard2' />

              <ItemCardContent>
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
                    Apparently we had reached a great height in the atmosphere, ...
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
                    Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
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

                  <Button variant="Read_Now">
                    Read Now
                  </Button>
                </motion.div>
              </ItemCardContent>
            </motion.div>
          </ItemCard>
        </ArticlesAndNewsMain>
      </ArticlesAndNewsContainer>
    </>
  );
}