import { readFile, readdir, writeFile, stat, mkdir } from "fs/promises";
import { join } from "path";
import yaml from "js-yaml";
import { buildDictionary } from "../src/dictionary";

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
  await stat(distPath).catch(() => mkdir(distPath));
  await writeFile(
    join(distPath, "dictionary.json"),
    JSON.stringify(dictionary, null, 2),
    "utf-8"
  );
  console.log(`Wrote ${dictionary.length} entries.`);
})();
