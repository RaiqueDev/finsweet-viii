import styled from "styled-components";

export const AuthorContainer = styled.div`
  width: 100%;
  margin: 8rem 0 0 0;
`;

export const AuthorMain = styled.div`
  width: 90%;
  max-width: 64rem;

  margin: 0 auto;

  display: flex;
  align-items: center;

  gap: 5.375rem;
  
  padding: 0 1.5rem;
  border-left: 1rem solid ${props => props.theme.blue};

  @media (max-width: 48rem) {
    flex-direction: column; 
  }
`;

export const AuthorPerson = styled.div`
  width: 100%;
  max-width: 9.6875rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  p {
    font: .5rem 400 Inter, sans-serif;
  }
`;

export const AuthorImg = styled.div`
  width: 4rem;
  height: 4rem;

  border-radius: 99px;

  background-image: url('https://images.unsplash.com/photo-1669818319938-bb7029dc3fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;