import styled, { css } from "styled-components";

export const ApplePodcastContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

export const GooglePodcastContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

export const SoundCloudContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

export const SpotifyContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

export const MaskGroupContainer = styled.div`
  width: 100%;
`;

// Footer

export const ApplePodcastFooterContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const GooglePodcastFooterContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SoundCloudFooterContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SpotifyFooterContainer = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;

  svg {
    width: 100%;
  }
`;

interface ImageTeamMembersProps {
  variant?: 'JeromeBell' | 'RobertMill' | 'RehabWalls' | 'SteveWinston';
}

export const ImageTeamMembersContainer = styled.div<ImageTeamMembersProps>`
  width: 100%;
  max-width: 19.25rem;
  height: 19.25rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${props => props.variant === 'JeromeBell' && css`
    background-image: url('https://images.pexels.com/photos/10679231/pexels-photo-10679231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'RobertMill' && css`
    background-image: url('https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

    ${props => props.variant === 'RehabWalls' && css`
    background-image: url('https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'SteveWinston' && css`
    background-image: url('https://images.pexels.com/photos/4221848/pexels-photo-4221848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}
`;


// Logo Footer

export const LogoFooterContainer = styled.div`
  width: 200px;
  height: 44px;

  background-color: orange;

  svg {
    width: 100%;
    height: 100%;
  }
`;