import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { findRootFolderPath } from "../util/findRootFolderPath";
const ui = new inquirer.ui.BottomBar();

export default async ( pluginName: string) => {
  const pluginFolderName = pluginName.toLowerCase();

  const pluginFolderPath = path.join(
    findRootFolderPath(__dirname),
    "src",
    "plugins",
    pluginFolderName
  );
  if (fs.existsSync(pluginFolderPath)) {
    const commandName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Command?",
      },
    ]);

    if (/^[A-Z]/.test(commandName.name)) {
      const commandFolderPath = path.join(pluginFolderPath, "commands");
      if (!fs.existsSync(commandFolderPath)) {
        fs.mkdirSync(commandFolderPath);
      }
      const controllerFilePath = path.join(
        commandFolderPath,
        `${commandName.name.toLowerCase()}.command.ts`
      );
      if (fs.existsSync(controllerFilePath)) {
        ui.updateBottomBar("Command already exists");
      }
      const replacements = {
        CLASS_NAME: commandName.name, // Zmeňte toto podľa potreby
        COMMAND_NAME:
          commandName.name.charAt(0).toLowerCase() + commandName.name.slice(1), // Zmeňte toto podľa potreby
      };
      const tempalteFilePath = path.join(
        findRootFolderPath(__dirname),
        "cli",
        "src",
        "create",
        "templates",
        "Command.ts"
      );

      // Nahradenie všetkých placeholderov
      try {
        let content = fs.readFileSync(tempalteFilePath, "utf8");

        // Nahradenie všetkých placeholderov
        for (const [key, value] of Object.entries(replacements)) {
          const placeholder = new RegExp(`__${key}__`, "g");
          content = content.replace(placeholder, String(value));
        }

        fs.writeFileSync(controllerFilePath, content);
      } catch (error) {
        console.error("Error generating file:", error);
      }
    } else {
      ui.updateBottomBar("Command name should start with capital letter");
    }
  } else {
    ui.updateBottomBar("Plugin not exists");
  }
};
