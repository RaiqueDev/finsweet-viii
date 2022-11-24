import {
  ContentLeftContainer,
  ContentLeftMain,
  Videos
} from "./styles";

import {
  YoutubeLogo
} from "phosphor-react";

export const ContentLeft = () => {
  return (
    <>
      <ContentLeftContainer>
        <ContentLeftMain>

          <Videos>
            <YoutubeLogo size={32} color="#1ad993" weight="fill" />

            <h2>
              350+ Videos
            </h2>
          </Videos>
        </ContentLeftMain>
      </ContentLeftContainer>
    </>
  );
}