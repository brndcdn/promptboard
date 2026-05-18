function PromptDetail({ prompt }) {
  return (
    <aside className="prompt-detail">
      <h2>{prompt.title}</h2>
      <p>{prompt.description}</p>

      <div className="tag-list">
        {prompt.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="prompt-content">
        <p>{prompt.content}</p>
      </div>
    </aside>
  );
}

export default PromptDetail;
