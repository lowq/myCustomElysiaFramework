import FrameworkBase from "../../src/base/FrameworkBase";

export const callCommand = async (nameCommand: string) => {
  await FrameworkBase.onlyBootPlugins();
  for (const plugin of FrameworkBase.plugins) {
    for (const command of plugin.commands) {
      if (command.commandName === nameCommand) {
        await command.function();
        return;
      } else {
      }
    }
  }

  console.error(`Command ${nameCommand} not found.`);

  /* const pluginsDir = path.join(findRootFolderPath(__dirname), "src", "plugins");
  const pluginParentsFolders = fs.readdirSync(pluginsDir);

  pluginParentsFolders.forEach((folderParent) => {
    const pluginFolder = path.join(pluginsDir, folderParent);
    const pluginsFiles = fs.readdirSync(pluginFolder);

    pluginsFiles.forEach((folder) => {
      const commandsDir = path.join(
        pluginsDir,
        folderParent,
        folder,
        "commands"
      );
      const pluginFolder = path.join(pluginsDir, folderParent, folder);
      if (!fs.existsSync(pluginFolder)) return;
      if (!fs.existsSync(commandsDir)) return;
      const commandsFiles = fs.readdirSync(commandsDir);
      commandsFiles.forEach((file) => {
        if (
          file.replace(/\.ts$/, "").toLocaleLowerCase() !==
          nameCommand.toLocaleLowerCase() + ".command"
        ) {
          return;
        }

        const commandpath = path.join(commandsDir, file);

        //console.log(commandpath);

        const module = require(commandpath).default;

        //console.log("%cclisrccli.ts:37 module", "color: #007acc;", module);

        const Command: Command = new module();
        //console.log("%cclisrccli.ts:37 Command", "color: #007acc;", Command);

        const pluginTS = path.join(pluginFolder, "Plugin.ts");

        import(pluginTS).then(async (module) => {
          const firstProperty = Object.keys(module)[0];
          const plugin = new module[firstProperty](folder);
          await plugin.init();

          Command.callFunction();
        });
      });
    });
  }); */
};
