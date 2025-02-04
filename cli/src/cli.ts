import { program } from "commander";
import create from "./create/create.js";
import migrate from "./migrate/migrate.js";
import { callCommand } from "./commands.js";

program.description("CLI to Wezeo framework").version("0.0.1");

program
  .command("command <name>")
  .description("Call command")
  .action(async (name) => {
    await callCommand(name);
    process.exit(0);
  });

program
  .command("create")
  .description("Command to create")
  .action(async () => {
    await create();
    process.exit(0);
  });

program
  .command("migrate")
  .description("Command to migrate database")
  .action(async () => {
    await migrate();
    process.exit(0);
  });

export default program;