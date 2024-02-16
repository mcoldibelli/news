import NewsCard from '../styles/newsCard';

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

  return differenceInDays;
};

function NewsItem({ id, title, intro, date, link }: NewsItemProps) {
function NewsItem({ title }: NewsItemProps) {

  return (
      <div>
        <p>Notícia mais recente</p>
        <span>Favorite button</span>
      </div>
      <h2>{ title }</h2>
      <p>{ intro }</p>
      <div>
        <span>
          {`${daysSincePublished(date)} dias atrás`}
        </span>
        <button
        >
          Leia a notícia aqui
        </button>
      </div>
  );
}

export default NewsItem;
