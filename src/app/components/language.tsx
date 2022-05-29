import { For } from "solid-js";
import type { Component } from "solid-js";
import type { Language } from "../../schemas/languages";

interface Props {
  selected: Language;
  setLanguage: (lang: Language) => void;
  available: Set<Language>;
}

const LanguageSelector: Component<Props> = (props) => {
  return (
    <select
      onChange={(ev) =>
        props.setLanguage((ev.target as HTMLSelectElement).value as Language)
      }
    >
      <For each={[...props.available]}>
        {(lang) => (
          <option value={lang as string} selected={props.selected == lang}>
            {lang as string}
          </option>
        )}
      </For>
    </select>
  );
};

export default LanguageSelector;
