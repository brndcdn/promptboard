import { prompts } from "./data/prompts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import PromptList from "./components/PromptList";
import PromptDetail from "./components/PromptDetail";
import "./App.css";

function App() {
  const selectedPrompt = prompts[0];

  return (
    <main className="app">
      <Header />

      <section className="workspace">
        <Sidebar />

        <div className="content-area">
          <SearchBar />
          <PromptList prompts={prompts} />
        </div>

        <PromptDetail prompt={selectedPrompt} />
      </section>
    </main>
  );
}

export default App;
