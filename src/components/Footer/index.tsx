import {
  FooterContainer,
  FooterMain
} from "./styles";

import { Pages } from "./components/Pages";
import { ReachUs } from "./components/ReachUs";
import { Subscribe } from "./components/Subscribe";

import { LogoFooter } from "../../assets/Logos/LogoFooter";
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterMain>
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

            <LogoFooter />
          </motion.div>
          <Pages />
          <ReachUs />
          <Subscribe />
        </FooterMain>
      </FooterContainer>
    </>
  );
}