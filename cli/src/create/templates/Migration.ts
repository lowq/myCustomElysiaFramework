import Migration from "../../../../base/Migration";

export default class ModelMigration extends Migration {
  constructor(migrationName: string, pluginFolderPath: string) {
    super(migrationName, pluginFolderPath, "modelName");
  }
}
