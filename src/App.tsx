import { useEffect } from 'react';
import useNews from './hooks/useNews';
import Home from './pages/Home';
import { GlobalStyles } from './styles/global';

function App() {
  const { fetchNews, news, isLoading } = useNews();

  useEffect(() => {
    if (isLoading) {
      fetchNews();
    }
  }, [isLoading]);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <p>Loading news...</p> : <Home />}
    </>
  );
}

export default App;
