import useNews from '../hooks/useNews';
import HighlightedNews from '../styles/newsHighlighted';
import { IBGE_HOME } from '../utils/constants';
import NewsItem from './NewsItem';
import Thumbnail from './Thumbnail';

const parseThumbnail = (thumbnail: string): string => {
  if (thumbnail) {
    const parsedThumbnail = JSON.parse(thumbnail);

    return `${IBGE_HOME}${parsedThumbnail.image_intro}`;
  }

  return 'https://via.placeholder.com/300x200';
};

function NewsHighlighted() {
  const { news } = useNews();
  const highlighted = news[0];

  console.log(highlighted);

  return (
    <HighlightedNews>
      <Thumbnail
        src={ parseThumbnail(highlighted.imagens) }
        alt="Thumbnail da Notícia Destaque"
      />
      <NewsItem
        id={ highlighted.id }
        title={ highlighted.titulo }
        intro={ highlighted.introducao }
        date={ new Date(highlighted.data_publicacao) }
        link={ highlighted.link }
      />
    </HighlightedNews>
  );
}

export default NewsHighlighted;
