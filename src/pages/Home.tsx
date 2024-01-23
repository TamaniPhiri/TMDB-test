import { useQuery } from "react-query";
import { UseGet } from "../hooks/useGetData";
import Loading from "../components/global/Loading";
import ErrorDisplay from "../components/global/ErrorDisplay";
import { IMovieResponse } from "../types/interface";
const Home = () => {
  const { isError, isLoading } = useQuery<IMovieResponse>(
    "getPopular",
    UseGet({ endpoint: "movie/popular" }),
    {
      onSuccess: (data) => {
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
  return <section className={styles.container}>home</section>;
};

export default Home;

const styles = {
  container: "min-h-screen",
};
