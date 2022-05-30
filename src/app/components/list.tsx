import { Component, on, For, Show, createEffect, createMemo } from "solid-js";
import type { Dictionary, DictionaryEntry } from "../../dictionary/interfaces";
import { makeSearchable } from "../../dictionary/unicode";
import type { Language } from "../../schemas/languages";
import { upsert } from "../utilities/collections";
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
    const results = needle
      ? props.dictionary.filter((entry) => entry.normalized.includes(needle))
      : props.dictionary ?? [];

    const grouped: Map<string, DictionaryEntry[]> = new Map();
    for (const entry of results) {
      upsert(
        grouped,
        entry.value[0],
        (values) => {
          values.push(entry);
          return values;
        },
        () => []
      );
    }
    return grouped;
  };

  createEffect(() => {
    if (!(props.dictionary && window.location.hash)) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <For each={[...matches().entries()]}>
        {([group, matches]) => {
          return (
            <>
              <h2 class={styles.group}>{group.toLocaleUpperCase()}</h2>
              <ul class={styles.list}>
                <For each={matches}>
                  {(match) => {
                    const t = (
                      match.translations as DictionaryEntry["translations"]
                    ).find((t) => t.language == props.language);

                    const id = slugify(match.value);

                    return (
                      <li id={id}>
                        <a href={`#${id}`}>
                          <dfn>{match.value}</dfn>
                        </a>
                        : <strong>{t?.value ?? "?"}</strong>
                        <Show when={t?.alternatives?.length > 0}>
                          {" "}
                          <em>({t?.alternatives.join(", ")})</em>
                        </Show>
                        <Show when={match.description}>
                          <p class={styles.description}>{match.description}</p>
                        </Show>
                      </li>
                    );
                  }}
                </For>
              </ul>
            </>
          );
        }}
      </For>
    </>
  );
};

export default List;
