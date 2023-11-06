import "./App.css";
import Logo from "./components/Logo";
import Movie from "./components/Movie";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";
import Watched from "./components/Watched";
import Listing from "./components/Listing";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import Selected from "./components/Selected";

let KEY = "7aa5e667";

const initialData = [
  { img: "image here", name: "Inception", year: 2010 },
  { img: "image here", name: "Transformer", year: 2010 },
  { img: "image here", name: "G.I. Joe", year: 2010 },
  { img: "image here", name: "Clash of the Titans", year: 2010 },
  { img: "image here", name: "Incredible Hulk", year: 2010 },
];

const watchedMovies = [
  { img: "image here", name: "Inception", year: 2010 },
  { img: "image here", name: "Transformer", year: 2010 },
  { img: "image here", name: "G.I. Joe", year: 2010 },
];

function App() {
  const [query, setQuery] = useState("Star wars");
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [watched, setWatched] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState("");
  const [totalRating, setTotalRating] = useState(0);

  function handleSelectedMovie() {
    setSelectedId("");
  }

  useEffect(
    function () {
      setLoading(true);
      setError("");
      if (query !== "") {
        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
          .then((resp) => {
            if (!resp.ok) throw Error("Request Failed");
            return resp.json();
          })
          .then((data) => {
            if (data.Response === "False") throw Error("Movie not found");
            setMovies(data.Search);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      } else {
        setMovies([]);
        setLoading(false);
      }
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <Result result={movies.length ? movies.length : 0} />
      </Navbar>

      <Main>
        <Listing>
          {loading && <Loading />}
          {!loading && !isError && (
            <Movie
              movieList={movies}
              setSelectedId={setSelectedId}
              setMovie={setMovie}
            />
          )}
          {isError && <ErrorMessage message={isError} />}
        </Listing>
        <Listing>
          {selectedId !== "" ? (
            <Selected
              selectedId={selectedId}
              setSelectedId={handleSelectedMovie}
              movie={movie}
              setMovie={setMovie}
              watched={watched}
              setWatched={setWatched}
              totalRating={totalRating}
              setTotalRating={setTotalRating}
            />
          ) : (
            <Watched watchedMovies={watched} setWatchedMovies={setWatched} />
          )}
        </Listing>
      </Main>
    </>
  );
}

export default App;
