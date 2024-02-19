import { useContext, useState } from 'react';
import NewsGridContainer from '../styles/newsGridContainer';
import NewsItem from './NewsItem';
import useFilters from '../hooks/useFilters';
import NewsContext from '../context/NewsContext';

function NewsGrid() {
  const { fetchState } = useContext(NewsContext);
  const { filteredNews } = useFilters();
  const [displayedNews, setDisplayedNews] = useState(0);

  if (fetchState.status === 'loading') {
    return <p>Loading grid...</p>;
  }

  if (fetchState.status === 'error') {
    return (<div>{`Error: ${fetchState.error.message}`}</div>);
  }

  const handleLoadMore = () => {
    setDisplayedNews(displayedNews + 9);
  };

  const newsList = filteredNews.slice(displayedNews, displayedNews + 9).map((item) => {
    return (
      <NewsItem
        key={ item.id }
        id={ item.id }
        title={ item.title }
        summary={ item.summary }
        publishedAt={ item.publishedAt }
        link={ item.link }
      />
    );
  });

  return (fetchState.status === 'success' && (
    <NewsGridContainer>
      <ul>
        {filteredNews.length > 0 && newsList}
      </ul>
      {filteredNews.length >= 9 && (
        <button
          className="load-more"
          onClick={ handleLoadMore }
        >
          VEJA MAIS
        </button>
      )}
    </NewsGridContainer>
  ));
}

export default NewsGrid;
