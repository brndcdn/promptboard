import PromptCard from "./PromptCard";

function PromptList({ prompts }) {
  return (
    <section className="prompt-list">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </section>
  );
}

export default PromptList;
