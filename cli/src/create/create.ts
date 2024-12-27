import inquirer from "inquirer";
import plugin from "./plugin";
import controller from "./controller";
import service from "./service";
import middleware from "./middleware";
import migration from "./migration";
import error from "./error";
import util from "./util";
import command from "./command";
import * as path from "path";
import { findRootFolderPath } from "../util/findRootFolderPath";
import * as fs from "fs";
import validation from "./validation";

const ui = new inquirer.ui.BottomBar();

export default async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "What you want to create?",
      choices: [
        "Plugin",
        "Controller",
        "Service",
        "Middleware",
        "Util",
        "Migration",
        "Error",
        "Command",
        "Validation",
      ],
    },
  ]);

  const pluginParentName = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Name for plugin parent folder?",
    },
  ]);

  if (/^[A-Z]/.test(pluginParentName.name)) {
    const pluginParentFolderName = pluginParentName.name.toLowerCase();

    const pluginsFolderPath = path.join(
      findRootFolderPath(__dirname),
      "src",
      "plugins"
    );
    if (!fs.existsSync(pluginsFolderPath)) {
      fs.mkdirSync(pluginsFolderPath);
    }

    const pluginParentFolderPath = path.join(
      findRootFolderPath(__dirname),
      "src",
      "plugins",
      pluginParentFolderName
    );

    if (!fs.existsSync(pluginParentFolderPath)) {
      fs.mkdirSync(pluginParentFolderPath);
    }

    const pluginName = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What the name of the plugin?",
      },
    ]);

    if (/^[A-Z]/.test(pluginName.name)) {
      if (answer.type === "Plugin") {
        await plugin(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Controller") {
        await controller(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Service") {
        await service(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Middleware") {
        await middleware(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Util") {
        await util(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Migration") {
        await migration(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Error") {
        await error(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Command") {
        await command(pluginParentName.name, pluginName.name);
      }
      if (answer.type === "Validation") {
        await validation(pluginParentName.name, pluginName.name);
      }
    } else {
      ui.updateBottomBar("Plugin name should start with capital letter");
    }
  } else {
    ui.updateBottomBar("Plugin parent name should start with capital letter");
  }

  process.exit(0);
};
