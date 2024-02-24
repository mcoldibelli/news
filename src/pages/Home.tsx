import FilterNavigation from '../components/FilterNavigation';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

function Home() {
  return (
    <div className="flex flex-col max-w-screen-xl bg-white mx-auto">
      <Header />
      <div
        className="flex flex-col md:flex-row"
      >
        <Search />
        <FilterNavigation />
      </div>
      <NewsGrid />
      <Pagination />
    </div>
  );
}

export default Home;
