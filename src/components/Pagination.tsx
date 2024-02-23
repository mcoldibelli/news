import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

/* eslint-disable react/jsx-max-depth */

export default function Pagination() {
  const { fetchState, setFetchState } = useContext(NewsContext);
  const {
    page, count, nextPage, showingFrom, showingTo,
  } = fetchState.pagination;

  const handlePageChange = (newPage: number) => {
    newPage = Math.max(1, newPage); // prevents user from going to page 0

    setFetchState({
      ...fetchState,
      pagination: {
        ...fetchState.pagination,
        page: newPage },
    });
  };

  return (
    <div
      className="
    flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={ () => handlePageChange(page - 1) }
          className="relative inline-flex items-center rounded-md
          border border-gray-300 bg-white px-4 py-2 text-sm
          font-medium text-gray-700 hover:bg-gray-50"
        >
          Anterior
        </button>
        <button
          onClick={ () => handlePageChange(page + 1) }
          className="relative ml-3 inline-flex items-center
          rounded-md border border-gray-300 bg-white px-4 py-2
          text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Próximo
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando
            {' '}
            <span className="font-medium">{showingFrom}</span>
            {' '}
            ao
            {' '}
            <span className="font-medium">{showingTo}</span>
            {' '}
            de
            {' '}
            <span className="font-medium">{count}</span>
            {' '}
            resultados
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={ () => handlePageChange(page - 1) }
              className="relative inline-flex items-center
              rounded-l-md px-2 py-2 text-gray-400 ring-1
              ring-inset ring-gray-300 hover:bg-gray-50
              focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">
                Anterior
              </span>
              <span>{'<'}</span>
            </button>
            <button
              onClick={ () => handlePageChange(page) }
              aria-current="page"
              className="relative z-10 inline-flex items-center
               bg-gray-800 px-4 py-2 text-sm font-semibold
               text-white focus:z-20
               focus-visible:outline
               focus-visible:outline-2 focus-visible:outline-offset-2
               focus-visible: outline-gray-500"
            >
              {page}
            </button>
            <button
              onClick={ () => handlePageChange(page + 1) }
              className="relative inline-flex items-center px-4
               py-2 text-sm font-semibold text-gray-900 ring-1
               ring-inset ring-gray-300 hover:bg-gray-50
               focus:z-20 focus:outline-offset-0"
            >
              {nextPage}
            </button>
            <button
              onClick={ () => handlePageChange(page + 2) }
              className="relative hidden items-center px-4 py-2
              text-sm font-semibold text-gray-900 ring-1
              ring-inset ring-gray-300 hover:bg-gray-50
              focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              {page + 2}
            </button>
            <span
              className="relative inline-flex items-center
            px-4 py-2 text-sm font-semibold text-gray-700
            ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
            >
              ...
            </span>
            <button
              onClick={ () => handlePageChange(page + 7) }
              className="relative hidden items-center px-4 py-2
              text-sm font-semibold text-gray-900 ring-1
              ring-inset ring-gray-300 hover:bg-gray-50
              focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              {page + 7}
            </button>
            <button
              onClick={ () => handlePageChange(page + 8) }
              className="relative inline-flex items-center px-4
              py-2 text-sm font-semibold text-gray-900 ring-1
              ring-inset ring-gray-300 hover:bg-gray-50
              focus:z-20 focus:outline-offset-0"
            >
              {page + 8}
            </button>
            <button
              onClick={ () => handlePageChange(page + 9) }
              className="relative inline-flex items-center px-4
              py-2 text-sm font-semibold text-gray-900 ring-1
              ring-inset ring-gray-300 hover:bg-gray-50
              focus:z-20 focus:outline-offset-0"
            >
              {page + 9}
            </button>
            <button
              onClick={ () => handlePageChange(page + 1) }
              className="relative inline-flex items-center
              rounded-r-md px-2 py-2 text-gray-400 ring-1
              ring-inset ring-gray-300 hover:bg-gray-50
              focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Próximo</span>
              <span>{'>'}</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
