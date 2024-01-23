import { IMG_BASE_URL } from "../../constants/api";
import { IMovie } from "../../types/interface";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col hover:scale-[101%] duration-300 w-full border overflow-hidden border-gray-700 rounded-2xl">
      <img
        src={IMG_BASE_URL + movie.poster_path}
        alt="movieImg"
        loading="lazy"
        className=" object-cover w-full h-96 aspect-auto"
      />
      <div className="p-4">
        <h1 className=" font-bold">{movie.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
