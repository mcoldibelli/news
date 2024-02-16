type NewsItemProps = {
  title: string;
};

function NewsItem({ title }: NewsItemProps) {
  return (
    <div>
      <h2>{ title }</h2>
    </div>
  );
}

export default NewsItem;
