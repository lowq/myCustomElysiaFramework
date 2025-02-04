import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { findRootFolderPath } from "../util/findRootFolderPath";
const ui = new inquirer.ui.BottomBar();

export default async (pluginName: string) => {
  const pluginFolderName = pluginName.toLowerCase();

  const pluginFolderPath = path.join(
    findRootFolderPath(__dirname),
    "src",
    "plugins",
    pluginFolderName
  );
  if (fs.existsSync(pluginFolderPath)) {
    const errorrName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Error?",
      },
    ]);

    const errorsFolderPath = path.join(pluginFolderPath, "errors");
    if (!fs.existsSync(errorsFolderPath)) {
      fs.mkdirSync(errorsFolderPath);
    }
    const errorFilePath = path.join(
      errorsFolderPath,
      `${errorrName.name.toUpperCase()}.ts`
    );
    if (fs.existsSync(errorFilePath)) {
      ui.updateBottomBar("Error already exists");
    }
    const replacements = {
      CLASS_NAME: errorrName.name.toUpperCase(), // Zmeňte toto podľa potreby
    };
    const tempalteFilePath = path.join(
      findRootFolderPath(__dirname),
      "cli",
      "src",
      "create",
      "templates",
      "Error.ts"
    );

    // Nahradenie všetkých placeholderov
    try {
      let content = fs.readFileSync(tempalteFilePath, "utf8");

      // Nahradenie všetkých placeholderov
      for (const [key, value] of Object.entries(replacements)) {
        const placeholder = new RegExp(`__${key}__`, "g");
        content = content.replace(placeholder, String(value));
      }

      fs.writeFileSync(errorFilePath, content);
    } catch (error) {
      console.error("Error generating file:", error);
    }
  } else {
    ui.updateBottomBar("Plugin not exists");
  }
};
