import { findRootFolderPath } from "../util/findRootFolderPath";
import * as path from "path";
import inquirer from "inquirer";
import * as fs from "fs";
import FrameworkBase from "../../../src/base/FrameworkBase";
import { PrismaClient } from "../../../prisma/client";

interface ModelPath {
  path: string;
  migrationName: string;
  pluginName: string;
}

const line = `//-----------------------------------------------------------------------------------------------\n`;

export default async () => {
  try {
    console.log("Migrating database");
    /* const pluginsFolderPath = path.join(
    findRootFolderPath(__dirname),
    "src",
    "plugins"
  );
  let folderPaths: string[] = [];
  const folders = fs.readdirSync(pluginsFolderPath);
  folders.forEach((element) => {
    const pluginsParentFolderPath = path.join(
      findRootFolderPath(__dirname),
      "src",
      "plugins",
      element
    );
    const pluginParentfolders = fs.readdirSync(pluginsParentFolderPath);
    pluginParentfolders.forEach((folder) => {
      const pluginPath = path.join(pluginsParentFolderPath, folder);
      folderPaths.push(pluginPath);
    });
  }); */

    const baseFilePath = path.join(
      findRootFolderPath(__dirname),
      "prisma",
      "base.prisma"
    );

    const baseFile = fs.readFileSync(baseFilePath);

    const schemaFilePath = path.join(
      findRootFolderPath(__dirname),
      "prisma",
      "schema.prisma"
    );

    fs.writeFileSync(schemaFilePath, baseFile.toString());

    const prismaSchemaFolder = path.join(
      findRootFolderPath(__dirname),
      "prisma"
    );

    console.log("Connecting to database");

    let prisma = new PrismaClient();

    try {
      await prisma.$connect();
      await prisma.$queryRaw`SELECT 1`;
    } catch (error) {
      try {
        Bun.spawnSync([`prisma`, `generate`], {
          cwd: prismaSchemaFolder,
        });
      } catch (error) {
        console.error("Database connection failed");
        console.log("");
        console.error(
          "Check your DATABASE_URL in .env file or check if database is running"
        );
      }
      console.error("Database connection failed");
      return;
    }

    console.log("Connected to database");

    prisma = new PrismaClient();

    await prisma.$executeRaw`
    CREATE TABLE IF NOT EXISTS Migrations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    const allMigrations: [
      {
        id: number;
        name: string;
        created_at: Date;
      }
    ] = await prisma.$queryRaw`SELECT * FROM Migrations`;

    const allModelsPath = path.join(
      findRootFolderPath(__dirname),
      "prisma",
      "models"
    );

    if (!fs.existsSync(allModelsPath)) {
      fs.mkdirSync(allModelsPath);
    }

    const allModels = fs.readdirSync(allModelsPath);

    const modelsPaths: ModelPath[] = [];

    let countMigratiosn = 0;

    await FrameworkBase.migration();
    for (const plugin of FrameworkBase.plugins) {
      console.log(plugin.constructor.name);
      console.log("Migrations: ");
      for (const migrations of plugin.migrations) {
        const modelPath = path.join(
          allModelsPath,
          `${migrations.modelName}.prisma`
        );
        const migrationFromDB = allMigrations.find(
          (m) => m.name === migrations.migrationName
        );
        if (!migrationFromDB) {
          migrations.migrate();
          if (migrations.comparePrismaSchema(allModels) === true) {
            if (migrations.prismaSchema !== undefined) {
              countMigratiosn++;
              console.log("        " + migrations.migrationName);
              fs.writeFileSync(modelPath, migrations.prismaSchema!.toString());
              modelsPaths.push({
                path: modelPath,
                migrationName: migrations.migrationName,
                pluginName: plugin.constructor.name,
              });
              //await prisma.$queryRaw`INSERT INTO Migrations (name) VALUES (${migrations.migrationName})`;
            }
          }
        } else {
          modelsPaths.push({
            path: modelPath,
            migrationName: migrationFromDB.name,
            pluginName: plugin.constructor.name,
          });
        }
      }
    }

    const groupedByPluginName = modelsPaths.reduce((acc, model) => {
      const { pluginName } = model;
      if (!acc[pluginName]) {
        acc[pluginName] = [];
      }
      acc[pluginName].push(model);
      return acc;
    }, {} as Record<string, ModelPath[]>);

    // Get the keys (plugin names) from the grouped object
    const pluginNames = Object.keys(groupedByPluginName);

    if (countMigratiosn === 0) {
      console.log("No migrations to apply");
      return;
    }

    for (let i = 0; i < pluginNames.length; i++) {
      const pluginName = pluginNames[i];
      const migrationsInfo = `// Migrations from ${pluginName} plugin \n`;
      const pluginInfo = Buffer.concat([
        Buffer.from("\n"),
        Buffer.from(line),
        Buffer.from(migrationsInfo),
        Buffer.from(line),
        Buffer.from("\n"),
      ]);
      fs.appendFileSync(schemaFilePath, pluginInfo.toString());
      const models = groupedByPluginName[pluginName];
      for (const model of models) {
        const prismaFile = fs.readFileSync(model.path);
        const comment = `// Schema from ${path.basename(
          model.path
        )} model and migration ${model.migrationName} \n`;
        const modifiedPrismaFile = Buffer.concat([
          Buffer.from("\n"),
          Buffer.from(line),
          Buffer.from(comment),
          Buffer.from(line),
          Buffer.from("\n"),
          prismaFile,
        ]);

        fs.appendFileSync(schemaFilePath, modifiedPrismaFile.toString());
      }
    }

    new Promise((resolve) => setTimeout(resolve, 1000));

    const proc = Bun.spawnSync([`prisma`, `format`], {
      cwd: prismaSchemaFolder,
    });

    console.log(proc.stdout.toString());
    console.log(proc.stderr.toString());
    if (proc.exitCode === 1) {
      return;
    }

    const proc2 = Bun.spawnSync([`prisma`, `generate`], {
      cwd: prismaSchemaFolder,
    });

    console.log(proc2.stdout.toString());
    console.log(proc2.stderr.toString());
    if (proc2.exitCode === 1) {
      return;
    }

    const dbPush = await inquirer.prompt([
      {
        name: "migration",
        type: "confirm",
        message: "Want push database?",
      },
    ]);

    if (dbPush.migration === true) {
      if (Bun.env.ENVIRMONET === "dev") {
        console.log("Migrating dev");
        const proc3 = Bun.spawnSync(
          [`prisma`, `db`, `push`, `--accept-data-loss`],
          {
            cwd: prismaSchemaFolder,
          }
        );
        console.log(proc3.stdout.toString());
        console.log(proc3.stderr.toString());
      } else {
        const proc3 = Bun.spawnSync(
          [`prisma`, `db`, `push`, `--accept-data-loss`],
          {
            cwd: prismaSchemaFolder,
          }
        );
        console.log(proc3.stdout.toString());
        console.log(proc3.stderr.toString());
      }
    }
  } catch (error) {
    console.error(error);
  }
};