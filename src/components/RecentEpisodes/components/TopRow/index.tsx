import {
  Content,
  TopRowContainer,
  TopRowMain
} from "./styles";

import {
  Button,
  HeadingH2,
  Body
} from "../../../../styles/global";

export const TopRow = () => {
  return (
    <>
      <TopRowContainer>
        <TopRowMain>
          <Content>
            <HeadingH2>
              Recent Episodes
            </HeadingH2>

            <Body>
              Apparently we had reached a great height in the
              atmosphere, for the sky was a dead black.
            </Body>
          </Content>

          <Button variant="Primary_Button">
            See All Episiodes
          </Button>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}