const categories = ["All", "Design", "Development", "Learning"];

function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>

      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`category-button ${
                selectedCategory === category ? "active-category" : ""
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category === "All" ? "All Prompts" : category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
