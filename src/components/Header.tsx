import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

function Header() {
  const { fetchState, setFetchState, setFilterType } = useContext(NewsContext);

  const handleRefresh = () => {
    setFilterType('mostRecent');
    setFetchState({
      ...fetchState,
      pagination: {
        ...fetchState.pagination,
        page: 1 },
    });
  };

  return (
    <nav className="bg-gray-100 border-gray-200 shadow-lg">
      <div
        className="max-w-screen-xl flex flex-wrap items-center
          justify-between mx-auto p-4"
      >
        <h1
          className="text-4xl self-center font-semibold
            whitespace-nowrap"
        >
          <button
            onClick={ handleRefresh }
          >
            IBGE News
          </button>
        </h1>
      </div>
    </nav>
  );
}

export default Header;
