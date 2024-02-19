import NewsCard from '../styles/newsCard';
import { dateToString } from '../utils/helpers';
import { NewsType } from '../utils/types';
import Favorite from './Favorite';

function NewsItem({ id, title, summary, publishedAt, link }: NewsType) {
  const onReadNews = () => {
    window.open(link, '_blank');
  };

  const formattedDate = dateToString(publishedAt);

  return (
    <NewsCard className={ String(id) }>
      <h2>{ title }</h2>
      <p>{ summary }</p>
      <div className="highlighted-bottom-row">
        <span>
          {`${formattedDate}`}
          <Favorite newsId={ id } />
        </span>
        <button
          className="read-more-button"
          onClick={ onReadNews }
        >
          Leia a notícia aqui
        </button>
      </div>
    </NewsCard>
  );
}

export default NewsItem;
