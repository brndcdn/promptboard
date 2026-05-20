function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search by title, tag, or keyword..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </section>
  );
}

export default SearchBar;
