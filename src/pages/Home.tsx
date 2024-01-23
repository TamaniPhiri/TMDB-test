import { useQuery } from "react-query";
import { UseGet } from "../hooks/useGetData";
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
  return <section className=" bg-red-400">home</section>;
};

export default Home;
