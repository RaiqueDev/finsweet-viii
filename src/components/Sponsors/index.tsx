import {
  SponsorsContainer,
  SponsorsMain,
  SponsorsPurple
} from "./styles";

import { HeadingH2 } from '../../styles/global';
import { LogosSponsors } from "./components/LogosSponsors";

export const Sponsors = () => {
  return (
    <>
      <SponsorsContainer>
        <SponsorsMain>
          <HeadingH2>
            Our Sponsors
          </HeadingH2>
          <LogosSponsors />
        </SponsorsMain>

        <SponsorsPurple />
      </SponsorsContainer>
    </>
  );
}