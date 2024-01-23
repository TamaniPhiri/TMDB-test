import moment from "moment";
import { IMG_BASE_URL } from "../../constants/api";
import { IMovie } from "../../types/interface";
import IconHeart from "../icons/IconHeart";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col hover:scale-[101%] duration-300 w-full shadow-xl hover:shadow-2xl border overflow-hidden border-[#4c426f] rounded-2xl">
      <div className="relative h-96">
        <IconHeart movie={movie} />
        <img
          src={IMG_BASE_URL + movie.poster_path}
          alt="movieImg"
          loading="lazy"
          className=" object-cover w-full h-full aspect-auto"
        />
      </div>
      <div className="p-3">
        <h1 className=" font-bold">{movie.title}</h1>
        <p className="text-[#BFCDE0]">
          {moment(movie.release_date).format("ll")}
        </p>
        <p className="">{movie.original_language.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
