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
    const serviceName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Service?",
      },
    ]);

    if (/^[A-Z]/.test(serviceName.name)) {
      const serviceFolderPath = path.join(pluginFolderPath, "services");
      if (!fs.existsSync(serviceFolderPath)) {
        fs.mkdirSync(serviceFolderPath);
      }
      const serviceFilePath = path.join(
        serviceFolderPath,
        `${serviceName.name.toLowerCase()}.service.ts`
      );
      if (fs.existsSync(serviceFilePath)) {
        ui.updateBottomBar("Service already exists");
      }
      fs.writeFileSync(serviceFilePath, ``);
    } else {
      ui.updateBottomBar("Service name should start with capital letter");
    }
  } else {
    ui.updateBottomBar("Plugin not exists");
  }
};
