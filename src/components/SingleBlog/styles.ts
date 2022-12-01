import styled from "styled-components";

export const SingleBlogContainer = styled.div`
  width: 100%;
`;

export const SingleBlogImg = styled.div`
  width: 90%;
  max-width: 80rem;
  height: 36.375rem;

  margin: 0 auto;
  margin-top: 4.75rem;

  background-image: url('https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SingleBlogContent = styled.div`
  width: 90%;
  max-width: 48rem;

  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;