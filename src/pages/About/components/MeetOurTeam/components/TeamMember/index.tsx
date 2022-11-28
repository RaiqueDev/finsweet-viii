import { TeamMemberComponents } from "./styles";

import {
  Body,
  HeadingH2
} from "../../../../../../styles/global";

interface TeamMemberProps {
  id?: number;
  img: JSX.Element;
  name: string;
  office: string;
  icons: JSX.Element;
}

export const TeamMember = ({ img, name, office, icons }: TeamMemberProps) => {
  return (
    <>
      <TeamMemberComponents>
        {img}

        <HeadingH2>
          {name}
        </HeadingH2>

        <Body>
          {office}
        </Body>

        {icons}
      </TeamMemberComponents>
    </>
  );
}