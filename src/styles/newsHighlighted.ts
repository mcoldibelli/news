import { styled } from 'styled-components';
import { theme } from './theme';

const HighlightedNews = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.5rem;
  padding: 2rem;
  background-color: ${theme.colors.primaryBackground};
  margin-top: 90px;
  
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
  }


`;

export default HighlightedNews;
