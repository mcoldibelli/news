import { styled } from 'styled-components';
import { theme } from './theme';

const Navigation = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 10;
  background-color: ${theme.colors.primaryBackground};
  border-radius: 0 0 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 55%;
  border-top: 1px solid ${theme.colors.secondaryBackground};
  border-bottom: 1px solid ${theme.colors.secondaryBackground};
  margin: 0 auto;

  .search-input {
    background-color: ${theme.colors.secondaryBackground};
    color: ${theme.colors.primaryText};
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.3); 
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 0.5rem;
    width: 100px;
    margin-right: 1rem;

    transition: width 0.3s ease-in-out;

    &:focus {
      width: 250px;
      box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.5); 
    }
  }
  
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    padding: 0;
  }

  .search-icon {
    display: flex;
    font-size: 1.6rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: ${theme.colors.primaryBackground};
    
  }

.filter-buttons-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
  padding: 0;

  button {
    border: none;
    background-color: transparent;
    color: ${theme.colors.primaryText};
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
  }
  
  button:hover {
    cursor: pointer;
    color: ${theme.colors.secondaryText};
    border-bottom: 3px solid ${theme.colors.quinaryBackground};
  }

  button.activeFilter {
    color: ${theme.colors.quinaryBackground};
    font-weight: bold;
  }   
}`;

export default Navigation;
