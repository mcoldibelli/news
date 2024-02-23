function Header() {
  return (
    <nav className="bg-gray-100 border-gray-200 shadow-lg">
      <div
        className="max-w-screen-xl flex flex-wrap items-center
          justify-between mx-auto p-4"
      >
        <a
          href="teste"
          className="flex items-center space-x-3
          rtl:space-x-reverse"
        >
          <span
            className="text-4xl self-center font-semibold
            whitespace-nowrap"
          >
            IBGE News
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Header;
