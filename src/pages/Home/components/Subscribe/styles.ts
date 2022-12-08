import styled from "styled-components";

import ImgSubscribe from '../../../../assets/ImgSvg/ImgSubscribe.jpg';

export const SubscribeContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const SubscribeMain = styled.div`
  width: 90%;
  max-width: 80rem;
  height: 19.375rem;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  gap: 2.25rem;

  background-image: url(${ImgSubscribe});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  color: ${props => props.theme.white};
`;

export const SubscribeForm = styled.div`
  width: 90%;
  max-width: 31.9375rem;
  margin: 0 auto;

  display: flex;

  input[type=email] {
    width: 100%;
    height: 3rem;

    padding: 1rem;

    border: none;

    background-color: ${props => props.theme.off_white};

    ::placeholder {
      color: ${props => props.theme.gray};
    }
  }

  @media (max-width: 30rem) {
    flex-direction: column;
    gap: 1rem;
  }
`;
