import * as z from "zod";
import { entry } from "../schemas/translation";

export type Search = (query: string) => Dictionary;

export interface DictionaryEntry {
  value: string;
  normalized: string;
  description: string;
  translations: z.infer<typeof entry>["translations"];
}

export type Dictionary = DictionaryEntry[];
