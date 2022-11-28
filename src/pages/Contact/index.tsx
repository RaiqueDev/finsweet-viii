import { Header } from './components/Header';
import { ContentRight } from './components/ContentRight';

import {
  ContactContainer,
  ContactMain
} from "./styles";

import { Navbar } from '../../components/Navbar';

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