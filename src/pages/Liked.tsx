import { useRecoilValue } from "recoil";
import { likedMoviesState } from "../atoms/atoms";
import MovieCard from "../components/home/MovieCard";

const Liked = () => {
  const Liked = useRecoilValue(likedMoviesState);
  console.log(Liked);

  return (
    <div>
      {Liked.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default Liked;
