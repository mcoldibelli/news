import { styled } from 'styled-components';
import { theme } from './theme';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  border-top: 1px solid ${theme.colors.secondaryBackground};
  border-bottom: 1px solid ${theme.colors.secondaryBackground};
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${theme.colors.primaryText};
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1rem;
  }

  button:hover {
    cursor: pointer;
    color: ${theme.colors.secondaryText};
    text-decoration: underline;
}
`;

export default Navigation;
