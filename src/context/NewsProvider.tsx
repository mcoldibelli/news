import { useState } from 'react';
import fetchApi from '../service/newsApi';
import NewsContext from './NewsContext';
import { NewsContextType } from '../utils/types';

export function NewsProvider({ children }:any) {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const storedData = localStorage.getItem('newsRaw');
      if (storedData) {
        setNewsData(JSON.parse(storedData));
      } else {
        const data = await fetchApi();
        setNewsData(data);
        localStorage.setItem('newsRaw', JSON.stringify(data));
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const ContextValue: NewsContextType = {
    news: newsData,
    isLoading,
    error,
    fetchNews,
  };

  return (
    <NewsContext.Provider value={ ContextValue }>
      {children}
    </NewsContext.Provider>
  );
}
