import { useEffect, useState } from "react";
import StarRating from "../StarRating";
import Loading from "./Loading";
let KEY = "7aa5e667";

export default function Selected({
  selectedId,
  setSelectedId,
  movie,
  setMovie,
  watched,
  setWatched,
  totalRating,
  setTotalRating,
}) {
  const [loading, setLoading] = useState(true);
  const [currentRating, setCurrentRating] = useState(0);

  const {
    imdbID,
    Title: title,
    Year: year,
    Plot: plot,
    Released: released,
    Runtime: runtime,
    Actors: actors,
    Director: director,
    Genre: genre,
    Poster: poster,
    imdbRating,
  } = movie;

  function onAddToWatched() {
    const currentmovie = {
      imdbRating,
      title,
      year,
      poster,
      runtime,
      currentRating,
      imdbID: selectedId,
    };

    setWatched((watched) => {
      let tempMovie = watched.find((item) => item.title === currentmovie.title);

      if (tempMovie === undefined) return [...watched, currentmovie];
      return watched;
    });
    setTimeout(() => {
      setSelectedId("");
    }, 200);
  }

  useEffect(() => {
    async function getMovieDetail() {
      setLoading(true);
      const resp = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}&plot=full`
      );

      const data = await resp.json();
      setMovie(data);
      setLoading(false);
    }
    getMovieDetail();
  }, [selectedId]);

  return (
    <div className={loading ? "" : `selected`}>
      <button className="btn-close" onClick={setSelectedId}>
        ✖
      </button>

      {loading ? (
        <Loading />
      ) : (
        <>
          <header>
            <img src={poster} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>⭐ imdb: {imdbRating}</p>
            </div>
          </header>

          <div className="star">
            <StarRating
              maxRating={10}
              size={34}
              currentRating={currentRating}
              setCurrentRating={setCurrentRating}
            />
            <button className="btnAddToWatched" onClick={onAddToWatched}>
              ➕ Add to watch list
            </button>
          </div>

          <section>
            <p>Directed By - {director}</p>
            <p>Cast - {actors}</p>
            <p>{plot}</p>
          </section>
        </>
      )}
    </div>
  );
}
