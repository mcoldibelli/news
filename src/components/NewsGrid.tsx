import { useContext } from 'react';
import NewsItem from './NewsItem';
import useFilters from '../hooks/useFilters';
import NewsContext from '../context/NewsContext';

function NewsGrid() {
  const { fetchState } = useContext(NewsContext);
  const { filteredNews } = useFilters();
  const newsToDisplay = filteredNews.slice(0, 18);

  if (fetchState.status === 'loading') {
    return <p>Loading grid...</p>;
  }

  if (fetchState.status === 'error') {
    return (<div>{`Error: ${fetchState.error.message}`}</div>);
  }

  const newsList = newsToDisplay.map((item) => {
    return (
      <li
        key={ item.id }
        className="col-span-1 flex flex-col
      bg-white border-2 px-4 py-2 h-200 w-200"
      >
        <NewsItem
          id={ item.id }
          titulo={ item.titulo }
          introducao={ item.introducao }
          data_publicacao={ item.data_publicacao }
          link={ item.link }
          imagens={ item.imagens }
          editorias={ item.editorias }
        />
      </li>
    );
  });

  return (fetchState.status === 'success' && (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
    >
      {filteredNews.length > 0 && newsList}
    </section>
  ));
}

export default NewsGrid;
