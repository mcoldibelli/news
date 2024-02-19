import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import useFavorites from '../hooks/useFavorites';

function Favorite({ newsId }: { newsId: number }) {
  const { favoriteNewsIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteNewsIds.includes(newsId);

  const handleClick = () => {
    toggleFavorite(newsId);
  };

  return (
    <button
      className="favorite-button"
      aria-label="Favorite"
      onClick={ handleClick }
    >
      {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
    </button>
  );
}

export default Favorite;
