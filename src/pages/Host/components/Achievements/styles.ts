import styled, { css } from "styled-components";

export const AchievementsContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const AchievementsMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 4fr);
  justify-items: center;

  gap: 1rem;

  @media (max-width: 75rem) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media (max-width: 60rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 41.25rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface AchievementsProps {
  variant?: 'Top';
}

export const AchievementsItem = styled.div<AchievementsProps>`
  width: 100%;
  max-width: 19.25rem;
  height: 29rem;

  background-color: ${props => props.theme.blue};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 6rem;

  ${props => props.variant === 'Top' && css`
    margin-top: 6rem;

    @media (max-width: 30rem) {
      margin-top: 0;
    }
  `}
`;

export const AchievementsIcon = styled.div`
  width: 8rem;
  height: 8rem;
`;

export const AchievementsContent = styled.div`
  width: 90%;
  max-width: 14.0625rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  color: ${props => props.theme.white};

  h1 {
    font: 900 2.5rem Inter, sans-serif;
  }

  h2 {
    font: 900 1.5rem Inter, sans-serif;
  }
`;