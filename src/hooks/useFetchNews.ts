import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import fetchApi from '../service/newsApi';

const useFetchNews = (page = 1, pageSize = 9) => {
  const { fetchState, setFetchState } = useContext(NewsContext);

  useEffect(() => {
    const fetchNewsData = async () => {
      setFetchState({ ...fetchState, status: 'loading' });

      try {
        const newsData = await fetchApi(page, pageSize);
        setFetchState({ ...fetchState, status: 'success', data: newsData });
      } catch (error) {
        setFetchState({ ...fetchState, status: 'error', error });
      }
    };
    fetchNewsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { fetchState };
};

export default useFetchNews;
