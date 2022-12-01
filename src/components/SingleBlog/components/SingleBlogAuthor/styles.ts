import styled from "styled-components";

export const SingleBlogAuthorContainer = styled.div`
  width: 100%;
  margin-top: 7.5rem;
`;

export const SingleBlogAuthorMain = styled.div`
  width: 90%;
  max-width: 48rem;

  margin: 0 auto;

  display: flex;
  align-items: center;

  gap: 5.375rem;

  border-left: 1rem solid ${props => props.theme.blue};

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const Author = styled.div`
  padding: 2rem;
`;

export const SingleBlogPerson = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const SingleBlogPersonImg = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 99px;
  background-image: url('https://images.unsplash.com/photo-1669617450318-318cc22b9cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;