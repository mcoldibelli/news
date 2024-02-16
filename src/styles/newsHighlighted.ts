import { styled } from 'styled-components';
import { theme } from './theme';

const HighlightedNews = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${theme.colors.primaryBackground};
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  div {
    background-color: ${theme.colors.secondaryBackground};
    border: ${theme.colors.primaryBackground};
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default HighlightedNews;
