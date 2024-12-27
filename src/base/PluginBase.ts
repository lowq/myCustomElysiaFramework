import Elysia, { ValidationError } from "elysia";
import fs from "fs";
import path from "path";
import Configs from "./Configs";
import Events from "./Events";
import Command from "./Command";
import Migration from "./Migration";
export default class PluginBase {
  commands: Command[] = [];
  migrations: Migration[] = [];

  /**
   * Creates an instance of PluginBase.
   */
  constructor() {}

  /**
   * Initializes the plugin.
   * @param {Elysia} app - The Elysia app instance.
   */
  async init() {
    console.log(`Initializing ${this.constructor.name}`);
    this.boot();
    Events.fire(`${this.constructor.name.toLowerCase()}.onBoot`);
    this.register();
    Events.fire(`${this.constructor.name.toLowerCase()}.onRegister`);
    this.initConfigs();
    this.initCommands();
    this.initMigrations();
    this.start();
    Events.fire(`${this.constructor.name.toLowerCase()}.onStart`);
    this.run();
    Events.fire(`${this.constructor.name.toLowerCase()}.onRun`);
  }

  async migrate() {
    this.initMigrations();
  }

  /**
   * Boot the plugin.
   */
  boot() {}

  /**
   * Registers the plugin.
   */
  register() {}

  /**
   * Initializes the plugin routes.
   */
  async initRoutes(app: Elysia) {
    const routesPath = path.join(
      `${path.dirname(
        __dirname
      )}/plugins/${this.constructor.name.toLowerCase()}`,
      "routes.ts"
    );
    if (fs.existsSync(routesPath)) {
      const module = await import(routesPath);
      const firstProperty = Object.keys(module)[0];
      const pluginInstance = module[firstProperty];
      app.group(`/api/${this.constructor.name.toLowerCase()}`, (app) =>
        app.use(pluginInstance)
      );
    }
  }

  /**
   * Initializes the plugin commands.
   */
  private initCommands() {
    const commandsPath = path.join(
      `${path.dirname(
        __dirname
      )}/plugins/${this.constructor.name.toLowerCase()}`,
      "commands"
    );
    if (fs.existsSync(commandsPath)) {
      const files = fs.readdirSync(commandsPath);

      files.forEach((file) => {
        const commandPath = path.join(
          `${path.dirname(
            __dirname
          )}/plugins/${this.constructor.name.toLowerCase()}/commands`,
          file
        );

        const commandClass = require(commandPath).default;
        this.commands.push(new commandClass());
      });
    }
  }

  /**
   * Initializes the plugin migrations.
   */
  private initMigrations() {
    const migrationsPath = path.join(
      `${path.dirname(
        __dirname
      )}/plugins/${this.constructor.name.toLowerCase()}`,
      "migrations"
    );
    if (fs.existsSync(migrationsPath)) {
      const files = fs.readdirSync(migrationsPath);

      files.forEach((file) => {
        const migrationPath = path.join(
          `${path.dirname(
            __dirname
          )}/plugins/${this.constructor.name.toLowerCase()}/migrations`,
          file
        );
        const fileName = file.split(".")[0];

        const pluginFolderPath = path.join(
          `${path.dirname(
            __dirname
          )}/plugins/${this.constructor.name.toLowerCase()}`
        );

        const migration = require(migrationPath).default;
        this.migrations.push(new migration(fileName, pluginFolderPath));
      });
    }
  }

  /**
   * Initializes the plugin configurations.
   */
  private initConfigs() {
    const configPath = path.join(
      `${path.dirname(
        __dirname
      )}/plugins/${this.constructor.name.toLowerCase()}`,
      "configs"
    );
    if (fs.existsSync(configPath)) {
      const files = fs.readdirSync(configPath);

      files.forEach((file) => {
        const configPath = path.join(
          `${path.dirname(
            __dirname
          )}/plugins/${this.constructor.name.toLowerCase()}/configs`,
          file
        );
        const fileName = file.split(".")[0];

        const config = require(configPath);
        Configs.setConfigValue(
          this.constructor.name.toLowerCase(),
          fileName,
          config
        );
      });
    }
  }

  /**
   * Handles errors in the plugin.
   */
  errorHandling(): {
    errors: ErrorConstructor[];
    errorFunction: (
      code: string,
      error: Error
    ) => { status: number; response: unknown } | void;
  } {
    return {
      errors: [],
      errorFunction: (code: string, error: Error) => {},
    };
  }

  start() {}
  run() {}
}
