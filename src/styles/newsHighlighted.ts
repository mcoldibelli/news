import { styled } from 'styled-components';

const HighlightedNews = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #d3d3d3;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default HighlightedNews;
