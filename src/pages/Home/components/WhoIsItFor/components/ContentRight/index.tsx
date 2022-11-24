import {
  ContentRightContainer,
  ContentRightImage,
  ContentRightMain,
  ContentRightImageMain
} from "./styles";

export const ContentRight = () => {
  return (
    <>
      <ContentRightContainer>
        <ContentRightMain>
          <ContentRightImage>
            <ContentRightImageMain />
          </ContentRightImage>
        </ContentRightMain>
      </ContentRightContainer>
    </>
  );
}