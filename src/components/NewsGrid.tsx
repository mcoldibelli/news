import { useState } from 'react';
import useNews from '../hooks/useNews';
import NewsGridContainer from '../styles/newsGridContainer';
import { formatToDate } from '../utils/timeRelated';
import NewsItem from './NewsItem';

function NewsGrid() {
  const { news, isLoading } = useNews();
  const [displayedNews, setDisplayedNews] = useState(1); // Starts at 1 as number 0 is the highlighted news

  if (isLoading) {
    return <p>Loading grid...</p>;
  }

  const handleLoadMore = () => {
    setDisplayedNews(displayedNews + 9);
  };

  const newsList = news.slice(displayedNews, displayedNews + 9).map((item) => {
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
      <button
        className="load-more"
        onClick={ handleLoadMore }
      >
        VEJA MAIS
      </button>
    </NewsGridContainer>
  );
}

export default NewsGrid;
