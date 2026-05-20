import { useState } from "react";
import { prompts as initialPrompts } from "./data/prompts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import PromptList from "./components/PromptList";
import PromptDetail from "./components/PromptDetail";
import "./App.css";

function App() {
  const [prompts, setPrompts] = useState(initialPrompts);

  function toggleFavorite(promptId) {
    setPrompts((currentPrompts) =>
      currentPrompts.map((prompt) =>
        prompt.id === promptId
          ? { ...prompt, favorite: !prompt.favorite }
          : prompt,
      ),
    );
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPromptId, setSelectedPromptId] = useState(null);

  function handleSelectPrompt(promptId) {
    setSelectedPromptId((currentId) =>
      currentId === promptId ? null : promptId,
    );
  }

  const normalizedSearch = searchTerm.toLowerCase().trim();

  const filteredPrompts = prompts.filter((prompt) => {
    const searchableText = [
      prompt.title,
      prompt.description,
      prompt.content,
      prompt.category,
      ...prompt.tags,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Favorites" && prompt.favorite) ||
      prompt.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const selectedPrompt = prompts.find(
    (prompt) => prompt.id === selectedPromptId,
  );

  return (
    <main className="app">
      <Header />
      <section className="workspace">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="content-area">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <PromptList
            prompts={filteredPrompts}
            selectedPromptId={selectedPromptId}
            onSelectPrompt={handleSelectPrompt}
            onToggleFavorite={toggleFavorite}
          />
        </div>

        <PromptDetail
          prompt={selectedPrompt}
          onToggleFavorite={toggleFavorite}
        />
      </section>
    </main>
  );
}

export default App;
