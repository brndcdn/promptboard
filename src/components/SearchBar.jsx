function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search prompts..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;
