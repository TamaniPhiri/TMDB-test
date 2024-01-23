import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full items-center flex justify-between">
      <Link to={"/"}>logo</Link>
      <Link to={"/liked"}>Favorites</Link>
    </nav>
  );
};

export default Navbar;
