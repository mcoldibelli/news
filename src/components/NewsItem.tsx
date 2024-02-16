import NewsCard from '../styles/newsCard';
import daysSincePublished from '../utils/counter';
import { NewsItemProps } from '../utils/types';

type NewsItemProps = {
  id: number;
  title: string;
  intro: string;
  date: Date;
  link: string;
};

const daysSincePublished = (date: Date): number => {
  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime();

  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  if (Number.isNaN(differenceInDays)) {
    return 0;
  }

  return differenceInDays;
};

function NewsItem({ id, title, intro, date, link }: NewsItemProps) {
  const handleReadMoreClick = () => {
    window.open(link, '_blank');
  };

  return (
    <NewsCard className={ String(id) }>
      <h2>{ title }</h2>
      <p>{ intro }</p>
      <div>
        <span>
          {`${daysSincePublished(date)} dias atrás`}
        </span>
        <button
          onClick={ handleReadMoreClick }
        >
          Leia a notícia aqui
        </button>
      </div>
    </NewsCard>
  );
}

export default NewsItem;
