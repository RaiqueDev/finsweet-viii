import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 3rem 0;

  background-color: ${props => props.theme.black};

  background-image: url('https://images.pexels.com/photos/6883795/pexels-photo-6883795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderMain = styled.main`
  width: 90%;
  max-width: 80rem;

  margin: 0 auto;
`;

export const HeaderBox = styled.div`
  width: 100%;
  max-width: 48rem;
  padding: 6rem 0;

  border-left: 1rem solid ${props => props.theme.green};

  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  opacity: 0.9;
`;

export const Content = styled.div`
  width: 90%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;