import { IoMdSearch } from 'react-icons/io';
import { useEffect, useState } from 'react';
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
    <div className="container mx-auto p-4 flex flex-col gap-4">
      <form
        action="/"
        method="get"
        aria-label="Search"
        className="search-form flex items-center gap-2 bg-gray-100 p-2 rounded-md"
      >
        <button
          aria-label="Search"
          tabIndex={ 0 }
          className="search-icon p-2 bg-gray-200 rounded-md"
        >
          <IoMdSearch />
        </button>
        <input
          placeholder="Buscar"
          type="text"
          value={ searchText }
          onChange={ handleChange }
          className="search-input flex-grow bg-transparent
          focus:outline-none placeholder:text-gray-500"
        />
      </form>

      <ul
        className="filter-buttons-container grid grid-cols-4 gap-2 text-center"
      >
        <li>
          <button
            tabIndex={ 0 }
            onClick={ () => handleFilterClick('mostRecent') }
            className={ `
            ${getFilterClass('mostRecent')} 
            bg-gray-200 text-gray-700 py-2 rounded-md
            hover:bg-gray-300 
            active:bg-blue-500 active:text-white 
          ` }
          >
            Mais recentes
          </button>
        </li>
        <li>
          <button
            onClick={ () => handleFilterClick('release') }
            className={ `
            ${getFilterClass('release')} 
            bg-gray-200 text-gray-700 py-2 rounded-md
            hover:bg-gray-300 
            active:bg-blue-500 active:text-white 
          ` }
          >
            Release
          </button>
        </li>
        <li>
          <button
            onClick={ () => handleFilterClick('news') }
            className={ `
            ${getFilterClass('news')} 
            bg-gray-200 text-gray-700 py-2 rounded-md
            hover:bg-gray-300 
            active:bg-blue-500 active:text-white 
          ` }
          >
            Notícia
          </button>
        </li>
        <li>
          <button
            onClick={ () => handleFilterClick('favorites') }
            className={ `
            ${getFilterClass('favorites')} 
            bg-gray-200 text-gray-700 py-2 rounded-md
            hover:bg-gray-300 
            active:bg-blue-500 active:text-white 
          ` }
          >
            Favoritas
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FilterNavigation;
