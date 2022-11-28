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

export const AudioTrackImgContainer = styled.div`
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

interface ImgBlogsProps {
  variant?: 'ImgBlogs1' | 'ImgBlogs2' | 'ImgBlogs3' | 'ImgBlogs4' | 'ImgBlogs5' | 'ImgBlogs6';
}

export const ImgBlogs = styled.div<ImgBlogsProps>`
  width: 100%;
  max-width: 26rem;
  height: 16rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${props => props.variant === 'ImgBlogs1' && css`
    background-image: url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&');
  `}

  ${props => props.variant === 'ImgBlogs2' && css`
    background-image: url('https://images.pexels.com/photos/3182747/pexels-photo-3182747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

    ${props => props.variant === 'ImgBlogs3' && css`
    background-image: url('https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'ImgBlogs4' && css`
    background-image: url('https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'ImgBlogs5' && css`
    background-image: url('https://images.pexels.com/photos/3184585/pexels-photo-3184585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'ImgBlogs6' && css`
    background-image: url('https://images.pexels.com/photos/3182742/pexels-photo-3182742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}
`;