import FilterNavigation from '../components/FilterNavigation';
import Header from '../components/Header';
import HighlightedNews from '../components/HighlightedNews';
import NewsGrid from '../components/NewsGrid';
import Pagination from '../components/Pagination';

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-screen-xl bg-white mx-auto">
        <HighlightedNews />
        <div className="flex flex-col md:flex-row">
          <hr className="w-full md:w-1/4 my-4" />
          <FilterNavigation />
        </div>
        <NewsGrid />
        <Pagination />
      </div>
    </>
  );
}

export default Home;
