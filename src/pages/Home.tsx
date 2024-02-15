import Header from '../components/Header';

function Home() {
  return (
    <main>
      <Header />
      <div>
        <img src="" alt="Thumbnail" />
        <div>Notícia Destaque</div>
      </div>
      <div>
        <ul>
          <li>Mais recentes</li>
          <li>Release</li>
          <li>Notícia</li>
          <li>Favoritas</li>
        </ul>
      </div>
      <div>Grid de noticias</div>
      <button>VEJA MAIS</button>
    </main>
  );
}

export default Home;
