import { dateToString, parseThumbnail } from '../utils/helpers';
import { NewsType } from '../utils/types';
import Favorite from './Favorite';

function NewsItem(
  { id, title, summary, publishedAt, link, images, tag }: NewsType,
) {
  // opens another tab when the user clicks on the "Leia a notícia aqui" button
  const onReadNews = () => {
    window.open(link, '_blank');
  };

  return (
    <article
      className="items-center bg-white border border-gray-200
      rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <div className="relative">
        <img
          className="rounded-t-lg h-96
          md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={ parseThumbnail(images ?? '') }
          alt=""
        />
        <div
          className="absolute top-0 right-0
      text-white font-bold px-2 py-1 m-2 rounded-md"
        >
          <Favorite newsId={ id } />
        </div>
        <div
          className="absolute bottom-0 right-0 bg-white
          text-black px-2 py-1 m-2 rounded-md text-xs"
        >
          {dateToString(publishedAt)}
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
        >
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {summary}
        </p>
        <div className="container flex flex-row justify-between">
          <button
            onClick={ onReadNews }
            className="bg-gray-200 text-black px-2 py-1 mt-2
        rounded-lg text-xs hover:bg-sky-600 focus:outline-none
        focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 w-fit"
          >
            Leia mais
          </button>
          <div className="flex flex-row">
            {tag.split(';').map((item, index) => (
              <p
                key={ index }
                className="bg-gray-800 ml-2 text-white px-2 py-1 mt-2
              rounded-md text-xs"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsItem;
