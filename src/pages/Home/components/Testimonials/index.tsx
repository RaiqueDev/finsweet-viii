import {
  TestimonialCardContainer,
  TestimonialsContainer,
  TestimonialsMain
} from "./styles";

import { TopRow } from "./components/TopRow";

import { TestimonialsCards } from "./components/TestimonialCard";

import {
  ImgAshBenfred,
  ImgEveMadien,
  ImgRyanSmith
} from "../../../../assets/TestimonialsCard";

const cards = [
  {
    id: 1,
    img: <ImgEveMadien />,
    name: 'Eve Madien',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.'
  },
  {
    id: 2,
    img: <ImgAshBenfred />,
    name: 'Ash Benfred',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. '
  },
  {
    id: 3,
    img: <ImgRyanSmith />,
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