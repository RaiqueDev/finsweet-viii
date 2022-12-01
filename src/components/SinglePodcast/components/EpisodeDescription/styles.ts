import styled from "styled-components";

export const EpisodeDescriptionContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const EpisodeDescriptionMain = styled.main`
  width: 90%;
  max-width: 64rem;

  margin: 0 auto; 

  display: flex;
  justify-content: space-between;
  
  gap: 3rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EpisodeDescriptionContent = styled.div`
  width: 100%;
  max-width: 39.75rem;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const ListEpisodeDescription = styled.div`
  margin: 0 .75rem;

  ul {
    display: flex;
    flex-direction: column;

    gap: .75rem;
  }
`;

export const Subscribe = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;
`;