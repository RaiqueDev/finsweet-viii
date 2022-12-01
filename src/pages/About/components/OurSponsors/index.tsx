import {
  OurSponsorsContainer,
  OurSponsorsMain,
  SponsorLogos
} from "./styles";

import {
  HeadingH1
} from "../../../../styles/global";

import {
  SponsorLogo,
  SponsorBecomeASponsor
} from "./components/SponsorLogo";

import {
  LogoSponsors_black_01,
  LogoSponsors_black_02,
  LogoSponsors_black_03,
  LogoSponsors_black_04,
  LogoSponsors_black_05
} from "../../../../assets/Logos/LogoSponsors";

const sponsorlogos = [
  {
    id: 1,
    logo: <LogoSponsors_black_01 />
  },
  {
    id: 2,
    logo: <LogoSponsors_black_02 />
  },
  {
    id: 3,
    logo: <LogoSponsors_black_03 />
  },
  {
    id: 4,
    logo: <LogoSponsors_black_04 />
  },
  {
    id: 5,
    logo: <LogoSponsors_black_05 />
  },
];

export const OurSponsors = () => {
  return (
    <>
      <OurSponsorsContainer>
        <OurSponsorsMain>
          <HeadingH1>
            Our Sponsors
          </HeadingH1>

          <SponsorLogos>
            {sponsorlogos.map(sponsorlogo => {
              return (
                <SponsorLogo
                  key={sponsorlogo.id}
                  logo={sponsorlogo.logo}
                />
              )
            })}

            <SponsorBecomeASponsor />
          </SponsorLogos>
        </OurSponsorsMain>
      </OurSponsorsContainer>
    </>
  );
}