import {
  CategoriesContainer,
  CategoriesMain,
  Content,
  TopRowContainer,
  TopRowMain
} from "./styles";

import {
  CategoriesButtons,
  HeadingH2,
  HeadingH5
} from "../../../../../../styles/global";

export const TopRow = () => {
  return (
    <>
      <TopRowContainer>
        <TopRowMain>
          <Content>
            <HeadingH2>
              All Podcasts
            </HeadingH2>

            <CategoriesContainer>
              <CategoriesMain>
                <CategoriesButtons variant="Active">
                  All Podcasts
                </CategoriesButtons>

                <CategoriesButtons variant="Disable">
                  Startup
                </CategoriesButtons>

                <CategoriesButtons variant="Disable">
                  Marketing
                </CategoriesButtons>

                <CategoriesButtons variant="Disable">
                  Business
                </CategoriesButtons>
              </CategoriesMain>
            </CategoriesContainer>
          </Content>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}