import { dateToString } from '../utils/helpers';
import { NewsType } from '../utils/types';
import Favorite from './Favorite';

function NewsItem({ id, title, summary, publishedAt, link }: NewsType) {
  // opens another tab when the user clicks on the "Leia a notícia aqui" button
  const onReadNews = () => {
    window.open(link, '_blank');
  };

  // formats the date to X days ago
  const newsDate = dateToString(publishedAt);

  return (
    <article
      key={ id }
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time
          dateTime={ publishedAt.toISOString() }
          className="text-gray-500"
        >
          {newsDate}
        </time>
        <a
          href="categoria"
          className="relative z-10 rounded-full bg-gray-50
          px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          categoria
        </a>
        <Favorite newsId={ id } />
      </div>

      <div className="group relative">
        <h3
          className="mt-3 text-lg font-semibold leading-6
                 text-gray-900 group-hover:text-gray-600"
        >
          <a href="teste">
            <span className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <p
          className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
        >
          {summary}
        </p>

        <button
          className="read-more-button"
          onClick={ onReadNews }
        >
          Leia a notícia aqui
        </button>
      </div>
    </article>
  );
}

export default NewsItem;
