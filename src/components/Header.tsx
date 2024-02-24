import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

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
    <header className="bg-gray-100 border-gray-200 shadow-lg p-4">
      <h1
        className="text-4xl self-center font-semibold
            whitespace-nowrap"
      >
        <button
          className="text-gray-800"
          onClick={ handleRefresh }
        >
          IBGE News
        </button>
      </h1>
    </header>
  );
}

export default Header;
