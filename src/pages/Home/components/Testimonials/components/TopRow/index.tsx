import {
  Arrows,
  ButtonArrow,
  Content,
  TopRowContainer,
  TopRowMain
} from "./styles";

import {
  HeadingH2,
  Body
} from "../../../../../../styles/global";

import {
  TestimonialsCards
} from "../TestimonialCard";

import {
  ArrowLeft,
  ArrowRight
} from "phosphor-react";

export const TopRow = () => {
  return (
    <>
      <TopRowContainer>
        <TopRowMain>
          <Content>
            <HeadingH2>
              What our listeners say
            </HeadingH2>

            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus
              morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada
              enim penatibus non aliquet.
            </Body>
          </Content>

          <Arrows>
            <ButtonArrow>
              <ArrowLeft size={24} />
            </ButtonArrow>

            <ButtonArrow>
              <ArrowRight size={24} />
            </ButtonArrow>
          </Arrows>
        </TopRowMain>

        <TestimonialsCards />
      </TopRowContainer>
    </>
  );
}