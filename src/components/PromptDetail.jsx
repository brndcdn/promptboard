function PromptDetail({ prompt }) {
  if (!prompt) {
    return (
      <aside className="prompt-detail empty-detail">
        <h2>No prompt selected</h2>
        <p>Select a prompt from the list to view its details.</p>
      </aside>
    );
  }

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
