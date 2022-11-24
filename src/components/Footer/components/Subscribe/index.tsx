import {
  LogoContainer,
  SubscribeContainer
} from "./styles";

import {
  ApplePodcastFooter,
  GooglePodcastFooter,
  SoundCloudFooter,
  SpotifyFooter
} from "../../../../assets/SocialLogo";

import { HeadingH4 } from "../../../../styles/global";

export const Subscribe = () => {
  return (
    <>
      <SubscribeContainer>
        <HeadingH4>
          Subscribe
        </HeadingH4>

        <LogoContainer>
          <ApplePodcastFooter />
          <GooglePodcastFooter />
          <SoundCloudFooter />
          <SpotifyFooter />
        </LogoContainer>
      </SubscribeContainer>
    </>
  );
}