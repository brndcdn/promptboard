function PromptCard({ prompt, isSelected, onSelectPrompt }) {
  return (
    <article
      className={`prompt-card ${isSelected ? "selected-card" : ""}`}
      onClick={() => onSelectPrompt(prompt.id)}
    >
      <div>
        <h3>{prompt.title}</h3>
        <p>{prompt.description}</p>
      </div>

      <span className="category-badge">{prompt.category}</span>
    </article>
  );
}

export default PromptCard;
