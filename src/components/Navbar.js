import Logo from "./Logo";
import Result from "./Result";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <Result />
    </div>
  );
}
