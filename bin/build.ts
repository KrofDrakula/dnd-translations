import { readFile, readdir, writeFile } from "fs/promises";
import { join } from "path";
import yaml from "js-yaml";
import { buildDictionary } from "../src/dictionary";
import { mkdirSync, statSync } from "fs";

const sourcePath = join(__dirname, "../translations");
const distPath = join(__dirname, "../dist");

(async () => {
  const sources = await readdir(sourcePath, "utf-8");
  const sourceData = {};
  for (const file of sources) {
    const content = await readFile(join(sourcePath, file), "utf-8");
    Object.assign(sourceData, yaml.load(content));
  }
  const dictionary = buildDictionary(sourceData);
  if (!statSync(distPath, { throwIfNoEntry: false })) mkdirSync(distPath);
  await writeFile(
    join(distPath, "dictionary.json"),
    JSON.stringify(dictionary, null, 2),
    "utf-8"
  );
})();
