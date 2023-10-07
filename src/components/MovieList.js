import Movie from "./Movie";
import Watched from "./Watched";

export default function MovieList({ movieList, watchedMovies }) {
  return (
    <div className="movielist">
      <Movie movieList={movieList} />
      <Watched watchedMovies={watchedMovies} />
    </div>
  );
}
