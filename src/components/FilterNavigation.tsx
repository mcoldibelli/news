import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import useNews from '../hooks/useFetchNews';
import Navigation from '../styles/filterNavigation';

function FilterNavigation() {
  const { setFilterType, searchText, setSearchText } = useNews();
  const [currentFilter, setCurrentFilter] = useState('mostRecent');

  const handleFilterClick = (filterType: string) => {
    setFilterType(filterType);
    setCurrentFilter(filterType);
  };

  function getFilterClass(filterType: string) {
    return filterType === currentFilter ? 'activeFilter' : '';
  }

  return (
    <Navigation>
      <form action="">
        <div>
          <button aria-label="Search" className="search-icon" tabIndex={ 0 }>
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
      </form>

      <nav className="filter-buttons-container">
        <li>
          <button
            tabIndex={ 0 }
            className={ getFilterClass('mostRecent') }
            onClick={ () => handleFilterClick('mostRecent') }
          >
            Mais recentes
          </button>
        </li>
        <li>
          <button
            className={ getFilterClass('release') }
            onClick={ () => handleFilterClick('release') }
          >
            Release
          </button>
        </li>
        <li>
          <button
            className={ getFilterClass('news') }
            onClick={ () => handleFilterClick('news') }
          >
            Notícia
          </button>
        </li>
        <li>
          <button
            className={ getFilterClass('favorites') }
            onClick={ () => handleFilterClick('favorites') }
          >
            Favoritas
          </button>
        </li>
      </nav>
    </Navigation>
  );
}

export default FilterNavigation;
