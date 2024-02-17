import useNews from '../hooks/useNews';
import NewsGridContainer from '../styles/newsGridContainer';
import { formatToDate } from '../utils/counter';
import NewsItem from './NewsItem';

function NewsGrid() {
  const { news, isLoading } = useNews();

  if (isLoading) {
    return <p>Loading grid...</p>;
  }

  const newsList = news.slice(1, 10).map((item) => {
    const formattedDate = formatToDate(item.data_publicacao);

    return (
      <NewsItem
        key={ item.id }
        id={ item.id }
        title={ item.titulo }
        intro={ item.introducao }
        date={ formattedDate }
        link={ item.link }
      />
    );
  });

  return (
    <NewsGridContainer>
      <ul>
        {news && newsList}
      </ul>
    </NewsGridContainer>
  );
}

export default NewsGrid;
