import { join } from "path";
import { readFile, readdir } from "fs/promises";
import { dictionary } from "../src/schemas/translation";
import * as yaml from "js-yaml";

const translationPath = join(__dirname, "../translations");

(async () => {
  const files = await readdir(translationPath, "utf-8");

  for (const filePath of files) {
    try {
      const content = yaml.load(
        await readFile(join(translationPath, filePath), "utf-8")
      );
      dictionary.parse(content);
    } catch (err) {
      console.error(`Error in ${filePath}:`, err);
      process.exit(1);
    }
  }

  console.log(`✅ Data is valid`);
})();
