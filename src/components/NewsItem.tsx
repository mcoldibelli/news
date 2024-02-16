import NewsCard from '../styles/newsCard';
import daysSincePublished from '../utils/counter';
import { NewsItemProps } from '../utils/types';

function NewsItem({ id, title, intro, date, link }: NewsItemProps) {
  const handleReadMoreClick = () => {
    window.open(link, '_blank');
  };

  return (
    <NewsCard className={ String(id) }>
      <h2>{ title }</h2>
      <p>{ intro }</p>
      <div>
        <span>
          {`${daysSincePublished(date)} dias atrás`}
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
