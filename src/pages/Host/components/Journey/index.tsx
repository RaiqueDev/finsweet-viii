import { motion } from 'framer-motion';

import {
  JourneyContainer,
  JourneyContent,
  JourneyMain
} from "./styles";

import {
  Body,
  Content,
  HeadingH2
} from '../../../../styles/global';

export const Journey = () => {
  return (
    <>
      <JourneyContainer>
        <JourneyMain>
          <JourneyContent>
            <Content>
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
                  delay: 0.1,
                }}>

                <HeadingH2>
                  My origins on YouTube in 2008
                </HeadingH2>
              </motion.h2>

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
                  delay: 0.2,
                }}>

                <Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut
                  nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat,
                  habitasse non nisl
                </Body>
              </motion.p>

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
                  <Body variant="SemiBold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mus cras lacus tellus morbi viverra suspendisse ornare.
                  </Body>
                  Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </Body>
              </motion.p>
            </Content>

            <Content>
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
                  delay: 0.1,
                }}>

                <HeadingH2>
                  From tech journalist, to Vlogger and YouTuber
                </HeadingH2>
              </motion.h2>

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
                  delay: 0.2,
                }}>

                <Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                  cras lacus tellus morbi viverra suspendisse ornare. Sit
                  volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </Body>
              </motion.p>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut
                  nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat,
                  habitasse non nisl.
                </Body>
              </motion.p>

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
                  delay: 0.4,
                }}>

                <Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem eget condimentum enim libero ultricies ame\
                </Body>
              </motion.p>
            </Content>
          </JourneyContent>
        </JourneyMain>
      </JourneyContainer>
    </>
  );
}