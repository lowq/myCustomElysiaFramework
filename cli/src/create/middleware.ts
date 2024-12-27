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
    const middlewareName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Middleware?",
      },
    ]);

    if (/^[A-Z]/.test(middlewareName.name)) {
      const middlewareFolderPath = path.join(pluginFolderPath, "middlewares");
      if (!fs.existsSync(middlewareFolderPath)) {
        fs.mkdirSync(middlewareFolderPath);
      }
      const middlewareFilePath = path.join(
        middlewareFolderPath,
        `${middlewareName.name.toLowerCase()}.middleware.ts`
      );
      if (fs.existsSync(middlewareFilePath)) {
        ui.updateBottomBar("Middleware already exists");
      }
      fs.writeFileSync(middlewareFilePath, "");
    } else {
      ui.updateBottomBar("Middleware name should start with capital letter");
    }
  } else {
    ui.updateBottomBar("Plugin not exists");
  }
};
