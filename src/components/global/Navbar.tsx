import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{backdropFilter:"blur(10px)"}} className={styles.nav}>
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
  nav: "w-full items-center flex justify-between py-6 px-4 md:px-12 z-50 shadow sticky top-0 bg-[#2c2c2c] bg-opacity-80",
};
