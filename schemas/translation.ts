import * as z from "zod";
import { validLanguages } from "./languages";
import { countries, validCountries } from "./countries";

export const language = z.object({
  language: z.enum(validLanguages),
  country: z.enum(validCountries).optional(),
});

export const translation = z
  .object({
    value: z.string(),
    alternatives: z.array(z.string()).min(1).optional(),
  })
  .merge(language)
  .strict();

type t = typeof translation;

export const entry = z
  .object({
    value: z.string().min(1),
    description: z.string().min(1).optional(),
    translations: z.array(translation),
  })
  .merge(language)
  .strict();

const p = entry.parse({
  value: "strength",
  language: "en",
  translations: [{ language: "sl", value: "moč" }],
});
