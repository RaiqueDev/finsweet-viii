import {
  HeaderContainer,
  HeaderMain,
} from "./styles";

import {
  ContentLeft
} from "./components/ContentLeft";

import {
  AudioTrack
} from "./components/AudioTrack";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderMain>
          <ContentLeft />
          <AudioTrack />
        </HeaderMain>
      </HeaderContainer>
    </>
  );
}