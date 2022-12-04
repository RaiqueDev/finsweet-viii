import { motion } from 'framer-motion';

import {
  ContentRightContainer,
  ContentRightMain,
  SocialWrapper,
  SubscribeNow
} from "./styles";

import {
  LogoBrands_ApplePodcast,
  LogoBrands_GooglePodcast,
  LogoBrands_SoundCloud,
  LogoBrands_Spotify
} from "../../../../assets/Logos/LogoBrands";

import { HeadingH4 } from '../../../../styles/global';
import { LogoSocialContact } from "../../../../assets/Logos/LogoSocialContact";

export const ContentRight = () => {
  return (
    <>
      <ContentRightContainer>
        <ContentRightMain>
          <motion.h4
            style={{ width: '100%' }}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
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

            <HeadingH4 variant='Gray'>
              Subscribe
            </HeadingH4>
          </motion.h4>

          <SubscribeNow>
            <LogoBrands_ApplePodcast />
            <LogoBrands_SoundCloud />
            <LogoBrands_GooglePodcast />
            <LogoBrands_Spotify />
          </SubscribeNow>

          <SocialWrapper>
            <motion.h4
              style={{ width: '100%' }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
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

              <HeadingH4>
                Socials
              </HeadingH4>
            </motion.h4>

            <LogoSocialContact />
          </SocialWrapper>
        </ContentRightMain>
      </ContentRightContainer>
    </>
  );
}