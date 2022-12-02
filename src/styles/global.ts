import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 500 1rem Poppins, sans-serif;
  }
`;

// Heading

interface HeadingProps {
  variant?: 'White' | 'Gray' | 'Purple'
}

export const HeadingH1 = styled.h1`
  font: 700 2.625rem Inter, sans-serif;
  line-height: 110%;

  @media (max-width: 48rem) {
    font: 700 2rem Inter, sans-serif;
  }
`;

export const HeadingH2 = styled.h2`
  font: 700 1.75rem Inter, sans-serif;
  line-height: 120%;

  @media (max-width: 48rem) {
    font: 700 1.375rem Poppins, sans-serif;
  }
`;

export const HeadingH3 = styled.h3`
  font: 600 1.375rem Poppins, sans-serif;
  line-height: 125%;

  @media (max-width: 48rem) {
    font: 600 1.125rem Poppins, sans-serif;
  }
`;

export const HeadingH4 = styled.h4<HeadingProps>`
  font: 500 1.125rem Poppins, sans-serif;
  line-height: 140%;

  ${props => props.variant === 'Purple' && css`
    color: ${props => props.theme.purple};
  `}

  ${props => props.variant === 'Gray' && css`
    color: ${props => props.theme.gray};
  `}
`;

export const HeadingH5 = styled.h5<HeadingProps>`
  font: 500 .975rem Poppins, sans-serif;
  line-height: 150%;

  color: ${props => props.theme.black};

  ${props => props.variant === 'White' && css`
    color: ${props => props.theme.white};
  `}

  ${props => props.variant === 'Gray' && css`
    color: ${props => props.theme.gray};
  `}
`;

export const HeadingH6 = styled.h6`
  font: 500 .75rem Poppins, sans-serif;
  line-height: 150%;
`;

// Body

interface BodyProps {
  variant?: 'SemiBold'
}

export const Body = styled.p<BodyProps>`
  font: 400 .875rem Inter, sans-serif;
  line-height: 150%;

  display: flex;
  flex-direction: column;

  gap: .75rem;
  
  ${props => props.variant === 'SemiBold' && css`
    font-weight: 600;
  `}
`;

interface CaptionProps {
  variant?: 'Purple'
}

export const Caption = styled.p<CaptionProps>`
  font: .875rem 600 Inter, sans-serif;
  line-height: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;

  margin-bottom: 1rem;

  color: ${props => props.theme.off_white};

  ${props => props.variant === 'Purple' && css`
    color: ${props => props.theme.purple};
  `}
`;

// Components

interface ButtonProps {
  variant?: 'Primary_Button' | 'Secondary_Button' | 'Listen' | 'Listen_White' | 'Read_Now' | 'Input_Subscribe'
}

export const Button = styled.button<ButtonProps>`
  padding: 0 2rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  cursor: pointer;

  font: 500 1rem Inter, sans-serif;

  span {
    color: ${props => props.theme.green};
  }

  ${props => props.variant === 'Primary_Button' && css`
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};

    gap: .5rem;
    line-height: 0;

    &:hover {
      background-color: #3E2DB2;
      transition: 0.5s;
    }
  `}

  ${props => props.variant === 'Secondary_Button' && css`
    border: 2px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    background-color: transparent;

    &:hover {
      border: 2px solid ${props => props.theme.green};
      color: ${props => props.theme.green};
      transition: 0.5s;
    }
  `}

  ${props => props.variant === 'Listen' && css`
    padding: 0;
    
    display: flex;
    justify-content: flex-start;

    gap: .5rem;
    
    background-color: transparent;
    color: ${props => props.theme.blue};

    &:hover {
      color: #3E2DB2;
      transition: 0.5s;
    }
  `}

  ${props => props.variant === 'Listen_White' && css`
    padding: 0;
    
    display: flex;
    justify-content: flex-start;

    gap: .5rem;
    
    background-color: transparent;
    color: ${props => props.theme.white};

    &:hover {
      color: ${props => props.theme.gray};
      transition: 0.5s;
    }
  `}

  ${props => props.variant === 'Read_Now' && css`
    padding: 0;
  
    gap: .5rem;
      
    background-color: transparent;
    color: ${props => props.theme.blue};

    &:hover {
      color: #3E2DB2;
      transition: 0.5s;s
    }
  `}

  ${props => props.variant === 'Input_Subscribe' && css`
    gap: .5rem;
      
    background-color: ${props => props.theme.green};
    color: ${props => props.theme.black};
  `}
`;

// Categories Button

interface CategoriesButtonProps {
  variant?: 'Active' | 'Disable'
}

export const CategoriesButtons = styled.button<CategoriesButtonProps>`
  padding: 0 1.75rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 99px;
  border: 0;
  cursor: pointer;

  font: 700 .875rem Inter, sans-serif;

  ${props => props.variant === 'Active' && css`
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};

    &:hover {
      background-color: #3E2DB2;
      transition: 0.5s;
    }
  `}

  ${props => props.variant === 'Disable' && css`
    border: 2px solid ${props => props.theme.gray};
    color: ${props => props.theme.gray};
    background-color: transparent;
  `}
`;

export const SocialContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 4fr);
  justify-items: flex-start;

  gap: 1.5rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(3, 3fr);
  }
  
  @media (max-width: 48rem) {
    grid-template-columns: repeat(2, 2fr);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 30.375rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: 48rem) {
    align-items: center;
    text-align: center;
  }
`;

export const LinkText = styled.h5`
  font: 500 1rem Inter, sans-serif;
  line-height: 150%;

  color: ${props => props.theme.black};
  
  padding: .2rem;
`;