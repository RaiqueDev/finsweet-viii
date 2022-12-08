import { motion } from 'framer-motion';

import {
  SponsorsContainer,
  SponsorsMain,
  SponsorsPurple
} from "./styles";

import { HeadingH2 } from '../../styles/global';
import { LogosSponsors } from "./components/LogosSponsors";

export const Sponsors = () => {
  return (
    <>
      <SponsorsContainer>
        <SponsorsMain>
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
              Our Sponsors
            </HeadingH2>
          </motion.h2>
          <LogosSponsors />
        </SponsorsMain>

        <SponsorsPurple />
      </SponsorsContainer>
    </>
  );
}