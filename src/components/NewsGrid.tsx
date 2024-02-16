import useNews from '../hooks/useNews';
import NewsGridContainer from '../styles/newsGridContainer';
import NewsItem from './NewsItem';

function NewsGrid() {
  const { news, isLoading } = useNews();

  if (isLoading) {
    return <p>Loading grid...</p>;
  }

  const newsList = news.splice(1, 9).map((item) => {
    return (
      <NewsItem
        key={ item.id }
        id={ item.id }
        title={ item.titulo }
        intro={ item.introducao }
        date={ new Date(item.data_publicacao) }
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
