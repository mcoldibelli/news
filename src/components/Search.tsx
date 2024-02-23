import useFilters from '../hooks/useFilters';

function Search() {
  const { setFilterType, setSearchText } = useFilters();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType('search');
    setSearchText(e.target.value);
  };

  return (
    <form className="max-w-md mx-auto px-2 mt-4 md:flex-grow">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Pesquisar
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          onChange={ handleChange }
          className="block w-full p-4 ps-10
         text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50
          focus:ring-blue-500 focus:border-blue-500 h-10"
          placeholder="Buscar"
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700
           hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
           font-medium rounded-lg text-sm px-4 py-2"
        >
          Buscar
        </button>
      </div>
    </form>

  );
}

export default Search;