import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const TestimonialsMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;
`;

export const TestimonialCardContainer = styled.div`
  width: 100%;

  margin: 4rem 0 0 0;

  display: grid;
  grid-template-columns: repeat(3, 3fr);
  justify-items: center;

  gap: 2rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 2fr);
  }

  @media (max-width: 48rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

