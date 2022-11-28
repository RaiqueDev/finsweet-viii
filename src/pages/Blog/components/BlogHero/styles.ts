import styled from 'styled-components';

export const BlogHeroContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const BlogHeroMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4rem;

  @media (max-width: 48rem) {
    text-align: center;
    flex-direction: column; 
  }
`;

export const BlogHeroContent = styled.div`
  width: 100%;
  max-width: 32.8125rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;

  @media (max-width: 48rem) {
    text-align: center;
    align-items: center;
  }
`;

export const BlogHeroImg = styled.div`
  width: 100%;
  max-width: 38.5rem;
  height: 28rem;

  background-image: url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;