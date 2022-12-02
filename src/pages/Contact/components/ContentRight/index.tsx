import {
  ContentRightContainer,
  ContentRightMain,
  SocialWrapper,
  SubscribeNow
} from "./styles";

import { HeadingH4 } from '../../../../styles/global';

import {
  LogoBrands_ApplePodcast,
  LogoBrands_GooglePodcast,
  LogoBrands_SoundCloud,
  LogoBrands_Spotify
} from "../../../../assets/Logos/LogoBrands";

import { LogoSocialContact } from "../../../../assets/Logos/LogoSocialContact";

export const ContentRight = () => {
  return (
    <>
      <ContentRightContainer>
        <ContentRightMain>
          <HeadingH4 variant='Gray'>
            Subscribe
          </HeadingH4>

          <SubscribeNow>
            <LogoBrands_ApplePodcast />
            <LogoBrands_SoundCloud />
            <LogoBrands_GooglePodcast />
            <LogoBrands_Spotify />
          </SubscribeNow>

          <SocialWrapper>
            <HeadingH4>
              Socials
            </HeadingH4>

            <LogoSocialContact />
          </SocialWrapper>
        </ContentRightMain>
      </ContentRightContainer>
    </>
  );
}