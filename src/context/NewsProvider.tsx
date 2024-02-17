import { useState } from 'react';
import fetchApi from '../service/newsApi';
import NewsContext from './NewsContext';
import { NewsContextType } from '../utils/types';

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [newsData, setNewsData] = useState([]);
  const [favoriteNewsIds, setFavoriteNewsIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchApi();
      setNewsData(data);
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
    favoriteNewsIds,
    setFavoriteNewsIds,
  };

  return (
    <NewsContext.Provider value={ ContextValue }>
      {children}
    </NewsContext.Provider>
  );
}
