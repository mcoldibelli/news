import { HeaderWrapper } from '../styles/header';
import HeaderDate from './HeaderDate';

function Header() {
  return (
    <HeaderWrapper>
      <>
        <img src="src/assets/ibge-logo.svg" alt="IBGE Logo" />
        <h1>IBGE News</h1>
      </>
      <HeaderDate />
    </HeaderWrapper>
  );
}

export default Header;
