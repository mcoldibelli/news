import { IoMdSearch } from 'react-icons/io';
import useNews from '../hooks/useFetchNews';
import Navigation from '../styles/filterNavigation';

function FilterNavigation() {
  const { setFilterType, searchText, setSearchText } = useNews();

  const handleFilterClick = (filterType: string) => {
    setFilterType(filterType);
  };

  return (
    <Navigation>
      <ul>
        <div>
          <button
            aria-label="Search"
            className="search-icon"
          >
            <IoMdSearch />
          </button>
          <input
            className="search-input"
            placeholder="Buscar"
            type="text"
            value={ searchText }
            onChange={ (e) => setSearchText(e.target.value) }
          />

        </div>

        <button
          onClick={ () => handleFilterClick('mostRecent') }
        >
          Mais recentes
        </button>
        <button
          onClick={ () => handleFilterClick('release') }
        >
          Release
        </button>
        <button
          onClick={ () => handleFilterClick('news') }
        >
          Notícia
        </button>
        <button
          onClick={ () => handleFilterClick('favorites') }
        >
          Favoritas
        </button>
      </ul>
    </Navigation>
  );
}

export default FilterNavigation;
