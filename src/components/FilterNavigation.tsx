import { IoMdSearch } from 'react-icons/io';
import { useEffect, useState } from 'react';
import Navigation from '../styles/filterNavigation';
import useFilters from '../hooks/useFilters';

function FilterNavigation() {
  const { setFilterType, searchText, setSearchText } = useFilters();
  const [currentFilter, setCurrentFilter] = useState('mostRecent');

  const handleFilterClick = (filterType: string) => {
    setFilterType(filterType);
    setCurrentFilter(filterType);
  };

  function getFilterClass(filterType: string) {
    return filterType === currentFilter ? 'activeFilter' : '';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType('search');
    setSearchText(e.target.value);
  };

  useEffect(() => {
    setFilterType('search');
  }, [setFilterType]);

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
            onChange={ handleChange }
          />

        </div>
      </form>

      <ul className="filter-buttons-container">
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
      </ul>
    </Navigation>
  );
}

export default FilterNavigation;
