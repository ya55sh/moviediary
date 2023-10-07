import "./App.css";
import Logo from "./components/Logo";
import Movie from "./components/Movie";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SearchBar from "./components/SearchBar";
import Watched from "./components/Watched";
import Listing from "./components/Listing";

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
      <Navbar>
        <Logo />
        <SearchBar />
        <Result result={initialData.length} />
      </Navbar>

      <Main>
        <Listing>
          <Movie movieList={initialData} />
        </Listing>
        <Listing>
          <Watched watchedMovies={watchedMovies} />
        </Listing>
      </Main>
    </>
  );
}

export default App;
