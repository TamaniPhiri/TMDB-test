import { useRecoilValue } from "recoil";
import { likedMoviesState } from "../atoms/atoms";
import MovieCard from "../components/home/MovieCard";

const Liked = () => {
  const Liked = useRecoilValue(likedMoviesState);
  return (
    <section className="min-h-screen items-center justify-center flex w-full px-4 md:px-12">
      {Liked.length > 0 ? (
        <main className="gap-8 lg:gap-12 py-16 grid md:grid-cols-3 lg:grid-cols-4 w-full">
          {Liked.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </main>
      ) : (
        <h1 className="text-center w-full text-2xl font-bold">
          No favorites added
        </h1>
      )}
    </section>
  );
};

export default Liked;
