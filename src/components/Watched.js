import { useState } from "react";

export default function Watched({ watchedMovies }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="summary">
      <ul className="watchedList">
        {clicked && <div className="header">Movies you've watched</div>}
        {watchedMovies.map((movie) => {
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
