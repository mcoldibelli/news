import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io';

function Favorite(isFavorite: boolean) {
  const handleClick = () => {
    console.log('Favoritando...');
  };

  return (
    <button className="favorite-button" onClick={ handleClick }>
      {isFavorite ? <IoMdHeart /> : <IoIosHeartEmpty />}
    </button>
  );
}

export default Favorite;
