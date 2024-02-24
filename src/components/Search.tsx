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
      className="flex flex-row md:flex-row px-4 py-4 w-full gap-2"
    >
      <input
        type="search"
        id="default-search"
        className="p-4 ps-10 text-md w-full
           text-gray-900 border border-gray-300 rounded-lg bg-gray-50
          focus:ring-blue-500 focus:border-blue-500 h-10"
        placeholder="Buscar"
      />
      <button
        type="submit"
        className="
          px-4 py-2 text-sm font-medium text-white w-fit
          bg-gray-800 hover:bg-gray-700 focus:outline-none
          focus:bg-gray-700 rounded-md"
      >
        Buscar
      </button>
    </form>
  );
}

export default Search;
