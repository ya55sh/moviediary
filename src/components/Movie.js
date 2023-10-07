export default function Movie({ movieList }) {
  return (
    <ul>
      {movieList.map((movie) => {
        return (
          <li key={movie.name}>
            {movie.img} {movie.name} {movie.year}
          </li>
        );
      })}
    </ul>
  );
}
