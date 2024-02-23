import FilterNavigation from '../components/FilterNavigation';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className="bg-white mx-auto max-w-7xl">
      <Header />
      <div className="container px-2">
        <Search />
        <FilterNavigation />
      </div>
      <NewsGrid />
      <Pagination />
    </div>
  );
}
