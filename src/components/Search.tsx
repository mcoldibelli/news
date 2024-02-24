import useFilters from '../hooks/useFilters';

function Search() {
  const { setFilterType, setSearchText } = useFilters();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setFilterType('search');
    setSearchText(e.currentTarget.value);
  };

  return (
    <form
      onSubmit={ handleSubmit }
      className="max-w-md mx-auto px-2 mt-4 md:flex-grow"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Pesquisar
      </label>
      <div className="relative flex-row-reverse">
        <input
          type="search"
          id="default-search"
          className="w-auto p-4 ps-10
         text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50
          focus:ring-blue-500 focus:border-blue-500 h-10"
          placeholder="Buscar"
        />
        <button
          type="submit"
          className="justify-center items-center w-fit mx-2 h-10
          px-4 py-2 text-sm font-medium text-white
          bg-gray-800 hover:bg-gray-700 focus:outline-none
          focus:bg-gray-700 rounded-md"
        >
          Buscar
        </button>
      </div>
    </form>

  );
}

export default Search;
