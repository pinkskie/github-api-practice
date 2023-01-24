import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between h-[50px] text-white px-5 bg-gray-500 shadow-md items-center">
      <Link to="/">
        <h3 className="font-bold">Github search</h3>
      </Link>

      <span>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </nav>
  );
}
