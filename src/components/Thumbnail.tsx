type ThumbnailProps = {
  src: string;
  alt: string;
};

function Thumbnail({ src, alt }: ThumbnailProps) {
  return (
    <img src={ src } alt={ alt } />
  );
}

export default Thumbnail;
