import NewsCard from '../styles/newsCard';
import { formatTimeStamp } from '../utils/timeRelated';
import { NewsItemProps } from '../utils/types';

function NewsItem({ id, title, intro, date, link }: NewsItemProps) {
  const handleReadMoreClick = () => {
    window.open(link, '_blank');
  };

  return (
    <NewsCard className={ String(id) }>
      <h2>{ title }</h2>
      <p>{ intro }</p>
      <div className="highlighted-bottom-row">
        <span>
          {`${formatTimeStamp(date)}`}
        </span>
        <button
          className="read-more-button"
          onClick={ handleReadMoreClick }
        >
          Leia a notícia aqui
        </button>
      </div>
    </NewsCard>
  );
}

export default NewsItem;
