import {
  Component,
  createEffect,
  createResource,
  createSignal,
  on,
  Show
} from "solid-js";
import type { Dictionary } from "../../dictionary/interfaces";
import type { Language } from "../../schemas/languages";
import LanguageSelector from "./language";
import List from "./list";
import Search from "./search";
import "./base.css";
import styles from "./app.module.css";

const App: Component = () => {
  const [searchTerm, setSearchTerm] = createSignal("");
  const [language, setLanguage] = createSignal<Language>("sl");
  const [dictionary] = createResource<Dictionary | null>(
    async () => (await fetch("./dictionary.json")).json(),
    { initialValue: null }
  );

  const availableLanguages = (): Set<Language> =>
    new Set(
      dictionary()?.flatMap((entry) =>
        entry.translations.map((t) => t.language)
      )
    );

  createEffect(() => {
    const url = new URL(document.location.href);
    if (!url.searchParams.get("lang")) {
      url.searchParams.set("lang", language() as string);
      window.history.replaceState(null, "", url);
    }
  });

  let list: HTMLDivElement;

  createEffect(on(searchTerm, () => (list.scrollTop = 0)));

  return (
    <>
      <Show
        when={() => dictionary.loading}
        fallback={<p>Please wait, loading dictionary &hellip;</p>}
      >
        <div class={styles.layout}>
          <div class={styles.search}>
            <h1>Backpacker's Guide to DnD</h1>
            <Search setSearchTerm={setSearchTerm} />
            <LanguageSelector
              selected={language()}
              setLanguage={setLanguage}
              available={availableLanguages()}
            />
          </div>
          <div class={styles.list} ref={(ref) => (list = ref)}>
            <List
              searchTerm={searchTerm()}
              language={language()}
              dictionary={dictionary()!}
            />
          </div>
        </div>
      </Show>
    </>
  );
};

export default App;
