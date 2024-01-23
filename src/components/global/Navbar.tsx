import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { likedMoviesState } from "../../atoms/atoms";

const Navbar = () => {
  const LikedMovies = useRecoilValue(likedMoviesState);
  return (
    <nav style={{ backdropFilter: "blur(10px)" }} className={styles.nav}>
      <Link to={"/"} className={styles.links}>
        Home
      </Link>
      <Link to={"/liked"} className={styles.links}>
        <span>Favorites</span>
        {LikedMovies.length <= 0 ? null : (
          <div className={styles.badge}>{LikedMovies.length}</div>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;

const styles = {
  links: "hover:text-[#BFCDE0] duration-300 relative",
  nav: "w-full items-center flex justify-between py-6 px-4 md:px-12 z-50 shadow sticky top-0 bg-[#2c2c2c] bg-opacity-80",
  badge: "absolute -top-2 -right-2 text-xs rounded-full px-1 bg-red-600",
};
