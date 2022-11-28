import {
  ContentRightContainer,
  ContentRightMain,
  SocialWrapper,
  SubscribeNow
} from "./styles";

import { HeadingH4 } from '../../../styles/global';
import { Social } from "../../../assets/Social";

import {
  ApplePodcast,
  GooglePodcast,
  SoundCloud,
  Spotify
} from "../../../assets/SocialLogo";

export const ContentRight = () => {
  return (
    <>
      <ContentRightContainer>
        <ContentRightMain>
          <HeadingH4 variant='Gray'>
            Subscribe
          </HeadingH4>

          <SubscribeNow>
            <ApplePodcast />
            <SoundCloud />
            <GooglePodcast />
            <Spotify />
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