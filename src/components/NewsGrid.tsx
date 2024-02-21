import { useContext, useState } from 'react';
import NewsItem from './NewsItem';
import useFilters from '../hooks/useFilters';
import NewsContext from '../context/NewsContext';

function NewsGrid() {
  const { fetchState } = useContext(NewsContext);
  const { filteredNews } = useFilters();
  const [displayedNews] = useState(0);

  if (fetchState.status === 'loading') {
    return <p>Loading grid...</p>;
  }

  if (fetchState.status === 'error') {
    return (<div>{`Error: ${fetchState.error.message}`}</div>);
  }

  const newsList = filteredNews.slice(displayedNews, displayedNews + 9).map((item) => {
    return (
      <li key={ item.id }>
        <NewsItem
          id={ item.id }
          title={ item.title }
          summary={ item.summary }
          publishedAt={ item.publishedAt }
          link={ item.link }
        />
      </li>
    );
  });

  return (fetchState.status === 'success' && (
    <section>
      <ul>
        {filteredNews.length > 0 && newsList}
      </ul>
    </section>
  ));
}

export default NewsGrid;
