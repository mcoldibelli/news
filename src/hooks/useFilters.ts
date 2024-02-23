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

      const news = fetchState.data;
      let filteredData = news;

      if (filterType === 'mostRecent') {
        filteredData = news.sort((a: NewsType, b: NewsType) => {
          const dateA = new Date(a.publishedAt).getTime();
          const dateB = new Date(b.publishedAt).getTime();
          return dateB - dateA;
        });
      }

      if (filterType === 'release') {
        filteredData = news.filter(
          (item: NewsType) => item.type === 'Release',
        );
      }

      if (filterType === 'news') {
        filteredData = news.filter(
          (item: NewsType) => item.type === 'Notícia',
        );
      }

      if (filterType === 'favorites') {
        filteredData = news.filter(
          (item: NewsType) => favoriteNewsIds.includes(item.id),
        );
      }
      if (searchText) {
        const lowerCaseSearch = searchText.toLowerCase();

        filteredData = filteredData.filter(
          (item: NewsType) => {
            const lowerCaseTitle = item.title.toLowerCase();
            const lowerCaseContent = item.summary.toLowerCase();

            return lowerCaseTitle.includes(lowerCaseSearch)
              || lowerCaseContent.includes(lowerCaseSearch);
          },
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
