import * as fs from "fs";
import * as path from "path";
import Elysia from "elysia";
import PluginBase from "./PluginBase";
import { ERROR } from "./errors/ERROR";
import moment from "moment";
import Logger, { LogType } from "./Logger";
import { RedirectResponse, WApiResource } from "./Response";
import Stream from "@elysiajs/stream";
import { findRootFolderPath } from "./util/findRootFolderPath";

class Framework {
  protected app?: Elysia;
  plugins: PluginBase[] = [];

  constructor() {}

  frameworkStart = async (app: Elysia) => {
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
        localResponse = response.toResponse();
      } else {
        const responseNew = WApiResource.success("", response);
        localResponse = responseNew.toResponse();
      }

      return localResponse;
    });
    await this.baseErrorHandling(app);
    this.app = app;
    /*  app.get(
      "/test",
      () =>
        new Stream(async (stream) => {
          const pathFF = path.join(
            findRootFolderPath(__dirname),
            "storage",
            "test.webp"
          );
          const file = fs.readFileSync(pathFF);
          stream.send(file);
        })
    ); */

    await this.loadPlugins(app);
    return app;
  };

  onlyBootPlugins = async () => {
    const pluginsDir = path.join(__dirname, "../plugins");
    const pluginFolders = fs.readdirSync(pluginsDir);

    for (const folder of pluginFolders) {
        const pluginPath = path.join(
          pluginsDir,
          folder,
          "Plugin.ts"
        );

        const module = await import(pluginPath);
        const firstProperty = Object.keys(module)[0];
        const plugin = new module[firstProperty]();
        await plugin.init();
        this.plugins.push(plugin);
      }
  };

  protected loadPlugins = async (app: Elysia) => {
    const pluginsDir = path.join(__dirname, "../plugins");
    const pluginFolders = fs.readdirSync(pluginsDir);

    for (const folder of pluginFolders) {
        const pluginPath = path.join(
          pluginsDir,
          folder,
          "Plugin.ts"
        );

        const module = await import(pluginPath);
        const firstProperty = Object.keys(module)[0];
        const plugin = new module[firstProperty]();
        await plugin.init(app);
    }
  };

  baseErrorHandling = async (app: Elysia) => {
    app
      .error({
        ERROR,
      })
      .onError(({ code, set, error, request }) => {
        console.log("error", error);
        if (error instanceof ERROR) {
          Logger.error(
            `Error: ${error.message} || ${error.cachedError} || ${error.stack}`
          );
        } else {
          Logger.error(`Error: ${error}  || ${error.stack}`);
        }

        let response;
        if (code === "NOT_FOUND") {
          set.status = 404;
          Logger.error(`Not Found 404 ${request.url}`);
          response = WApiResource.error("Not Found", [error]);
        } else if (code === "INTERNAL_SERVER_ERROR") {
          set.status = 500;
          response = WApiResource.errorToast("Internal Server Error", [error]);
        } else if (code === "UNKNOWN") {
          set.status = 400;
          response = WApiResource.error("Unknown Error", [error]);
        } else if (code === "INVALID_COOKIE_SIGNATURE") {
          set.status = 401;
          response = WApiResource.error("Invalid Cookie Signature", [error]);
        } else if (code === "VALIDATION") {
          set.status = 400;
          response = WApiResource.errorToast(
            "Validation Error",
            JSON.parse(error.message).errors.map(
              (e: any) =>
                `path: ${e.path}, value: ${e.value}, message: ${e.message}`
            )
          );
        } else if (code === "PARSE") {
          set.status = 400;
          response = WApiResource.error("Parse Error", [error]);
        } else if (code === "ERROR") {
          set.status = 400;
          response = WApiResource.errorToast(error.message, [
            error.cachedError,
          ]);
        }
        //console.log("response", response);
        if (response instanceof WApiResource) return response.toResponse();
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

