import { useContext, useEffect } from 'react';
import NewsContext from '../context/NewsContext';

const useFavorites = () => {
  const { favoriteNewsIds, setFavoriteNewsIds } = useContext(NewsContext);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteNewsIds') || '[]');
    setFavoriteNewsIds(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteNewsIds', JSON.stringify(favoriteNewsIds));
  }, [favoriteNewsIds]);

  const toggleFavorite = (newsId: number) => {
    const updatedFavorites = favoriteNewsIds.includes(newsId)
      ? favoriteNewsIds.filter((id) => id !== newsId)
      : [...favoriteNewsIds, newsId];

    setFavoriteNewsIds(updatedFavorites);
  };

  return { favoriteNewsIds, toggleFavorite, setFavoriteNewsIds };
};

export default useFavorites;
