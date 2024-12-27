import * as fs from "fs";
import * as path from "path";
import { findRootFolderPath } from "./util/findRootFolderPath";
import Events from "./Events";
import prismaClient from "./config/prismaClient";
export default class Migration {
  /**
   * The Prisma schema string used for database migrations.
   */
  prismaSchema: Buffer | undefined;

  /**
   * The migration name.
   */
  migrationName: string = "";

  /**
   * The model name.
   */
  modelName: string = "";

  /**
   * Creates an instance of Migration.
   * @param {PrismaClient} prismaSchema - The Prisma schema instance.
   */
  constructor(
    migrationName: string,
    pluginFolderPath: string,
    modelName: string
  ) {
    this.migrationName = migrationName;
    this.modelName = modelName;

    if (this.modelName === "") {
      console.log(
        "Migrations: " + this.migrationName + " doesnt have define model."
      );
    } else {
      const prismaSchemaPath = path.join(
        pluginFolderPath,
        `prisma/${this.modelName}.prisma`
      );
      this.prismaSchema = fs.readFileSync(prismaSchemaPath);
    }
  }

  /**
   * Migrate the database.
   */
  migrate() {}

  /**
   * Compare the Prisma schema.
   */
  comparePrismaSchema(prismaSchemasArray: string[]): boolean {
    for (const prismaSchema of prismaSchemasArray) {
      if (prismaSchema !== this.modelName + ".prisma") {
        return true;
      }
      const prismaSchemaPath = path.join(
        findRootFolderPath(__dirname),
        "prisma",
        "models",
        prismaSchema
      );
      const prismaSchemaFile = fs.readFileSync(prismaSchemaPath);
      if (prismaSchemaFile !== this.prismaSchema) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
