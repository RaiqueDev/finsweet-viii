import {
  OurSponsorsContainer,
  OurSponsorsMain,
  SponsorLogos
} from "./styles";

import {
  HeadingH1
} from "../../../../styles/global";

import {
  Sponsor1,
  Sponsor2,
  Sponsor3,
  Sponsor4,
  Sponsor5
} from "../../../../assets/sponsorIcons";

import {
  SponsorLogo,
  SponsorBecomeASponsor
} from "./components/SponsorLogo";

const sponsorlogos = [
  {
    id: 1,
    logo: <Sponsor1 />
  },
  {
    id: 2,
    logo: <Sponsor2 />
  },
  {
    id: 3,
    logo: <Sponsor3 />
  },
  {
    id: 4,
    logo: <Sponsor4 />
  },
  {
    id: 5,
    logo: <Sponsor5 />
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