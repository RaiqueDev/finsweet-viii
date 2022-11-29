import {
  BrandsContainer,
  BrandsMain
} from "./styles";

import {
  LogoBrands_ApplePodcast, 
  LogoBrands_GooglePodcast, 
  LogoBrands_SoundCloud,
  LogoBrands_Spotify
} from "../../../assets/Logos/LogoBrands";

export const BrandsLogo = () => {
  return (
    <>
      <BrandsContainer>
        <BrandsMain>
          <LogoBrands_ApplePodcast />
          <LogoBrands_SoundCloud />
          <LogoBrands_GooglePodcast />
          <LogoBrands_Spotify />
        </BrandsMain>
      </BrandsContainer>
    </>
  );
}