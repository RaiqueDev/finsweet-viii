import { motion } from 'framer-motion';

import {
  ImgPerson,
  NameStars,
  Person,
  Card
} from "./styles";

import { Body } from '../../../../../../styles/global';

interface TestimonialsCardProps {
  id?: number;
  img: JSX.Element;
  name: string;
  description: string;
}

export const TestimonialsCards = ({ img, name, description }: TestimonialsCardProps) => {
  return (
    <>
      <Card>
        <Person>
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
              stiffness: 600,
              damping: 20,
              mass: 6,
              delay: 0.1,
            }}>

            <ImgPerson>
              {img}
            </ImgPerson>
          </motion.div>

          <NameStars>
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
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.1,
              }}>

              {name}
            </motion.div>

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
                stiffness: 600,
                damping: 20,
                mass: 6,
                delay: 0.2,
              }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" fill="none" viewBox="0 0 116 20">
                <path fill="#FF7602" d="m10 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.49 6.91h7.266L10 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L34 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L34 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L58 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L58 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L82 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L82 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L106 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L106 0Z" />
              </svg>
            </motion.div>
          </NameStars>
        </Person>

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
            stiffness: 600,
            damping: 20,
            mass: 6,
            delay: 0.3,
          }}>

          <Body>
            {description}
          </Body>
        </motion.p>
      </Card>
    </>
  );
}