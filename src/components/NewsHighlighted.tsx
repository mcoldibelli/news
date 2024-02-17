import useNews from '../hooks/useNews';
import HighlightedNews from '../styles/newsHighlighted';
import { parseThumbnail } from '../utils/imageParser';
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
          title={ highlighted.titulo }
          intro={ highlighted.introducao }
          date={ new Date(highlighted.data_publicacao) }
          link={ highlighted.link }
        />
      </div>
      <Thumbnail
        src={ parseThumbnail(highlighted.imagens) }
        alt="Thumbnail da Notícia Destaque"
      />

    </HighlightedNews>
  );
}

export default NewsHighlighted;
