import {
  LogoSponsors_01,
  LogoSponsors_02,
  LogoSponsors_03,
  LogoSponsors_04,
  LogoSponsors_05
} from '../../../../assets/Logos/LogoSponsors';

import {
  LogosSponsorsMain,
  LogosSponsorsContainer
} from "./styles";

export const LogosSponsors = () => {
  return (
    <>
      <LogosSponsorsContainer>
        <LogosSponsorsMain>
          <LogoSponsors_01 />
          <LogoSponsors_02 />
          <LogoSponsors_03 />
          <LogoSponsors_04 />
          <LogoSponsors_05 />
        </LogosSponsorsMain>
      </LogosSponsorsContainer>
    </>
  );
}