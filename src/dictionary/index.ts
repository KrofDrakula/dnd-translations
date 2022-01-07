import { SourceEntry } from "../schemas/translation";
import { DictionaryEntry, Search } from "./interfaces";
import { makeSearchable } from "./unicode";

export const createSearch =
  (dictionary: DictionaryEntry[]): Search =>
  (query) => {
    const normalizedQuery = makeSearchable(query.trim());
    return dictionary.filter((entry) =>
      entry.normalized.includes(normalizedQuery)
    );
  };

export const buildDictionary = (source: SourceEntry[]): DictionaryEntry[] => {
  return source.map(({ value, ...rest }) => ({
    ...rest,
    value,
    normalized: makeSearchable(value)
  }));
};
