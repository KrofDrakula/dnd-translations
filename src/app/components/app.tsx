import { Component, createSignal } from "solid-js";
import { Language } from "../../schemas/languages";
import LanguageSelector from "./language";
import List from "./list";
import Search from "./search";

const App: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [language, setLanguage] = createSignal<Language>("sl");

  return (
    <>
      <h1>Backpacker's Guide to DnD</h1>
      <LanguageSelector selected={language()} setLanguage={setLanguage} />
      <Search setSearchTerm={setSearchTerm} />
      <List searchTerm={searchTerm()} language={language()} />
    </>
  );
};

export default App;
