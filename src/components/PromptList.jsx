import PromptCard from "./PromptCard";

function PromptList({ prompts, selectedPromptId, onSelectPrompt }) {
  if (prompts.length === 0) {
    return <p className="empty-state">No prompts found.</p>;
  }

  return (
    <section className="prompt-list">
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
          isSelected={prompt.id === selectedPromptId}
          onSelectPrompt={onSelectPrompt}
        />
      ))}
    </section>
  );
}

export default PromptList;
