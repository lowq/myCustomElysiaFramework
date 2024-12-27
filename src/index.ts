import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import framework from "./base/FrameworkBase";
import cors from "@elysiajs/cors";

new Elysia()
  .use(cors())
  .use(framework.frameworkStart)
  .use(swagger())
  .listen(Bun.env.PORT ?? 5000, () => {
    console.log(`Server is running on port ${Bun.env.PORT ?? 3000}`);
  });
