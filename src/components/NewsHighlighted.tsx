import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import HighlightedNews from '../styles/newsHighlighted';
import { parseThumbnail } from '../utils/helpers';
import NewsItem from './NewsItem';
import Thumbnail from './Thumbnail';

function NewsHighlighted() {
  const { fetchState } = useContext(NewsContext);
  const highlighted = fetchState.data[0];

  if (fetchState.status === 'loading') {
    return <div>Loading highlighted news...</div>;
  }

  if (fetchState.status === 'error') {
    return (
      <div>
        {`Error fetching highlighted news: ${fetchState.error.message}`}
      </div>
    );
  }

  return (highlighted && (
    <HighlightedNews>
      <div className="highlighted-container">
        <div className="highlighted-top-row">
          <p>Notícia mais recente</p>
        </div>
        <NewsItem
          id={ highlighted.id }
          title={ highlighted.title }
          summary={ highlighted.summary }
          publishedAt={ (new Date(highlighted.publishedAt)) }
          link={ highlighted.link }
        />
      </div>
      <Thumbnail
        src={ parseThumbnail(highlighted.images ?? '') }
        alt="Thumbnail da Notícia Destaque"
      />

    </HighlightedNews>
  ));
}

export default NewsHighlighted;
