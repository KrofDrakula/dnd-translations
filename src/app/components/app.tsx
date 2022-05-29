import { Component, createRenderEffect, createSignal, Show } from "solid-js";
import { Dictionary } from "../../dictionary/interfaces";
import { Language } from "../../schemas/languages";
import LanguageSelector from "./language";
import List from "./list";
import Search from "./search";

const App: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [language, setLanguage] = createSignal<Language>("sl");
  const [dictionary, setDictionary] = createSignal<Dictionary | null>(null);
  const availableLanguages = (): Set<Language> =>
    dictionary()
      ? new Set(["sl"])
      : new Set(
          dictionary()?.flatMap((entry) =>
            entry.translations.map((t) => t.language)
          )
        );

  fetch("/dictionary.json")
    .then((response) => response.json())
    .then((data) => setDictionary(data))
    .catch((err) => {
      alert(`Cannot load dictionary, try reloading the page.`);
      console.error(err);
    });

  return (
    <>
      <Show
        when={dictionary()}
        fallback={<p>Please wait, loading dictionary &hellip;</p>}
      >
        <h1>Backpacker's Guide to DnD</h1>
        <LanguageSelector
          selected={language()}
          setLanguage={setLanguage}
          available={availableLanguages()}
        />
        <Search setSearchTerm={setSearchTerm} />
        <List
          searchTerm={searchTerm()}
          language={language()}
          dictionary={dictionary()!}
        />
      </Show>
    </>
  );
};

export default App;
