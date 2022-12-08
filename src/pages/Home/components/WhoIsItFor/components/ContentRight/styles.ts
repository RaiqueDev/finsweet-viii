import styled from 'styled-components';

export const ContentRightImage = styled.div`
  width: 100%;
  max-width: 44.375rem;
  height: 31rem;

  background-color: ${props => props.theme.blue};

  display: flex;
  align-items: center;

  background-image: url('https://images.pexels.com/photos/5083624/pexels-photo-5083624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;