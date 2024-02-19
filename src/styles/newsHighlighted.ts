import { styled } from 'styled-components';
import { theme } from './theme';

const HighlightedNews = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  margin-top: 90px;
  background-color: ${theme.colors.primaryBackground};

  .favorite-button {
    display: flex;
    font-size: 1.6rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: ${theme.colors.primaryBackground};
  }

  // highlighted news container
  .highlighted-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    h2 {
      font-size: 2.4rem;
    }
  }

  .highlighted-top-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 1rem 0 1rem;
    font-size: 1.8rem;

    p {
      color: ${theme.colors.highlightedText};
      font-weight: 600;
    }
  }
  
  // Intro
  p {
    font-size: 1.2rem;
    padding-top: 0.5rem;
  }
 
  .highlighted-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // cover image
  img {
    object-fit: cover;
    width: 90%;
    border-radius: ${theme.colors.borderRadius};
    box-shadow: ${theme.colors.boxShadow};
  }
`;

export default HighlightedNews;
