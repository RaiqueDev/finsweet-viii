import {
  Body,
  HeadingH1,
  Button
} from "../../../../../../styles/global";

import {
  ContentLeftContainer,
  Subscribe,
  Text
} from "./styles";

export const ContentLeft = () => {
  return (
    <>
      <ContentLeftContainer>
        <Text>
          <HeadingH1>
            Become The Hero Of
            Your Own Story
          </HeadingH1>

          <Body>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat.
          </Body>
        </Text>

        <Subscribe>
          <input type="email" placeholder='Enter Your Email Id' />

          <Button variant='Primary_Button'>
            Subscribe
          </Button>
        </Subscribe>
      </ContentLeftContainer>
    </>
  );
}