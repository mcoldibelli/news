import useNews from '../hooks/useNews';
import { IBGE_HOME } from '../utils/constants';
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
    <section>
      <Thumbnail
        src={ parseThumbnail(highlighted.imagens) }
        alt="Thumbnail da Notícia Destaque"
      />
      <div>Notícia Destaque</div>
    </section>
  );
}

export default NewsHighlighted;
