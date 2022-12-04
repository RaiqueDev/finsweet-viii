import { motion } from 'framer-motion';

import {
  BrandsContainer,
  BrandsMain,
  BrandsText
} from './styles';

import {
  HeadingH3
} from '../../styles/global';

import { BrandsLogo } from './components/BrandsLogo';

export const Brands = () => {
  return (
    <>
      <BrandsContainer>
        <BrandsMain>
          <BrandsText>
            <motion.h3
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
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
              <HeadingH3>
                Podcast Available On
              </HeadingH3>
            </motion.h3>
          </BrandsText>

          <BrandsLogo />
        </BrandsMain>
      </BrandsContainer>
    </>
  );
}