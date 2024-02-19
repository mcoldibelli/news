import { ThumbnailProps } from '../utils/types';

function Thumbnail({ src, alt }: ThumbnailProps) {
  return (
    <img src={ src } alt={ alt } />
  );
}

export default Thumbnail;
