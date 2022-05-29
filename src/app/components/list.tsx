import { Component, For, Show } from "solid-js";
import { Dictionary, DictionaryEntry } from "../../dictionary/interfaces";
import { makeSearchable } from "../../dictionary/unicode";
import { Language } from "../../schemas/languages";
import { slugify } from "../utilities/strings";

interface Props {
  searchTerm: string;
  language: Language;
  dictionary: Dictionary;
}

const List: Component<Props> = (props) => {
  const matches = () => {
    const needle = makeSearchable(props.searchTerm.trim().toLocaleLowerCase());
    return needle
      ? props.dictionary.filter((entry) => entry.normalized.includes(needle))
      : props.dictionary;
  };

  return (
    <ul>
      <For each={matches()}>
        {(match) => {
          const t = (
            match.translations as DictionaryEntry["translations"]
          ).find((t) => t.language == props.language);

          if (!t) return null;

          const id = slugify(match.value);

          return (
            <li>
              <a href={`#${id}`}>
                <dfn id={id}>{match.value}</dfn>
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
