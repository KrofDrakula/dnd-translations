export const slugify = (source: string) =>
  encodeURIComponent(source.replace(/\s/g, "-"));
