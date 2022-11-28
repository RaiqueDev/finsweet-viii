import {
  MeetOurTeamContainer,
  MeetOurTeamMain,
  TeamMembers
} from "./styles";

import {
  ImageJeromeBell,
  ImageRehabWalls,
  ImageRobertMill,
  ImageSteveWinston
} from '../../../../assets/TeamMembersAssets';

import { HeadingH2 } from "../../../../styles/global";

import { IconSocial } from "../../../../assets/Icon";

import { TeamMember } from "./components/TeamMember";

const teammembers = [
  {
    id: 1,
    img: <ImageJeromeBell />,
    name: 'Jerome Bell',
    office: 'Founder & CEO',
    icons: <IconSocial />
  },
  {
    id: 2,
    img: <ImageRobertMill />,
    name: 'Robert Mill',
    office: 'Cofounder',
    icons: <IconSocial />
  },
  {
    id: 3,
    img: <ImageRehabWalls />,
    name: 'Rehab Walls',
    office: 'Producer',
    icons: <IconSocial />
  },
  {
    id: 4,
    img: <ImageSteveWinston />,
    name: 'Steve Winston',
    office: 'Editor',
    icons: <IconSocial />
  }
];

export const MeetOurTeam = () => {
  return (
    <>
      <MeetOurTeamContainer>
        <MeetOurTeamMain>
          <HeadingH2>
            Meet Our Team
          </HeadingH2>

          <TeamMembers>
            {teammembers.map(teammember => {
              return (
                <TeamMember
                  key={teammember.id}
                  img={teammember.img}
                  name={teammember.name}
                  office={teammember.office}
                  icons={teammember.icons}
                />
              )
            })}
          </TeamMembers>
        </MeetOurTeamMain>
      </MeetOurTeamContainer>
    </>
  );
}