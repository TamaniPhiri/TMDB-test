import moment from "moment";
import { IMG_BASE_URL } from "../../constants/api";
import { IMovie } from "../../types/interface";
import IconHeart from "../icons/IconHeart";
import { useState } from "react";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [openOverview, setOpenOverview] = useState<boolean>(false);
  return (
    <div className="flex flex-col hover:scale-[101%] group relative duration-300 w-full shadow-xl hover:shadow-2xl border overflow-hidden border-[#4c426f] rounded-2xl">
      <div className="relative h-96">
        <IconHeart movie={movie} />
        <img
          src={IMG_BASE_URL + movie.poster_path}
          alt="movieImg"
          loading="lazy"
          className=" object-cover w-full h-full aspect-auto"
        />
        <div
          className={`absolute text-sm p-3 flex-1 bg-[#2c2c2c] duration-300 top-0 ${
            openOverview ? "translate-y-0" : "-translate-y-[500px]"
          }`}
        >
          {movie.overview}
        </div>
        <button
          onClick={() => setOpenOverview(!openOverview)}
          className=" absolute bottom-3 right-3 group-hover:translate-x-0 translate-x-[500px] duration-300"
        >
          {" "}
          hello
        </button>
      </div>

      <div className="p-3 flex-1">
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
