import useFilters from '../hooks/useFilters';
import { parseThumbnail } from '../utils/helpers';

function HighlightedNews() {
  const { filteredNews } = useFilters();

  const lastestNews = filteredNews[0];
  console.log(lastestNews);

  // opens another tab when the user clicks on the "Leia a notícia aqui" button
  const onReadNews = () => {
    window.open(lastestNews.link, '_blank');
  };

  return (
    lastestNews && (
      <article className="flex flex-col lg:flex-row mx-auto mt-4">
        <img
          className="rounded-lg w-full m:w-1/2 h-auto max-w-full object-cover"
          src={ parseThumbnail(lastestNews.imagens) }
          alt="Imagem de destaque"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5
            className="mb-2 text-4xl md:text-3xl  sm:text-2xl
            font-bold tracking-tight text-gray-900"
          >
            {lastestNews.titulo}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {lastestNews.introducao}
          </p>
          <button
            onClick={ onReadNews }
            className="bg-gray-200 text-black px-2 py-1 mt-2
        rounded-lg text-xs hover:bg-sky-600 focus:outline-none
        focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 w-fit"
          >
            Leia mais
          </button>
        </div>
      </article>
    )
  );
}

export default HighlightedNews;
