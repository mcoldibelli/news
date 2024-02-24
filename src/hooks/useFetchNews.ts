import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import { fetchNewsPage } from '../service/newsApi';

const useFetchNews = () => {
  const { fetchState, setFetchState, searchText } = useContext(NewsContext);

  useEffect(() => {
    const fetchNewsData = async () => {
      setFetchState({ ...fetchState, status: 'loading' });

      try {
        const newsData = await fetchNewsPage(
          fetchState.pagination.page,
          searchText,
        );

        setFetchState(
          {
            ...fetchState,
            status: 'success',
            items: newsData.items,
            pagination: {
              count: newsData.count,
              nextPage: newsData.nextPage,
              page: newsData.page,
              previousPage: newsData.previousPage,
              showingFrom: newsData.showingFrom,
              showingTo: newsData.showingTo,
              totalPages: newsData.totalPages,
            },
          },
        );
      } catch (error) {
        setFetchState({ ...fetchState, status: 'error', error });
      }
    };
    fetchNewsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchState.pagination.page, searchText]);

  return { fetchState };
};

export default useFetchNews;
