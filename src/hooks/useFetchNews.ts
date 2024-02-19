import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';
import fetchApi from '../service/newsApi';

const useFetchNews = () => {
  const { fetchState, setFetchState } = useContext(NewsContext);

  useEffect(() => {
    const fetchNewsData = async () => {
      setFetchState({ ...fetchState, status: 'loading' });

      try {
        const newsData = await fetchApi();
        setFetchState({ ...fetchState, status: 'success', data: newsData });
      } catch (error) {
        setFetchState({ ...fetchState, status: 'error', error });
      }
    };
    fetchNewsData();
  }, []);
};

export default useFetchNews;
