import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import { NewsType } from '../utils/types';

const useFilters = () => {
  const {
    fetchState, filteredNews, filterType, searchText, favoriteNewsIds,
    setFilteredNews, setFilterType, setSearchText,
  } = useContext(NewsContext);

  useEffect(() => {
    const applyFilters = () => {
      if (fetchState.status !== 'success') return;

      const news = fetchState.items;
      let filteredData = news;

      if (filterType === 'mostRecent') {
        filteredData = news.sort((a: NewsType, b: NewsType) => {
          const dateA = new Date(a.data_publicacao).getTime();
          const dateB = new Date(b.data_publicacao).getTime();
          return dateB - dateA;
        });
      }

      if (filterType === 'release') {
        filteredData = news.filter(
          (item: NewsType) => item.tipo === 'Release',
        );
      }

      if (filterType === 'news') {
        filteredData = news.filter(
          (item: NewsType) => item.tipo === 'Notícia',
        );
      }

      if (filterType === 'favorites') {
        filteredData = news.filter(
          (item: NewsType) => favoriteNewsIds.includes(item.id),
        );
      }

      setFilteredNews(filteredData);
    };
    applyFilters();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, filterType, favoriteNewsIds]);

  return { filteredNews, setFilteredNews, setFilterType, searchText, setSearchText };
};

export default useFilters;
