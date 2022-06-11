import Link from "next/link";

const Header: () => JSX.Element = () => (
  <header className="px-4 bg-zinc-50 z-10 w-full shadow-md justify-center items-center flex flex-row fixed top-0 h-12">
    <nav className="w-full max-w-xl flex justify-between">
      <Link href={"/"}>
        <a className="text-2xl font-medium text-gray-500 hover:text-gray-700 transition-colors">
          Track
        </a>
      </Link>
      <Link href={"/"}>
        <a className="text-2xl font-medium text-gray-500 hover:text-gray-700 transition-colors">
          Artist
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;
