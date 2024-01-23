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
    <section className={styles.container}>
      <h1 className={styles.heading}>Popular movies</h1>
      <main className={styles.cardContainer}>
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </main>
    </section>
  );
};

export default Home;

const styles = {
  container: "py-16 min-h-screen w-full px-4 md:px-12",
  heading: " text-center text-4xl font-bold",
  cardContainer:
    "gap-8 lg:gap-12 py-8 grid md:grid-cols-3 lg:grid-cols-4 w-full",
};
