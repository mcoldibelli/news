import { styled } from 'styled-components';

const NewsGridContainer = styled.section`

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}

li {
  list-style: none;
  padding: 1rem;
  border-radius: 0.5rem;
  color: black;
  }
`;

export default NewsGridContainer;
