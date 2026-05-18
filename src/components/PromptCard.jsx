function PromptCard({ prompt }) {
  return (
    <article className="prompt-card">
      <div>
        <h3>{prompt.title}</h3>
        <p>{prompt.description}</p>
      </div>

      <span>{prompt.category}</span>
    </article>
  );
}

export default PromptCard;
