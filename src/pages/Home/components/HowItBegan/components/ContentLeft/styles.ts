import styled from "styled-components";

export const ContentLeftContainer = styled.div`
  width: 100%;
  max-width: 44.375rem;
  height: 31rem;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  background-image: url('https://images.pexels.com/photos/6878173/pexels-photo-6878173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentLeftMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const Videos = styled.div`
  width: 100%;
  max-width: 19.875rem;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-bottom: 3.75rem;

  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
`;