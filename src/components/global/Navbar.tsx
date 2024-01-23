import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full items-center flex justify-between py-4 shadow">
      <Link to={"/"} className={linkStyle}>
        Home
      </Link>
      <Link to={"/liked"} className={linkStyle}>
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;

const linkStyle = "hover:text-[#FF7F11]";
