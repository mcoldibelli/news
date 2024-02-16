import NewsCard from '../styles/newsCard';

type NewsItemProps = {
  id: number;
  title: string;
  intro: string;
  date: Date;
  link: string;
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
        <button
        >
          Leia a notícia aqui
        </button>
      </div>
  );
}

export default NewsItem;
