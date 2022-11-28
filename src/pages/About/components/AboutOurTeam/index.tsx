import {
  AboutOurTeamContainer,
  AboutOurTeamMain,
  BottomContent,
  ImageAboutOurTeam
} from "./styles";

import {
  Body,
  HeadingH2
} from '../../../../styles/global';

export const AboutOurTeam = () => {
  return (
    <>
      <AboutOurTeamContainer>
        <AboutOurTeamMain>
          <HeadingH2>
            A few words about our team
          </HeadingH2>

          <ImageAboutOurTeam />

          <BottomContent>
            <span>
              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget
                condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi
                augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer
                viverra sed. Penatibus tortor consequat, habitasse non nisl.
              </Body>
            </span>

            <span>
              <Body>
                <Body variant="SemiBold"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Body> Mus cras
                lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat
                ut netus malesuada enim penatibus non aliquet.
              </Body>
            </span>
          </BottomContent>
        </AboutOurTeamMain>
      </AboutOurTeamContainer>
    </>
  );
}