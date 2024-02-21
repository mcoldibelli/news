import { useContext, useEffect, useState } from 'react';
import NewsContext from '../context/NewsContext';
import fetchApi from '../service/newsApi';

const useFetchNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchState, setFetchState } = useContext(NewsContext);

  useEffect(() => {
    const fetchNewsData = async () => {
      setFetchState({ ...fetchState, status: 'loading' });

      try {
        const newsData = await fetchApi(currentPage);
        setFetchState({ ...fetchState, status: 'success', data: newsData });
      } catch (error) {
        setFetchState({ ...fetchState, status: 'error', error });
      }
    };
    fetchNewsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { currentPage, setCurrentPage };
};

export default useFetchNews;
