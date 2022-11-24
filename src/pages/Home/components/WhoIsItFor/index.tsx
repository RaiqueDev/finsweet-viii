import {
  WhoIsItForContainer,
  WhoIsItForMain
} from "./styles";

import {
  ContentLeft
} from "./components/ContentLeft";

import {
  ContentRight
} from "./components/ContentRight";

export const WhoIsItFor = () => {
  return (
    <>
      <WhoIsItForContainer>
        <WhoIsItForMain>
          <ContentLeft />
          <ContentRight />
        </WhoIsItForMain>
      </WhoIsItForContainer>
    </>
  );
}