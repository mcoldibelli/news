import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import fetchApi from '../service/newsApi';

const useFetchNews = () => {
  const { fetchState, setFetchState } = useContext(NewsContext);

  useEffect(() => {
    const fetchNewsData = async () => {
      setFetchState({ ...fetchState, status: 'loading' });

      try {
        const newsData = await fetchApi(fetchState.pagination.page);

        const pagination = {
          count: newsData.count,
          page: newsData.page,
          totalPages: newsData.totalPages,
          nextPage: newsData.nextPage,
          previousPage: newsData.previousPage,
          showingFrom: newsData.showingFrom,
          showingTo: newsData.showingTo,
        };

        setFetchState(
          { ...fetchState, status: 'success', data: newsData.items, pagination },
        );
      } catch (error) {
        setFetchState({ ...fetchState, status: 'error', error });
      }
    };
    fetchNewsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchState.pagination.page]);

  return { fetchState };
};

export default useFetchNews;
