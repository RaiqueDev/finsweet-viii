import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 4rem 0 0 0;
`;

export const HeaderMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  align-items: center;

  gap: 3rem;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const PodcastImage = styled.div`
  width: 100%;
  max-width: 38.5rem;
  height: 25rem;

  background-image: url('https://images.pexels.com/photos/12216995/pexels-photo-12216995.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');
  background-size: cover;
  background-position: center;
`;