import styled from "styled-components";

import DreamSectionLine from '../../../../assets/DreamSectionLine.svg';

export const DreamSectionContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const DreamSectionMain = styled.div`
  width: 90%;
  max-width: 80rem;
  height: 39.6875rem;

  margin: 0 auto;

  background-image: url(${DreamSectionLine});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media (max-width: 64rem) {
    flex-direction: column;
  }
`;

export const DreamSectionImage = styled.div`
  width: 100%;
  max-width: 43.375rem;
  height: 39.6875rem;

  background-image: url('https://images.pexels.com/photos/6878718/pexels-photo-6878718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 90%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Wave = styled.div`
  width: 100%;
  max-width: 24rem;
  height: 7.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.blue};

  svg {
    width: 90%;
  }
`;