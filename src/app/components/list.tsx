import { Component, on, For, Show, createEffect } from "solid-js";
import type { Dictionary, DictionaryEntry } from "../../dictionary/interfaces";
import { makeSearchable } from "../../dictionary/unicode";
import type { Language } from "../../schemas/languages";
import { slugify } from "../utilities/strings";
import styles from "./list.module.css";

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

  createEffect(
    on(
      () => props.dictionary,
      () => {
        console.log({ dictionary: props.dictionary });
        if (!(props.dictionary && window.location.hash)) return;
        const target = document.getElementById(window.location.hash.slice(1));
        console.log("wha?", window.location.hash.slice(1), target);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    )
  );

  return (
    <ul class={styles.list}>
      <For each={matches()}>
        {(match) => {
          const t = (
            match.translations as DictionaryEntry["translations"]
          ).find((t) => t.language == props.language);

          if (!t) return null;

          const id = slugify(match.value);

          return (
            <li id={id}>
              <a href={`#${id}`}>
                <dfn>{match.value}</dfn>
              </a>
              : <strong>{t.value}</strong>
              <Show when={t.alternatives!?.length > 0}>
                {" "}
                <em>({t.alternatives!.join(", ")})</em>
              </Show>
              {match.description ? <p>{match.description}</p> : null}
            </li>
          );
        }}
      </For>
    </ul>
  );
};

export default List;
