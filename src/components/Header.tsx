function Header() {
  return (
    <div className=" bg-gray-200 flex text-center">
      <div className="max-w-2xl mx-auto px-4 lg:mx-0">
        <h1
          className="my-2 text-5xl font-bold tracking-tight
           text-gray-900 sm:text-6xl"
        >
          IBGE News
        </h1>
        <p className="mt-2 text-md leading-8 text-gray-600">
          Notícias sobre o IBGE em primeira mão.
        </p>
      </div>
    </div>
  );
}

export default Header;
