import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 18.4375rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  border-bottom: 12px solid ${props => props.theme.blue};
`;

export const Person = styled.div`
  width: 100%;
  max-width: 13.25rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImgPerson = styled.div`
  img {
    border-radius: 99px;
    width: 5rem;
    height: 5rem;
  }
`;

export const NameStars = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;