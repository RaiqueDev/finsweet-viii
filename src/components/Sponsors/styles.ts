import styled from "styled-components";

export const SponsorsContainer = styled.div`
  width: 100%;
  height: 17.8125rem;

  padding: 4.5rem 0 0 0;
  margin: 10rem 0 0 0;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;  

export const SponsorsMain = styled.main`
  width: 90%;
  max-width: 80rem;

  padding: 4.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;

  gap: 4.25rem;

  margin: 0 auto;
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
`;

export const SponsorsPurple = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;

  background-color: ${props => props.theme.black};
`;