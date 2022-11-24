import {
  HowItBeganContainer,
  HowItBeganMain
} from "./styles";

import {
  ContentLeft
} from "./components/ContentLeft";

import {
  ContentRight
} from "./components/ContentRight";

export const HowItBegan = () => {
  return (
    <>
      <HowItBeganContainer>
        <HowItBeganMain>
          <ContentLeft />
          <ContentRight />
        </HowItBeganMain>
      </HowItBeganContainer>
    </>
  );
}