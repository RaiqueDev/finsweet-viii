import { Navbar } from '../../components/Navbar';
import { Header } from './components/Header';
import { ContentRight } from './components/ContentRight';

import {
  ContactContainer,
  ContactMain
} from "./styles";

export const Contact = () => {
  return (
    <>
      <Navbar />

      <ContactContainer>
        <ContactMain>
          <Header />
          <ContentRight />
        </ContactMain>
      </ContactContainer>
    </>
  );
}