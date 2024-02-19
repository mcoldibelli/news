import FilterNavigation from '../components/FilterNavigation';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import NewsHighlighted from '../components/NewsHighlighted';

function Home() {
  return (
    <>
      <Header />
      <FilterNavigation />
      <main>
        <NewsHighlighted />
        <NewsGrid />
      </main>
    </>
  );
}

export default Home;
