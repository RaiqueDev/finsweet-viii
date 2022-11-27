import {
  BrandsContainer,
  BrandsMain,
  BrandsText
} from './styles';

import {
  HeadingH3
} from '../../styles/global';

import {
  BrandsSocial
} from './components/BrandsSocial';

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

          <BrandsSocial />
        </BrandsMain>
      </BrandsContainer>
    </>
  );
}