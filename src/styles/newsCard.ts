import { styled } from 'styled-components';
import { theme } from './theme';

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 1.7rem);
    line-height: 1;
    max-height: 8em;
  }

  .highlighted-bottom-row {
    margin-top: 1rem;
  }

  .read-more-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${theme.colors.tertiaryBackground};
    color: ${theme.colors.primaryBackground};
    cursor: pointer;

    &:hover {
    background-color: ${theme.colors.primaryText};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export default NewsCard;
