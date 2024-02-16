import { styled } from 'styled-components';
import { theme } from './theme';

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  border-top: 2px solid ${theme.colors.secondaryBackground};
  border-bottom: 2px solid ${theme.colors.secondaryBackground};

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }

  li {
    color: ${theme.colors.primaryText};
    font-size: 1.1rem;
    font-weight: 600;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  li:hover {
    cursor: pointer;
    color: ${theme.colors.secondaryText};
    text-decoration: underline;
}
`;

export default Navigation;
