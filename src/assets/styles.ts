import styled, { css } from "styled-components";

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

interface ImageTestimonialsCardProps {
  variant?: 'EveMadien' | 'AshBenfred' | 'RyanSmith';
}

export const ImageTestimonialsCardContainer = styled.div<ImageTestimonialsCardProps>`
  width: 5rem;
  height: 5rem;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 99px;

  ${props => props.variant === 'EveMadien' && css`
    background-image: url('https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'AshBenfred' && css`
    background-image: url('https://images.pexels.com/photos/13677413/pexels-photo-13677413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

    ${props => props.variant === 'RyanSmith' && css`
    background-image: url('https://images.pexels.com/photos/5273717/pexels-photo-5273717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
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

interface EpImageProps {
  variant?: 'Ep1' | 'Ep2' | 'Ep3'
}

export const EpImageContainer = styled.div<EpImageProps>`
  width: 100%;
  height: 16rem;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.variant === 'Ep1' && css`
    background-image: url('https://images.pexels.com/photos/3182823/pexels-photo-3182823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

  ${props => props.variant === 'Ep2' && css`
    background-image: url('https://images.pexels.com/photos/3183157/pexels-photo-3183157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}

    ${props => props.variant === 'Ep3' && css`
    background-image: url('https://images.pexels.com/photos/3182787/pexels-photo-3182787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  `}
`;