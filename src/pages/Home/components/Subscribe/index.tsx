import { motion } from 'framer-motion';

import {
  SubscribeContainer,
  SubscribeForm,
  SubscribeMain
} from './styles';

import {
  Button,
  HeadingH2
} from '../../../../styles/global';

export const Subscribe = () => {
  return (
    <>
      <SubscribeContainer>
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

          <SubscribeMain>
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
                Receive new episodes in your inbox.
              </HeadingH2>
            </motion.h2>

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
                delay: 0.4,
              }}>

              <SubscribeForm>
                <input type="email" placeholder='Enter Your Email' />

                <Button variant='Input_Subscribe'>
                  Subscribe
                </Button>
              </SubscribeForm>
            </motion.div>
          </SubscribeMain>
        </motion.div>
      </SubscribeContainer>
    </>
  );
}