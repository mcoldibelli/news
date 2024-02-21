import { useContext } from 'react';
import NewsContext from './context/NewsContext';
import useFetchNews from './hooks/useFetchNews';
import Home from './pages/Home';

function App() {
  useFetchNews();
  const { fetchState } = useContext(NewsContext);

  return (
    <>
      {fetchState.status === 'loading' && <p>Loading news...</p>}
      {fetchState.status === 'success' && <Home />}
      {fetchState.status === 'error' && (
        <p>
          Error loading news:
          {fetchState.error.message}
        </p>
      )}
    </>
  );
}

export default App;
