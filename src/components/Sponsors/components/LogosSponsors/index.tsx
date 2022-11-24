import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5
} from "../../../../assets/LogosSponsors";

import {
  LogosSponsorsMain,
  LogosSponsorsContainer
} from "./styles";

export const LogosSponsors = () => {
  return (
    <>
      <LogosSponsorsContainer>
        <LogosSponsorsMain>
          <Logo1 />
          <Logo2 />
          <Logo3 />
          <Logo4 />
          <Logo5 />
        </LogosSponsorsMain>
      </LogosSponsorsContainer>
    </>
  );
}