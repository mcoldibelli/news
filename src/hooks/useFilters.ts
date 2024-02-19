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
          setFilteredNews(news.filter(
            (item: NewsType) => favoriteNewsIds.includes(item.id),
          ));
        },
        search: () => {
          const lowerCaseSearch = searchText.toLowerCase();
          setFilteredNews(news.filter(
            (item: NewsType) => {
              const lowerCaseTitle = item.title.toLowerCase();
              const lowerCaseContent = item.summary.toLowerCase();

              return lowerCaseTitle.includes(lowerCaseSearch)
              || lowerCaseContent.includes(lowerCaseSearch);
            },
          ));
        },
      };

      const filterFunction = filterFunctions[filterType];
      if (filterFunction) {
        filterFunction();
      }
    };
    applyFilters();
  }, [searchText, filterType]);

  return { filteredNews, setFilteredNews, setFilterType, searchText, setSearchText };
};

export default useFilters;
