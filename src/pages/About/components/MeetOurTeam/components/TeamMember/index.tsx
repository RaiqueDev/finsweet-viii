import { motion } from 'framer-motion';

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
        <motion.div
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

          {img}
        </motion.div>

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
            delay: 0.3,
          }}>

          <HeadingH2>
            {name}
          </HeadingH2>
        </motion.h2>

        <motion.p
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
            delay: 0.4,
          }}>

          <Body>
            {office}
          </Body>
        </motion.p>

        <motion.div
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
            delay: 0.5,
          }}>

          {icons}
        </motion.div>
      </TeamMemberComponents>
    </>
  );
}