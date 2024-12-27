import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { findRootFolderPath } from "../util/findRootFolderPath";
import moment from "moment";
const ui = new inquirer.ui.BottomBar();

export default async (pluginParentName: string, pluginName: string) => {
  const pluginFolderName = pluginName.toLowerCase();
  const pluginParentFolderName = pluginParentName.toLowerCase();

  const pluginFolderPath = path.join(
    findRootFolderPath(__dirname),
    "src",
    "plugins",
    pluginParentFolderName,
    pluginFolderName
  );
  if (fs.existsSync(pluginFolderPath)) {
    const migration = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Migration?",
      },
    ]);

    const migrationFolderPath = path.join(pluginFolderPath, "migrations");
    if (!fs.existsSync(migrationFolderPath)) {
      fs.mkdirSync(migrationFolderPath);
    }
    const tempalteFilePath = path.join(
      findRootFolderPath(__dirname),
      "cli",
      "src",
      "create",
      "templates",
      "Migration.ts"
    );

    const replacements = {
      CLASS_NAME: migration.name, // Zmeňte toto podľa potreby
    };

    // Nahradenie všetkých placeholderov
    let content = fs.readFileSync(tempalteFilePath, "utf8");

    // Nahradenie všetkých placeholderov
    for (const [key, value] of Object.entries(replacements)) {
      const placeholder = new RegExp(`__${key}__`, "g");
      content = content.replace(placeholder, String(value));
    }
    const migrationFilePath = path.join(
      migrationFolderPath,
      `${moment().format(
        "YYYY_MMDD"
      )}_${migration.name.toLowerCase()}.migration.ts`
    );
    if (fs.existsSync(migrationFilePath)) {
      ui.updateBottomBar("Migration already exists");
    }

    fs.writeFileSync(migrationFilePath, content);

    return true;
  } else {
    ui.updateBottomBar("Plugin name should start with capital letter");
    return false;
  }
};
