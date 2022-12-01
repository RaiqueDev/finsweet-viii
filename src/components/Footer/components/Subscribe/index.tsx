import {
  LogoContainer,
  SubscribeContainer
} from "./styles";

import { HeadingH4 } from "../../../../styles/global";

import {
  LogoFooter_ApplePodcast,
  LogoFooter_GooglePodcast,
  LogoFooter_SoundCloud,
  LogoFooter_Spotify
} from "../../../../assets/Logos/LogoSubscribe";

export const Subscribe = () => {
  return (
    <>
      <SubscribeContainer>
        <HeadingH4>
          Subscribe
        </HeadingH4>

        <LogoContainer>
          <LogoFooter_ApplePodcast />
          <LogoFooter_GooglePodcast />
          <LogoFooter_SoundCloud />
          <LogoFooter_Spotify />
        </LogoContainer>
      </SubscribeContainer>
    </>
  );
}