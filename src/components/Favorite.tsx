import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';
import useNews from '../hooks/useNews';

function Favorite({ newsId }: { newsId: number }) {
  const { favoriteNewsIds, setFavoriteNewsIds } = useNews();
  const isFavorite = favoriteNewsIds.includes(newsId);

  const handleClick = () => {
    if (isFavorite) {
      setFavoriteNewsIds(favoriteNewsIds.filter((id) => id !== newsId));
    } else {
      setFavoriteNewsIds([...favoriteNewsIds, newsId]);
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
