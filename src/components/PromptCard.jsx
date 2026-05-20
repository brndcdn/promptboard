function PromptCard({ prompt, isSelected, onSelectPrompt, onToggleFavorite }) {
  return (
    <article
      className={`prompt-card ${isSelected ? "selected-card" : ""}`}
      onClick={() => onSelectPrompt(prompt.id)}
    >
      <div className="prompt-card-top">
        <span className="category-badge">{prompt.category}</span>

        <button
          className={`favorite-button ${prompt.favorite ? "is-favorite" : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(prompt.id);
          }}
          aria-label={
            prompt.favorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          {prompt.favorite ? "★" : "☆"}
        </button>
      </div>

      <h3>{prompt.title}</h3>
      <p>{prompt.description}</p>
    </article>
  );
}

export default PromptCard;
