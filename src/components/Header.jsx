import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between bg-black px-8 py-4">
      <div className="flex gap-4">
        <Link to={"/"}>
          <img src="/Logonetflix.png" alt="" className="w-24" />
        </Link>
        <Link to={'/search?mediaType=movie'} className="text-white">Movie</Link>
        <Link to={'/search?mediaType=tv'} className="text-white">TV Show</Link>
      </div>
      <Link to={'/search'}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer text-white"
        />
      </Link>
    </header>
  );
}
export default Header;
