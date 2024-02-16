import FilterNavigation from '../components/FilterNavigation';
import Header from '../components/Header';
import NewsGrid from '../components/NewsGrid';
import NewsHighlighted from '../components/NewsHighlighted';

function Home() {
  return (
    <main>
      <Header />
      <NewsHighlighted />
      <FilterNavigation />
      <NewsGrid />
      <button>VEJA MAIS</button>
    </main>
  );
}

export default Home;
