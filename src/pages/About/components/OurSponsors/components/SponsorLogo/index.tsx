import { motion } from 'framer-motion';

import {
  SponsorBecomeASponsorContainer,
  SponsorBecomeASponsorMain,
  SponsorLogoContainer
} from "./styles";

import {
  HeadingH3,
  Body
} from '../../../../../../styles/global';

interface SponsorLogoProps {
  id?: number;
  logo: JSX.Element;
  title?: string;
  contact?: string;
}

export const SponsorLogo = ({ logo }: SponsorLogoProps) => {
  return (
    <>
      <SponsorLogoContainer>
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

          {logo}
        </motion.div>
      </SponsorLogoContainer>
    </>
  );
}

export const SponsorBecomeASponsor = () => {
  return (
    <>
      <SponsorBecomeASponsorContainer>
        <SponsorBecomeASponsorMain>
          <HeadingH3>
            Become a Sponsor
          </HeadingH3>

          <Body>
            Contact Now

            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="4" fill="none" viewBox="0 0 39 4">
              <path fill="#1AD993" d="M0 0h39v4H0z" />
            </svg>
          </Body>
        </SponsorBecomeASponsorMain>
      </SponsorBecomeASponsorContainer>
    </>
  );
}