import PromptCard from "./PromptCard";

function PromptList({
  prompts,
  selectedPromptId,
  onSelectPrompt,
  onToggleFavorite,
}) {
  if (prompts.length === 0) {
    return (
      <section className="empty-state">
        <h2>No prompts found</h2>
        <p>Try modifying your search or selecting another category.</p>
      </section>
    );
  }

  return (
    <section className="prompt-list">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          isSelected={prompt.id === selectedPromptId}
          onSelectPrompt={onSelectPrompt}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}

export default PromptList;
