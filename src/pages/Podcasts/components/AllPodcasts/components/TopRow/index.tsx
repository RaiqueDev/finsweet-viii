import { HeadingH4, HeadingH5 } from '../../../../../../styles/global';
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
                  <HeadingH5 variant='White'>
                    All Podcasts
                  </HeadingH5>
                </CategoriesButtons>

                <CategoriesButtons variant="Disable">
                  <HeadingH5 variant='Gray'>
                    Startup
                  </HeadingH5>
                </CategoriesButtons>

                <CategoriesButtons variant="Disable">
                  <HeadingH5 variant='Gray'>
                    Marketing
                  </HeadingH5>
                </CategoriesButtons>

                <CategoriesButtons variant="Disable">
                  <HeadingH5 variant='Gray'>
                    Business
                  </HeadingH5>
                </CategoriesButtons>
              </CategoriesMain>
            </CategoriesContainer>
          </Content>
        </TopRowMain>
      </TopRowContainer>
    </>
  );
}