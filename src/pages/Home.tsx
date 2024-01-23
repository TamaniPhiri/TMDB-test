import { useQuery } from "react-query";
import { UseGet } from "../hooks/useGetData";
import Loading from "../components/global/Loading";
import ErrorDisplay from "../components/global/ErrorDisplay";
const Home = () => {
  const { isError, isLoading } = useQuery(
    "getPopular",
    UseGet({ endpoint: "movie/popular" }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorDisplay />;
  }
  return <section className=" bg-red-400">home</section>;
};

export default Home;
