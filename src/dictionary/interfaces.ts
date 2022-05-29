import type * as z from "zod";
import type { entry } from "../schemas/translation";

export type Search = (query: string) => Dictionary;

export interface DictionaryEntry {
  value: string;
  normalized: string;
  description: string;
  translations: z.infer<typeof entry>["translations"];
}

export type Dictionary = DictionaryEntry[];
