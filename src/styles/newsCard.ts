import { styled } from 'styled-components';

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #d3d3d3;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    margin: 1rem 0;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: rgb(9, 21, 50);
    color: #fff;
    cursor: pointer;
  }

`;

export default NewsCard;
