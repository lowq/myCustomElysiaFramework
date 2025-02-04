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
    const utilName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Util?",
      },
    ]);

    if (/^[A-Z]/.test(utilName.name)) {
      const utilFolderPath = path.join(pluginFolderPath, "utils");
      if (!fs.existsSync(utilFolderPath)) {
        fs.mkdirSync(utilFolderPath);
      }
      const utilFilePath = path.join(
        utilFolderPath,
        `${utilName.name.toLowerCase()}.util.ts`
      );
      if (fs.existsSync(utilFilePath)) {
        ui.updateBottomBar("Util already exists");
      }
      fs.writeFileSync(utilFilePath, ``);
    } else {
      ui.updateBottomBar("Plugin not exists");
    }
  } else {
    ui.updateBottomBar("Plugin name should start with capital letter");
  }
};
