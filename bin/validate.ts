import { join } from "path";
import { readFile, readdir } from "fs/promises";
import { dictionary } from "../src/schemas/translation";

const translationPath = join(__dirname, "../translations");

(async () => {
  const files = await readdir(translationPath, "utf-8");

  for (const filePath of files) {
    try {
      const content = JSON.parse(
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