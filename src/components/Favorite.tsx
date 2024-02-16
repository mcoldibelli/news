import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

function Favorite(isFavorite: boolean) {
  return (
    <div className="favorite-button">
      {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
    </div>
  );
}

export default Favorite;
