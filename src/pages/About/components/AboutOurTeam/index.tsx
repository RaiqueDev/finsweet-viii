import { motion } from 'framer-motion';
import {
  AboutOurTeamContainer,
  AboutOurTeamMain,
  BottomContent,
  ImageAboutOurTeam
} from "./styles";

import {
  Body,
  HeadingH2
} from '../../../../styles/global';

export const AboutOurTeam = () => {
  return (
    <>
      <AboutOurTeamContainer>
        <AboutOurTeamMain>
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
              A few words about our team
            </HeadingH2>
          </motion.h2>

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
              delay: 0.2,
            }}>

            <ImageAboutOurTeam />
          </motion.div>

          <BottomContent>
            <span>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
                  condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
                  augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer
                  viverra sed. Penatibus tortor consequat, habitasse non nisl.
                </Body>
              </motion.p>
            </span>

            <span>
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
                  delay: 0.1,
                }}>

                <Body>
                  <Body variant="SemiBold"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Body> Mus cras
                  lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat
                  ut netus malesuada enim penatibus non aliquet.
                </Body>
              </motion.p>
            </span>
          </BottomContent>
        </AboutOurTeamMain>
      </AboutOurTeamContainer>
    </>
  );
}