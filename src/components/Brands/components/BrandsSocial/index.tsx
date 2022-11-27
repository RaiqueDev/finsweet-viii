import {
  ApplePodcast,
  GooglePodcast,
  SoundCloud,
  Spotify
} from "../../../../assets/SocialLogo";

import {
  BrandsSocialContainer,
  BrandsSocialMain
} from "./styles";

export const BrandsSocial = () => {
  return (
    <>
      <BrandsSocialContainer>
        <BrandsSocialMain>
          <ApplePodcast />
          <SoundCloud />
          <GooglePodcast />
          <Spotify />
        </BrandsSocialMain>
      </BrandsSocialContainer>
    </>
  );
}