function PromptDetail({ prompt }) {
  if (!prompt) {
    return (
      <aside className="prompt-detail empty-detail">
        <h2>No prompt selected</h2>
        <p>Select a prompt from the list to view its details.</p>
      </aside>
    );
  }

  function copyPrompt() {
    navigator.clipboard.writeText(prompt.content);

    alert("Prompt copied to clipboard!");
  }

  return (
    <aside className="prompt-detail">
      <h2>{prompt.title}</h2>

      <div className="tag-list">
        {prompt.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="prompt-content">
        <p>{prompt.content}</p>
      </div>

      <button className="copy-button" onClick={copyPrompt}>
        Copy to clipboard
      </button>
    </aside>
  );
}

export default PromptDetail;
