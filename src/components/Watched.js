import { useState } from "react";

export default function Watched({ watchedMovies }) {
  return (
    <ul>
      <div className="header">Movies you've watched</div>
      {watchedMovies.map((movie) => {
        return (
          <li key={movie.name}>
            {movie.img} {movie.name} {movie.year}
          </li>
        );
      })}
    </ul>
  );
}
