export default function Movie({ movieList }) {
  return (
    <div class="movies">
      <ul>
        {movieList.map((movie) => {
          return (
            <li>
              {movie.img} {movie.name} {movie.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
