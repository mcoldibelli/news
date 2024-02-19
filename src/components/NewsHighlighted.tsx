import useNews from '../hooks/useFetchNews';
import HighlightedNews from '../styles/newsHighlighted';
import { parseThumbnail } from '../utils/helpers';
import { NewsType } from '../utils/types';
import NewsItem from './NewsItem';
import Thumbnail from './Thumbnail';

function NewsHighlighted() {
  const { news } = useNews();
  const highlighted:NewsType = news[0];

  return (
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
  );
}

export default NewsHighlighted;
