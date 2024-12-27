import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { findRootFolderPath } from "../util/findRootFolderPath";
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
    const controllerName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Controller?",
      },
    ]);

    if (/^[A-Z]/.test(controllerName.name)) {
      const controllerFolderPath = path.join(pluginFolderPath, "controllers");
      if (!fs.existsSync(controllerFolderPath)) {
        fs.mkdirSync(controllerFolderPath);
      }
      const controllerFilePath = path.join(
        controllerFolderPath,
        `${controllerName.name.toLowerCase()}.controller.ts`
      );
      if (fs.existsSync(controllerFilePath)) {
        ui.updateBottomBar("Controller already exists");
      }
      const replacements = {
        CLASS_NAME: controllerName.name, // Zmeňte toto podľa potreby
      };
      const tempalteFilePath = path.join(
        findRootFolderPath(__dirname),
        "cli",
        "src",
        "create",
        "templates",
        "Controller.ts"
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
      ui.updateBottomBar("Controller name should start with capital letter");
    }
  } else {
    ui.updateBottomBar("Plugin not exists");
  }
};
