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
            <HeadingH3>
              Podcast Available On
            </HeadingH3>
          </BrandsText>

          <BrandsLogo />
        </BrandsMain>
      </BrandsContainer>
    </>
  );
}