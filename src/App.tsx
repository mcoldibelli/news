import { NewsProvider } from './context/NewsProvider';
import Home from './pages/Home';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <NewsProvider>
      <GlobalStyles />
      <Home />
    </NewsProvider>
  );
}

export default App;
