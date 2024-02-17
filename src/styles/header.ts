import styled from 'styled-components';
import { theme } from './theme';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 2.5rem;
  max-height: 4.5rem;

  border-bottom: 1px solid ${theme.colors.secondaryBackground};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.primaryBackground};

  // IBGE Logo
  img {
    width: 10rem;
    flex-shrink: 0;
    max-width: 100%;
    height: auto;
  }
  
  // Title on the header
  h1 {
    font-size: clamp(3.2rem, 3vw + 1rem, 2.5rem);
    flex-grow: 1;
    text-align: center;
    color: ${theme.colors.secondaryText};
  }

  // Clock
  span {
    font-size: 1.2rem;
    color: ${theme.colors.secondaryText};
  }
`;
