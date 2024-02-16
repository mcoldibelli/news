import NewsCard from '../styles/newsCard';
import daysSincePublished from '../utils/counter';
import { NewsItemProps } from '../utils/types';

function NewsItem({ id, title, intro, date, link }: NewsItemProps) {
  const handleReadMoreClick = () => {
    window.open(link, '_blank');
  };

  const timeStampFormatted = () => {
    if (daysSincePublished(date) === 0) {
      return 'Publicado Hoje';
    }
    return `${daysSincePublished(date)} dias atrás`;
  };

  return (
    <NewsCard className={ String(id) }>
      <h2>{ title }</h2>
      <p>{ intro }</p>
      <div className="highlighted-bottom-row">
        <span>
          {`${timeStampFormatted()}`}
        </span>
        <button
          onClick={ handleReadMoreClick }
        >
          Leia a notícia aqui
        </button>
      </div>
    </NewsCard>
  );
}

export default NewsItem;
