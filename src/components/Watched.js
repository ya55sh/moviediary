import { useEffect, useState } from "react";
import Card from "./Card";

export default function Watched({ watchedMovies }) {
  const [runTime, setRunTime] = useState(0);
  useEffect(
    function getRuntime() {
      for (let i in watchedMovies) {
        let tempRunTime = watchedMovies[i].runtime.split(" ")[0];
        console.log(tempRunTime);
        setRunTime((runTime) => {
          return runTime + Number(tempRunTime) / 2;
        });
      }
    },
    [watchedMovies]
  );

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
            />
          </li>
        );
      })}
    </ul>
  );
}
