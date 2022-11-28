import {
  HeaderContainer
} from "./styles";

import {
  HeadingH3,
  HeadingH4
} from '../../../styles/global';
import { Form } from "./Form";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeadingH3>
          Contact Us
        </HeadingH3>

        <HeadingH4 variant="Purple">
          Interested in collaborating? Please fill the form below.
        </HeadingH4>

        <Form />
      </HeaderContainer>
    </>
  );
}