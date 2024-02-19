import NewsCard from '../styles/newsCard';
import { dateToString } from '../utils/helpers';
import { NewsType } from '../utils/types';
import Favorite from './Favorite';

function NewsItem(news: NewsType) {
  const {
    id, title, summary, publishedAt, link,
  } = news;

  const handleReadNews = () => {
    window.open(link, '_blank');
  };

  return (
    <NewsCard className={ String(id) }>
      <h2>{ title }</h2>
      <p>{ summary }</p>
      <div className="highlighted-bottom-row">
        <span>
          {`${dateToString(publishedAt)}`}
          <Favorite newsId={ id } />
        </span>
        <button
          className="read-more-button"
          onClick={ handleReadNews }
        >
          Leia a notícia aqui
        </button>
      </div>
    </NewsCard>
  );
}

export default NewsItem;
