import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { findRootFolderPath } from "../util/findRootFolderPath";
const ui = new inquirer.ui.BottomBar();

export default async (pluginParentName: string, pluginName: string) => {
  const pluginFolderName = pluginName.toLowerCase();
  const pluginParentFolderName = pluginParentName.toLowerCase();

  const pluginsFolderPath = path.join(
    findRootFolderPath(__dirname),
    "src",
    "plugins"
  );
  if (!fs.existsSync(pluginsFolderPath)) {
    fs.mkdirSync(pluginsFolderPath);
  }

  const pluginFolderPath = path.join(
    findRootFolderPath(__dirname),
    "src",
    "plugins",
    pluginParentFolderName,
    pluginFolderName
  );

  const folders = await inquirer.prompt([
    {
      type: "checkbox",
      name: "folders",
      message: "Which folders you want to create?",
      choices: [
        "controllers",
        "configs",
        "services",
        "migrations",
        "types",
        "middlewares",
        "utils",
        "validations",
        "commands",
      ],
    },
  ]);

  if (!fs.existsSync(pluginFolderPath)) {
    fs.mkdirSync(pluginFolderPath);

    folders.folders.forEach((folder: string) => {
      const folderPath = path.join(pluginFolderPath, folder);
      fs.mkdirSync(folderPath);
    });

    const folderPath = path.join(pluginFolderPath, "prisma");
    fs.mkdirSync(folderPath);

    const pluginFilePath = path.join(pluginFolderPath, "Plugin.ts");

    const tempalteFilePath = path.join(
      findRootFolderPath(__dirname),
      "cli",
      "src",
      "create",
      "templates",
      "Plugin.ts"
    );

    const replacements = {
      CLASS_NAME: pluginName, // Zmeňte toto podľa potreby
    };

    // Nahradenie všetkých placeholderov
    try {
      let content = fs.readFileSync(tempalteFilePath, "utf8");

      // Nahradenie všetkých placeholderov
      for (const [key, value] of Object.entries(replacements)) {
        const placeholder = new RegExp(`__${key}__`, "g");
        content = content.replace(placeholder, String(value));
      }

      fs.writeFileSync(pluginFilePath, content);
    } catch (error) {
      console.error("Error generating file:", error);
    }
    const routesFilePath = path.join(pluginFolderPath, "routes.ts");

    const routesTemplateFilePath = path.join(
      findRootFolderPath(__dirname),
      "cli",
      "src",
      "create",
      "templates",
      "routes.ts"
    );

    const routesContent = fs.readFileSync(routesTemplateFilePath, "utf8");

    fs.writeFileSync(routesFilePath, routesContent);

    ui.updateBottomBar("Creating plugin...");

    for (let i = 0; i <= 10; i++) {
      ui.updateBottomBar(`Creating plugin... ${i * 10}%`);
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    ui.updateBottomBar("Done");
  } else {
    ui.updateBottomBar("Plugin already exists");
  }
}; 
