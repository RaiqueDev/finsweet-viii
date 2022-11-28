import {
  Body,
  HeadingH1,
  Button
} from "../../../../../../styles/global";

import {
  ContentAboutContainer,
  Text
} from "./styles";

export const ContentAbout = () => {
  return (
    <>
      <ContentAboutContainer>
        <Text>
          <HeadingH1>
            About Finsweet
            Podcast
          </HeadingH1>

          <Body>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat.
          </Body>
        </Text>

        <Button variant="Primary_Button">
          Subscribe Now!
        </Button>
      </ContentAboutContainer>
    </>
  );
}