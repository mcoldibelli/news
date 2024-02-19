import { Link } from 'react-router-dom';
import { HeaderWrapper } from '../styles/header';
import HeaderDate from './HeaderDate';

function Header() {
  return (
    <HeaderWrapper>
      <>
        <Link to="/">
          <img src="src/assets/ibge-logo.svg" alt="IBGE Logo" />
        </Link>
        <h1>IBGE News</h1>
      </>
      <HeaderDate />
    </HeaderWrapper>
  );
}

export default Header;
