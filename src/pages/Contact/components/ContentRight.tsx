import {
  ContentRightContainer,
  ContentRightMain,
  SocialWrapper,
  SubscribeNow
} from "./styles";

import { HeadingH4 } from '../../../styles/global';
import { Social } from "../../../assets/Social";

import {
  LogoBrands_ApplePodcast,
  LogoBrands_GooglePodcast,
  LogoBrands_SoundCloud,
  LogoBrands_Spotify
} from "../../../assets/Logos/LogoBrands";

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

            <Social />
          </SocialWrapper>
        </ContentRightMain>
      </ContentRightContainer>
    </>
  );
}