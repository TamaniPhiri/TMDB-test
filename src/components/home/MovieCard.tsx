import { IMovie } from "../../types/interface";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col w-full border rounded-2xl">
      <img
        src={movie.poster_path}
        alt="movieImg"
        loading="lazy"
        className=" object-cover w-full h-56"
      />
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieCard;
