import { IoMdHeart } from 'react-icons/io';
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
      {isFavorite
        ? <IoMdHeart color="red" size={ 28 } />
        : <IoMdHeart color="white" size={ 28 } />}
    </button>
  );
}

export default Favorite;
