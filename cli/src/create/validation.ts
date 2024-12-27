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
    const validationName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Validation?",
      },
    ]);

    if (/^[A-Z]/.test(validationName.name)) {
      const validationFolderPath = path.join(pluginFolderPath, "validations");
      if (!fs.existsSync(validationFolderPath)) {
        fs.mkdirSync(validationFolderPath);
      }
      const validationFilePath = path.join(
        validationFolderPath,
        `${validationName.name.toLowerCase()}.validation.ts`
      );
      if (fs.existsSync(validationFilePath)) {
        ui.updateBottomBar("Validation already exists");
      }
      const tempalteFilePath = path.join(
        findRootFolderPath(__dirname),
        "cli",
        "src",
        "create",
        "templates",
        "Validation.ts"
      );

      try {
        fs.writeFileSync(validationFilePath, tempalteFilePath);
      } catch (error) {
        console.error("Error generating file:", error);
      }
    } else {
      ui.updateBottomBar("Validation name should start with capital letter");
    }
  } else {
    ui.updateBottomBar("Plugin not exists");
  }
};
