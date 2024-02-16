import { styled } from 'styled-components';
import { theme } from './theme';

const HighlightedNews = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${theme.colors.primaryBackground};
  margin-top: 90px;
  
  .favorite-button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${theme.colors.primaryBackground};
    border-radius: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .highlighted-top-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 1rem 0 1rem;
    font-size: 1.8rem;

    p {
      color: rgb(200, 0, 0);
      font-weight: 600;
    }
  }
  
  div {
    border: none;
    height: auto;
  }
  
  p {
    font-size: 1.2rem;
    padding-top: 1rem;
  }
 
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    object-fit: cover;
    box-shadow: 0px 20px 20px -10px rgba(0,0,0,0.2);
  }


`;

export default HighlightedNews;
