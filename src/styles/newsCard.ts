import { styled } from 'styled-components';
import { theme } from './theme';

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid ;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2.2rem;
  }

  .highlighted-bottom-row {
    margin-top: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${theme.colors.tertiaryBackground};
    color: ${theme.colors.primaryBackground};
    cursor: pointer;
  }

`;

export default NewsCard;
