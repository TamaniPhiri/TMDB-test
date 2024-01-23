import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full items-center flex justify-between">
      <span>logo</span>
      <Link to={"/liked"}>Favorites</Link>
    </nav>
  );
};

export default Navbar;
