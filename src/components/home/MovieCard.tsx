import { IMG_BASE_URL } from "../../constants/api";
import { IMovie } from "../../types/interface";
import IconHeart from "../icons/IconHeart";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col hover:scale-[101%] duration-300 w-full border overflow-hidden border-gray-700 rounded-2xl">
      <div className="relative h-96">
        <IconHeart/>
        <img
          src={IMG_BASE_URL + movie.poster_path}
          alt="movieImg"
          loading="lazy"
          className=" object-cover w-full h-full aspect-auto"
        />
      </div>
      <div className="p-4">
        <h1 className=" font-bold">{movie.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
