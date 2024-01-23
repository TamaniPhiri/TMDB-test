import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.links}>
        Home
      </Link>
      <Link to={"/liked"} className={styles.links}>
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;

const styles = {
  links: "hover:text-[#BFCDE0] duration-300",
  nav: "w-full items-center flex justify-between py-4 shadow",
};
