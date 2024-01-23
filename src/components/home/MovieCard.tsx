import { IMG_BASE_URL } from "../../constants/api";
import { IMovie } from "../../types/interface";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col group w-full border overflow-hidden border-gray-700 rounded-2xl">
      <img
        src={IMG_BASE_URL + movie.poster_path}
        alt="movieImg"
        loading="lazy"
        className=" object-cover w-full h-96 aspect-auto group-hover:scale-105"
      />
      <div className="">
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
