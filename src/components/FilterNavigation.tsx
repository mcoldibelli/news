import useNews from '../hooks/useNews';
import Navigation from '../styles/filterNavigation';

function FilterNavigation() {
  const { setFilterType } = useNews();

  const handleFilterClick = (filterType: string) => {
    setFilterType(filterType);
    console.log(filterType);
  };

  return (
    <Navigation>
      <ul>
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
