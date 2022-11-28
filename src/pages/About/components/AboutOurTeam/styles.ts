import styled from "styled-components";
import AboutOurTeamLine from "../../../../assets/AboutOurTeamLine.svg";


export const AboutOurTeamContainer = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  margin-top: 8rem;

  background-image: url(${AboutOurTeamLine});
  background-position: center;
  background-size: auto;
  background-repeat: no-repeat;
`;

export const AboutOurTeamMain = styled.main`
  width: 90%;
  max-width: 64rem;
  height: 36rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 3.5rem;

  @media (max-width: 48rem) {
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const BottomContent = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;

  span {
    width: 100%;
    max-width: 31rem;
  }

  @media (max-width: 48rem) {
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const ImageAboutOurTeam = styled.div`
  width: 100%;
  height: 20rem;

  background-color: yellow;
  background-image: url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;