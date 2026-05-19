import { useState } from "react";
import { prompts } from "./data/prompts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import PromptList from "./components/PromptList";
import PromptDetail from "./components/PromptDetail";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPromptId, setSelectedPromptId] = useState(null);

  function handleSelectPrompt(promptId) {
    setSelectedPromptId((currentId) =>
      currentId === promptId ? null : promptId,
    );
  }

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || prompt.category === selectedCategory;

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
            selectedPromptId={selectedPrompt?.id}
            onSelectPrompt={handleSelectPrompt}
          />
        </div>

        <PromptDetail prompt={selectedPrompt} />
      </section>
    </main>
  );
}

export default App;
