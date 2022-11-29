import {
  TestimonialCardContainer,
  TestimonialsContainer,
  TestimonialsMain
} from "./styles";

import { TopRow } from "./components/TopRow";

import { TestimonialsCards } from "./components/TestimonialCard";

const cards = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Eve Madien',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Ash Benfred',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. '
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/5273717/pexels-photo-5273717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Ryan Smith',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.'
  }
]

export const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer>
        <TestimonialsMain>
          <TopRow />

          <TestimonialCardContainer>
            {cards.map(testimonialscards => {
              return (
                <TestimonialsCards
                  key={testimonialscards.id}
                  img={testimonialscards.img}
                  name={testimonialscards.name}
                  description={testimonialscards.description}
                />
              );
            })}
          </TestimonialCardContainer>
        </TestimonialsMain>
      </TestimonialsContainer>
    </>
  );
}