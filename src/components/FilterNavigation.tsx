/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import useFilters from '../hooks/useFilters';

function FilterNavigation() {
  const { setFilterType } = useFilters();
  const [currentFilter, setCurrentFilter] = useState('mostRecent');

  const handleFilterClick = (filterType: string) => {
    setFilterType(filterType);
    setCurrentFilter(filterType);
  };

  useEffect(() => {
    setFilterType('search');
  }, [setFilterType]);

  return (

    <div className="container gap-4 my-2 px-2 sm:flex-row flex-col">
      <div className="relative inline-block text-left w-full sm:w-auto">
        <div className="group">
          <button
            type="button"
            className="
            inline-flex justify-center items-center w-full
            px-4 py-2 text-sm font-medium text-white
            bg-gray-800 hover:bg-gray-700 focus:outline-none
            focus:bg-gray-700 rounded-md"
          >
            Abrir filtros
            <svg
              className="w-4 h-4 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12l-5-5h10l-5 5z"
              />
            </svg>
          </button>

          {/* MENU */}
          <div
            className="
            absolute left-0 w-full mt-1 origin-top-left bg-white divide-y
            divide-gray-100 rounded-md shadow-lg opacity-0 invisible
            group-hover:opacity-100 group-hover:visible transition duration-100 z-10"
          >
            <div className="py-1">
              <button
                onClick={ () => handleFilterClick('mostRecent') }
                className="block px-4 py-2 text-sm text-left w-full
                 text-gray-700 hover:bg-gray-100"
              >
                Mais recentes
              </button>
              <button
                onClick={ () => handleFilterClick('news') }
                className="block px-4 py-2 text-sm text-left w-full
                 text-gray-700 hover:bg-gray-100"
              >
                Notícias
              </button>
              <button
                onClick={ () => handleFilterClick('release') }
                className="block px-4 py-2 text-sm text-left w-full
                 text-gray-700 hover:bg-gray-100"
              >
                Release
              </button>
              <button
                onClick={ () => handleFilterClick('favorites') }
                className="block px-4 py-2 text-sm text-left w-full
                 text-gray-700 hover:bg-gray-100"
              >
                Favoritas
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FilterNavigation;
