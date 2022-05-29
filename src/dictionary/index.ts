import type { dictionary } from "../schemas/translation";
import type { Dictionary, Search } from "./interfaces";
import { makeSearchable } from "./unicode";
import type * as z from "zod";

export const createSearch =
  (dictionary: Dictionary): Search =>
  (query) => {
    const normalizedQuery = makeSearchable(query.trim());
    return dictionary.filter((entry) =>
      entry.normalized.includes(normalizedQuery)
    );
  };

export const buildDictionary = (
  source: z.infer<typeof dictionary>
): Dictionary =>
  Object.entries(source)
    .map(([value, { description, translations }]) => ({
      value,
      normalized: makeSearchable(value),
      description: description ?? "",
      translations
    }))
    .sort((a, b) => a.value.localeCompare(b.value, "en-US"));
