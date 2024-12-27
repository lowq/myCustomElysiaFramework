import Elysia from "elysia";
import FrameworkBase from "../../src/base/FrameworkBase";

export const routeList = async () => {
  const app = new Elysia();
  await FrameworkBase.loadOnlyRoutes(app);
  app.routes.forEach((route) => {
    console.log(`Method: ${route.method} path: ${route.path}`);
  });
};
