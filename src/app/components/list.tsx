import { Component, For, Show } from "solid-js";
import dictionary from "../../../dist/dictionary.json";
import { DictionaryEntry } from "../../dictionary/interfaces";
import { makeSearchable } from "../../dictionary/unicode";
import { Language } from "../../schemas/languages";

interface Props {
  searchTerm: string;
  language: Language;
}

const List: Component<Props> = (props) => {
  const matches = () => {
    const needle = makeSearchable(props.searchTerm.trim().toLocaleLowerCase());
    return needle
      ? dictionary.filter((entry) => entry.normalized.includes(needle))
      : dictionary;
  };

  return (
    <ul>
      <For each={matches()}>
        {(match) => {
          const t = (
            match.translations as DictionaryEntry["translations"]
          ).find((t) => t.language == props.language);

          if (!t) return null;

          return (
            <li>
              <a href={`#${match.value}`}>
                <dfn id={match.value}>{match.value}</dfn>
              </a>
              : <strong>{t.value}</strong>
              <Show when={t.alternatives!?.length > 0}>
                {" "}
                <em>({t.alternatives!.join(", ")})</em>
              </Show>
              <p>{match.description}</p>
            </li>
          );
        }}
      </For>
    </ul>
  );
};

export default List;
