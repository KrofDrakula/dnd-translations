import { createSignal } from "solid-js";
import { render } from "solid-js/web";
import { Language } from "../schemas/languages";
import LanguageSelector from "./components/language";
import List from "./components/list";
import Search from "./components/search";

render(() => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [language, setLanguage] = createSignal<Language>("sl");

  return (
    <>
      <h1>Backpacker's Guide To DnD</h1>
      <LanguageSelector selected={language()} setLanguage={setLanguage} />
      <Search setSearchTerm={setSearchTerm} />
      <List searchTerm={searchTerm()} language={language()} />
    </>
  );
}, document.getElementById("app")!);
