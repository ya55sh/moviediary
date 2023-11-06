import { useEffect, useState } from "react";
import Card from "./Card";

export default function Watched({ watchedMovies, setWatchedMovies }) {
  // const [removeMovie, setremoveMovie] = useState;

  const [runTime, setRunTime] = useState(0);
  useEffect(
    function getRuntime() {
      let tempRuntime = watchedMovies.reduce((acc, cv) => {
        return acc + Number(cv.runtime.split(" ")[0]);
      }, 0);

      setRunTime(tempRuntime);
    },
    [watchedMovies]
  );

  function handleRemoveMovie(id) {
    console.log(id);
    let tempWatchedMovies = watchedMovies.filter(
      (movie) => movie.imdbID !== id
    );
    setWatchedMovies(tempWatchedMovies);
  }

  return (
    <ul>
      <div className="header">
        <div>Movies you've watched</div>
        <p>
          #️⃣ {watchedMovies.length} &nbsp;&nbsp;&nbsp; 🕗 {runTime}
          mins
        </p>
      </div>
      {watchedMovies.map((movie, i) => {
        return (
          <li key={i}>
            <Card
              poster={movie.poster}
              title={movie.title}
              year={movie.year}
              runtime={movie.runtime}
              rating={movie.currentRating}
              id={movie.imdbID}
              handleRemoveMovie={handleRemoveMovie}
            />
          </li>
        );
      })}
    </ul>
  );
}
