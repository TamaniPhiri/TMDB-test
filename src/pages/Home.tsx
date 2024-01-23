import { useQuery } from "react-query";
import { UseGet } from "../hooks/useGetData";
import Loading from "../components/global/Loading";
import ErrorDisplay from "../components/global/ErrorDisplay";
import { IMovieResponse } from "../types/interface";
import { useRecoilState } from "recoil";
import { movieAtomState } from "../atoms/atoms";
import MovieCard from "../components/home/MovieCard";
const Home = () => {
  const [movies, setMovies] = useRecoilState(movieAtomState);
  const { isError, isLoading } = useQuery<IMovieResponse>(
    "getPopular",
    UseGet({ endpoint: "movie/popular" }),
    {
      onSuccess: (data) => {
        setMovies(data?.results);
        console.log(data.results);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorDisplay />;
  }
  return (
    <div className="py-16 min-h-screen w-full">
      <h1 className=" text-center text-4xl font-bold">Popular movies</h1>
      <section className=" gap-4 md:gap-8 lg:gap-12 py-8 grid md:grid-cols-3 lg:grid-cols-4 w-full">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default Home;

const styles = {
  container: "min-h-screen",
};
