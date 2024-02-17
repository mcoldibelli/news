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
    font-size: 2.2rem;
    line-height: 1;
    max-height: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
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
