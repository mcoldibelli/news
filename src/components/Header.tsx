import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import Search from './Search';

function Header() {
  const {
    fetchState,
    setFetchState, setFilterType, setSearchText,
  } = useContext(NewsContext);

  const handleRefresh = () => {
    setFilterType('mostRecent');
    setFetchState({
      ...fetchState,
      pagination: {
        ...fetchState.pagination,
        page: 1 },
    });
    setSearchText('');
  };

  return (
    <header className="bg-gray-300 border-gray-200">
      <nav
        className="
          flex flex-nowrap justify-between items-center mx-auto
            px-4 max-w-screen-xl"
      >
        <a
          href="/"
          className="flex items-center"
          onClick={ handleRefresh }
        >
          <span
            className="self-center text-4xl font-semibold whitespace-nowrap"
          >
            IBGE News
          </span>
        </a>
        <div className="flex md:items-center lg:order-2">
          <Search />
        </div>
      </nav>
    </header>
  );
}

export default Header;
