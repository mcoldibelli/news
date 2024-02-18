import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';

const favoriteFilter = (news: any) => {
  const idsOnLocalStorage = localStorage.getItem('favoriteNewsIds');

  const filtered = idsOnLocalStorage
    ? news.filter((item: any) => idsOnLocalStorage.includes(item.id))
    : [];
  return (filtered);
};

const useNews = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }

  useEffect(() => {
    const filterNews = () => {
      const { news, filterType, setFilteredNews } = context;

      const filterFunctions: { [key: string]: () => void } = {
        mostRecent: () => setFilteredNews(
          news.filter((item: any) => item.id !== news[0].id),
        ),
        release: () => setFilteredNews(
          news.filter((item: any) => item.tipo === 'Release' && item.id !== news[0].id),
        ),
        news: () => setFilteredNews(
          news.filter((item: any) => item.tipo === 'Notícia' && item.id !== news[0].id),
        ),
        favorites: () => {
          setFilteredNews(favoriteFilter(news));
        },
      };

      const filterFunction = filterFunctions[filterType];
      if (filterFunction) filterFunction();
    };
    filterNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filterType]);

  return context;
};

export default useNews;
