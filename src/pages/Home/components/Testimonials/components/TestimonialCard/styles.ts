import styled from "styled-components";

export const TestimonialCardContainer = styled.div`
  width: 100%;

  margin: 4rem 0 0 0;

  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-items: center;

  gap: 1rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 18.4375rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  border-bottom: 12px solid ${props => props.theme.blue};
`;

export const Person = styled.div`
  width: 100%;
  max-width: 13.25rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImgPerson = styled.div`
  width: 5rem;
  height: 5rem;

  border-radius: 99px;

  background-image: url('https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NameStars = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;