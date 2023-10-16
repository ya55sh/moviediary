import Card from "./Card";

export default function Movie({ movieList, setSelectedId }) {
  function handleCardClick(movie) {
    setSelectedId((selectedId) => {
      return movie.imdbID === selectedId ? "" : movie.imdbID;
    });
  }

  return (
    <ul>
      {movieList &&
        movieList.map((movie) => {
          return (
            <li key={movie.imdbID} onClick={() => handleCardClick(movie)}>
              <Card
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            </li>
          );
        })}
    </ul>
  );
}
