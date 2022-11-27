import {
  JourneyContainer,
  JourneyContent,
  JourneyMain
} from "./styles";

import {
  Body,
  Content,
  HeadingH2
} from '../../../../styles/global';

export const Journey = () => {
  return (
    <>
      <JourneyContainer>
        <JourneyMain>
          <JourneyContent>
            <Content>
              <HeadingH2>
                My origins on YouTube in 2008
              </HeadingH2>

              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat,
                habitasse non nisl
              </Body>

              <Body>
                <Body variant="SemiBold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mus cras lacus tellus morbi viverra suspendisse ornare.
                </Body>
                Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
              </Body>
            </Content>

            <Content>
              <HeadingH2>
                From tech journalist, to Vlogger and YouTuber
              </HeadingH2>

              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                cras lacus tellus morbi viverra suspendisse ornare. Sit
                volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
              </Body>

              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget condimentum enim libero ultricies amet odio fringilla. Ut
                nibh morbi augue porta aliquet commodo. Fermentum auctor lacus
                eget in ut integer viverra sed. Penatibus tortor consequat,
                habitasse non nisl.
              </Body>

              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem eget condimentum enim libero ultricies ame\
              </Body>
            </Content>
          </JourneyContent>
        </JourneyMain>
      </JourneyContainer>
    </>
  );
}