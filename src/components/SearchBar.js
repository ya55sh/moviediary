export default function SearchBar({ query, setQuery }) {
  function handleSearch(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  return (
    <div className="searchbar">
      <input
        type="search"
        size="100"
        placeholder="Search movies..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}
