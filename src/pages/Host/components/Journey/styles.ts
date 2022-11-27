import styled from "styled-components";

import LinesJourney from '../../../../assets/LinesJourney.svg'

export const JourneyContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const JourneyMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;
  padding: 6.6875rem 0 .375rem 0;

  background-image: url(${LinesJourney});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const JourneyContent = styled.div`
  width: 100%;
  max-width: 64rem;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 64rem) {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;