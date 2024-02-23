import { useState } from 'react';
import NewsContext from './NewsContext';
import { FetchStateType, NewsContextType, NewsType } from '../utils/types';

export function NewsProvider({ children }: { children: React.ReactNode }) {
  // News related states
  const [fetchState, setFetchState] = useState<FetchStateType>({
    items: [],
    pagination: {
      count: 1,
      page: 1,
      totalPages: 1,
      nextPage: 1,
      previousPage: 1,
      showingFrom: 1,
      showingTo: 1,
    },
    status: 'idle',
    error: null,
  });

  // Filter related states
  const [filteredNews, setFilteredNews] = useState<NewsType[]>([]);
  const [favoriteNewsIds, setFavoriteNewsIds] = useState<number[]>([]);
  const [filterType, setFilterType] = useState('mostRecent');
  const [searchText, setSearchText] = useState('');

  const ContextValue: NewsContextType = {
    fetchState,
    filterType,
    filteredNews,
    favoriteNewsIds,
    searchText,
    setFetchState,
    setFilterType,
    setSearchText,
    setFilteredNews,
    setFavoriteNewsIds,
  };

  return (
    <NewsContext.Provider value={ ContextValue }>
      {children}
    </NewsContext.Provider>
  );
}
