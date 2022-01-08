import * as z from "zod";
import { entry, translation } from "../schemas/translation";

export type Search = (query: string) => DictionaryEntry[];

export interface Normalized {
  normalized: string;
}

export type DictionaryEntry = z.infer<typeof entry> & Normalized;
