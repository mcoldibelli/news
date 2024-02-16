import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

function Favorite(isFavorite: boolean) {
  return (
    <div>
      {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
    </div>
  );
}

export default Favorite;
