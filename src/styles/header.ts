import styled from 'styled-components';
import { theme } from './theme';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-height: 60px;
  background-color: ${theme.colors.primaryBackground};
  box-shadow: ${theme.colors.boxShadow};

  img {
    width: 10rem;
    flex-shrink: 0;
    max-width: 100%;
    height: auto;
  }
  
  h1 {
    font-size: clamp(1.8rem, 3vw + 1rem, 2.5rem);
    flex-grow: 1;
    text-align: center;
    color: white;
  }

  @media (max-width: 768px) {
    img {
      width: 8rem;
    }

    h1 {
      font-size: 2rem;
    }
  }
`;
