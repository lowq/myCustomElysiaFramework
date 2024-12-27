import * as fs from "fs";
import * as path from "path";
import Elysia from "elysia";
import PluginBase from "./PluginBase";
import { ERROR } from "./errors/ERROR";
import Logger, { LogType } from "./Logger";
import { RedirectResponse, WApiResource } from "./Response";
import { AUTHENTICATE_ERROR } from "../plugins/user/errors/AUTHENTICATE_ERROR";
import { getLastCachedError } from "./errors/lastCachedError";

class Framework {
  protected app?: Elysia;
  plugins: PluginBase[] = [];

  constructor() {}

  frameworkStart = async (app: Elysia) => {
    await this.loadPlugins();
    await this.baseErrorHandling(app);
    const version = require("../../package.json").version;
    app.get(
      "/api/version",
      () => {
        return version;
      },
      {
        detail: {
          tags: ["Base"],
          summary: "Get version",
        },
      }
    );
    app.mapResponse(({ response, path, redirect }): any => {
      if (response instanceof RedirectResponse) {
        return redirect(response.url);
      }
      if (response instanceof File) {
        return response.stream();
      }
      if (response instanceof ReadableStream) {
        return response;
      }
      if (
        Array.isArray(response) &&
        response.length > 0 &&
        response.every((item) => item instanceof File)
      ) {
        return response;
      }
      let localResponse = response;
      if (path === "/swagger" || path === "/swagger/json") {
        return localResponse;
      }
      if (response instanceof WApiResource) {
        return response;
      } else {
        const responseNew = WApiResource.success("", response);
        return responseNew;
      }
    });
    for (const plugin of this.plugins) {
      await plugin.initRoutes(app);
    }
    this.app = app;
    return app;
  };

  loadAllPlugins = async () => {
    const pluginsDir = path.join(__dirname, "../plugins");
    const pluginFolders = fs.readdirSync(pluginsDir);

    for (const folder of pluginFolders) {
      const pluginPath = path.join(pluginsDir, folder, "Plugin.ts");

      const module = await import(pluginPath);
      const firstProperty = Object.keys(module)[0];
      const plugin = new module[firstProperty]();
      this.plugins.push(plugin);
    }
  };

  migration = async () => {
    await this.loadAllPlugins();
    for (const plugin of this.plugins) {
      await plugin.migrate();
    }
  };

  loadPlugins = async () => {
    await this.loadAllPlugins();
    for (const plugin of this.plugins) {
      await plugin.init();
    }
  };

  baseErrorHandling = async (app: Elysia) => {
    const customErrorFunctions: ((
      code: string,
      error: Error
    ) => { status: number; response: any } | void)[] = [];

    const errors: ErrorConstructor[] = [ERROR as unknown as ErrorConstructor];

    for (const plugin of this.plugins) {
      customErrorFunctions.push(plugin.errorHandling().errorFunction);
      errors.push(...plugin.errorHandling().errors);
    }

    const errorMap: Record<string, { prototype: Error }> = {};
    for (const error of errors) {
      errorMap[error.name] = { prototype: error.prototype };
    }

    app
      .error({
        ...errorMap,
      })
      .onError(({ code, set, error, request }) => {
        console.log("error", error);
        const lastError = getLastCachedError(error);
        console.log("lastError", lastError);

        if (error instanceof ERROR) {
          Logger.error(
            `Error: ${error.message} || Last cached error:  ${lastError} || ${error.cachedError} || ${error.stack}`
          );
        } else {
          Logger.error(
            `Error: ${error} || Last cached error: ${lastError}  || ${error.stack} `
          );
        }

        if (code === "NOT_FOUND") {
          set.status = 404;
          Logger.error(`Not Found 404 ${request.url}`);
          return WApiResource.error("Not Found");
        } else if (code === "INTERNAL_SERVER_ERROR") {
          set.status = 500;
          return WApiResource.errorToast("Internal Server Error");
        } else if (code === "UNKNOWN") {
          set.status = 400;
          return WApiResource.error("Unknown Error");
        } else if (code === "INVALID_COOKIE_SIGNATURE") {
          set.status = 401;
          return WApiResource.error("Invalid Cookie Signature");
        } else if (code === "VALIDATION") {
          set.status = 400;
          return WApiResource.errorToast(
            "Validation Error",
            JSON.parse(error.message).errors.map(
              (e: any) =>
                `path: ${e.path}, value: ${e.value}, message: ${e.message}`
            )
          );
        } else if (code === "PARSE") {
          set.status = 400;
          return WApiResource.error("Parse Error");
        } else if (code === "ERROR") {
          set.status = 400;
          return WApiResource.errorToast(
            lastError.message ?? lastError,
            lastError
          );
        }

        let pluginResponse;

        // Check if there's a custom error function for the plugin
        for (const pluginName in customErrorFunctions) {
          const errorFunction = customErrorFunctions[pluginName];
          pluginResponse = errorFunction(code, lastError);
          if (pluginResponse) break;
        }

        // If custom error handling exists, use it
        if (pluginResponse) {
          set.status = pluginResponse.status;
          return pluginResponse.response;
        }
      });
    app.get(
      "/errors",
      () => {
        return Logger.getLogs(LogType.error);
      },
      {
        detail: {
          tags: ["Base"],
          summary: "Get all errors",
        },
      }
    );
  };
}

export default new Framework();

