import * as z from "zod";
import { validLanguages } from "./languages";
import { validCountries } from "./countries";

export const language = z.object({
  language: z.enum(validLanguages),
  country: z.enum(validCountries).optional()
});

export const translation = z
  .object({
    value: z.string(),
    alternatives: z.array(z.string()).min(1).optional()
  })
  .merge(language)
  .strict();

export const entry = z
  .object({
    value: z.string().min(1),
    description: z.string().min(1).optional(),
    translations: z.array(translation).min(1)
  })
  .strict();

export const dictionary = z.array(entry);

export type SourceEntry = z.infer<typeof entry>;
