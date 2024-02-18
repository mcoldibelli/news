import { useState } from 'react';
import useNews from '../hooks/useNews';
import NewsGridContainer from '../styles/newsGridContainer';
import { formatToDate } from '../utils/timeRelated';
import NewsItem from './NewsItem';

function NewsGrid() {
  const { filteredNews, isLoading } = useNews();
  const [displayedNews, setDisplayedNews] = useState(0);

  if (isLoading) {
    return <p>Loading grid...</p>;
  }

  const handleLoadMore = () => {
    setDisplayedNews(displayedNews + 9);
  };

  const newsList = filteredNews.slice(displayedNews, displayedNews + 9).map((item) => {
    const formattedDate = formatToDate(item.data_publicacao);

    console.log('grid first -> ', filteredNews[0].id);

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
        {filteredNews.length > 0 && newsList}
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
