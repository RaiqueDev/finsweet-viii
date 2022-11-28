import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const ContentRightContainer = styled.div`
  width: 100%;
  max-width: 29.25rem;
`;

export const ContentRightMain = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2.25rem;
`;

export const SubscribeNow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  justify-items: right;

  gap: 2rem;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 39rem;

  margin-top: 3.25rem;

  form {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    input[type="text"] {
      width: 100%;
      height: 3rem;

      border: none;
      background-color: ${props => props.theme.off_white};

      padding: 0 1rem;

      ::placeholder {
        color: ${props => props.theme.gray};
      }
    }

    textarea {
      width: 100%;
      height: 8rem;

      border: none;
      background-color: ${props => props.theme.off_white};

      padding: 1rem;
      resize: none;

      ::placeholder {
        color: ${props => props.theme.gray};
      }
    }
  }
`;