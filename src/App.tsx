import { useEffect } from 'react';
import Home from './pages/Home';
import { GlobalStyles } from './styles/global';
import fetchApi from './service/newsApi';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = fetchApi();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
