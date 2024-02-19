import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import { NewsType } from '../utils/types';

const favoriteFilter = (news: NewsType[]) => {
  const idsOnLocalStorage = localStorage.getItem('favoriteNewsIds');

  const filtered = idsOnLocalStorage
    ? news.filter((item) => idsOnLocalStorage.includes(String(item.id)))
    : [];
  return (filtered);
};

const useFetchNews = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }

  // Run the filter function when the filterType changes
  useEffect(() => {
    const filterNews = () => {
      const { news, filterType, setFilteredNews } = context;

      const filterFunctions: { [key: string]: () => void } = {
        mostRecent: () => setFilteredNews(news.filter(
          (item: NewsType) => item.id !== news[0].id,
        )),
        release: () => setFilteredNews(news.filter(
          (item: NewsType) => item.type === 'Release' && item.id !== news[0].id,
        )),
        news: () => setFilteredNews(news.filter(
          (item: NewsType) => item.type === 'Notícia' && item.id !== news[0].id,
        )),
        favorites: () => {
          setFilteredNews(favoriteFilter(news));
        },
      };

      const filterFunction = filterFunctions[filterType];
      if (filterFunction) {
        filterFunction();
      }
    };

    filterNews();
    context.setCurrentPage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.filterType]);

  return context;
};

export default useFetchNews;
