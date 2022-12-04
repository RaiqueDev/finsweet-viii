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
} from '../../../../assets/TeamMembersPerson';

import { HeadingH2 } from "../../../../styles/global";

import { TeamMember } from "./components/TeamMember";
import { IconSocial } from "../../../../assets/Logos/LogoIcon";
import { motion } from 'framer-motion';

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
          <motion.h2
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              mass: 3.5,
              delay: 0.2,
            }}>

            <HeadingH2>
              Meet Our Team
            </HeadingH2>
          </motion.h2>

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