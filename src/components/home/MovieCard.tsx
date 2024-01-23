import { IMovie } from "../../types/interface";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return <div>{movie.overview}</div>;
};

export default MovieCard;
