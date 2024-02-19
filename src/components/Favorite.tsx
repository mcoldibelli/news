import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useEffect } from 'react';
import useNews from '../hooks/useFetchNews';

function Favorite({ newsId }: { newsId: number }) {
  const { favoriteNewsIds, setFavoriteNewsIds } = useNews();
  const isFavorite = favoriteNewsIds.includes(newsId);

  // Load from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteNewsIds') || '[]');
    setFavoriteNewsIds(storedFavorites);
  }, []);

  // Save to localStorage on change and update state
  const handleClick = () => {
    if (isFavorite) {
      const newFavoriteList = favoriteNewsIds.filter((id) => id !== newsId);

      setFavoriteNewsIds(newFavoriteList);
      localStorage.setItem('favoriteNewsIds', JSON.stringify(newFavoriteList));
    } else {
      setFavoriteNewsIds([...favoriteNewsIds, newsId]);
      localStorage.setItem(
        'favoriteNewsIds',
        JSON.stringify([...favoriteNewsIds, newsId]),
      );
    }
  };

  return (
    <button
      className="favorite-button"
      onClick={ handleClick }
    >
      {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
    </button>
  );
}

export default Favorite;
