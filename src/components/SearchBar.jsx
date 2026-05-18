function SearchBar() {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Search prompts..." />
      <select>
        <option>All categories</option>
        <option>Design</option>
        <option>Development</option>
        <option>Learning</option>
      </select>
    </section>
  );
}

export default SearchBar;
