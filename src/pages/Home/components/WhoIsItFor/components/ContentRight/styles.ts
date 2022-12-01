import styled from 'styled-components';

import LinesRight from '../../../../../../assets/ImgSvg/LinesRight.svg';

export const ContentRightContainer = styled.div`
  width: 100%;
  max-width: 44.375rem;
  height: 31rem;

  background-color: ${props => props.theme.blue};

  display: flex;
  align-items: center;
`;

export const ContentRightMain = styled.main`
  width: 90%;
  max-width: 28.8125rem;

  display: flex;
  margin: 0 auto;
`;

export const ContentRightImage = styled.div`
  width: 100%;
  max-width: 28.8125rem;
  height: 100%;

  background-image: url(${LinesRight});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContentRightImageMain = styled.div`
  width: 100%;
  max-width: 24rem;
  height: 24rem;

  border-radius: 999px;

  background-image: url('https://images.pexels.com/photos/4988133/pexels-photo-4988133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 48rem) {
    border-radius: 1rem;
  }
`;