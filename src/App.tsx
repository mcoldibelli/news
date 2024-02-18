import useNews from './hooks/useNews';
import Home from './pages/Home';
import { GlobalStyles } from './styles/global';

function App() {
  const { isLoading } = useNews();

  return (
    <>
      <GlobalStyles />
      {isLoading ? <p>Loading news...</p> : <Home />}
    </>
  );
}

export default App;
