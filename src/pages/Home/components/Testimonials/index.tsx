import {
  TestimonialsContainer,
  TestimonialsMain
} from "./styles";

import {
  TopRow
} from "./components/TopRow";

export const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer>
        <TestimonialsMain>
          <TopRow />
        </TestimonialsMain>
      </TestimonialsContainer>
    </>
  );
}