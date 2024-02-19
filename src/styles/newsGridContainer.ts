import { styled } from 'styled-components';
import { theme } from './theme';

const NewsGridContainer = styled.section`
padding: 0 1rem;

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0 2rem;
}

li {
  list-style: none;
  padding: 1rem;
  border-radius: 0.5rem;
  color: black;
  }

.load-more {
  position: relative;
  bottom: 0;
  display: block;
  width: 15%;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${theme.colors.secondaryText};
  color: white;
  font-size: 1rem;
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

export default NewsGridContainer;
