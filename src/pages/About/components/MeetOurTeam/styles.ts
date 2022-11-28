import styled from "styled-components";

export const MeetOurTeamContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const MeetOurTeamMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 3.25rem;

  @media (max-width: 48rem) {
    text-align: center;
  }
`;

export const TeamMembers = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 4fr);
  justify-items: center;
  text-align: start;

  gap: 2rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 30rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;