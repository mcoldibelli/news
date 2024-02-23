import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-100 border-gray-200 shadow-lg">
      <div
        className="max-w-screen-xl flex flex-wrap items-center
          justify-between mx-auto p-4"
      >
        <Link to="/">
          <h1
            className="text-4xl self-center font-semibold
            whitespace-nowrap"
          >
            IBGE News
          </h1>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
