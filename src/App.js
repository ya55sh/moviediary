import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

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
  return (
    <>
      <Navbar />
      <div className="container">
        <MovieList movieList={initialData} watchedMovies={watchedMovies} />
      </div>
    </>
  );
}

export default App;
