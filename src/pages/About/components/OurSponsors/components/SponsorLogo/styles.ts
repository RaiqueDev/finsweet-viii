import styled from "styled-components";

export const SponsorLogoContainer = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 14rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  background-color: ${props => props.theme.off_white};
`;

export const SponsorBecomeASponsorContainer = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 14rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.blue};
`;

export const SponsorBecomeASponsorMain = styled.main`
  width: 90%;

  display: flex;
  flex-direction: column;
  gap: 6rem;

  color: ${props => props.theme.white};
`;