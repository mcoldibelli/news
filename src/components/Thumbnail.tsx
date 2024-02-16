type ThumbnailProps = {
  src: string;
  alt: string;
};

function Thumbnail({ src, alt }: ThumbnailProps) {
  return (
    <div>
      <img src={ src } alt={ alt } />
    </div>
  );
}

export default Thumbnail;
