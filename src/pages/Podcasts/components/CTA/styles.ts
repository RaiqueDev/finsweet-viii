import styled from "styled-components";

export const CTAContainer = styled.div`
  width: 100%;
  height: 36.625rem;

  margin: 8rem 0 0 0;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  background-color: ${props => props.theme.purple};
  background-image: url('https://images.pexels.com/photos/6878719/pexels-photo-6878719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CTAMain = styled.main`
  width: 90%;
  max-width: 64rem;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 27.5rem;
  height: auto;

  margin: 5rem 0;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 2.875rem;

  color: ${props => props.theme.white};
`;

export const CTAPulse = styled.div`
  width: 100%;
  max-width: 35.6875rem;
  height: 9.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.blue};

  position: absolute;
`;