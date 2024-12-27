import prismaClient from "./config/prismaClient";
import { StorageManager } from "./StorageManager";

export enum LogType {
  log = "log",
  error = "error",
  warn = "warn",
  info = "info",
  debug = "debug",
}

export default class Logger {
  static logToFile: boolean = false;
  static logToDatabase: boolean = true;

  static async log(message: string) {
    if (Logger.logToFile) {
      StorageManager.saveLog(message, LogType.log);
    }
    if (Logger.logToDatabase) {
      await prismaClient.systemLog.create({
        data: {
          message: `${message}`,
          type: LogType.log,
        },
      });
    }
  }
  static async error(message: string) {
    if (Logger.logToFile) {
      StorageManager.saveLog(message, LogType.error);
    }
    if (Logger.logToDatabase) {
      await prismaClient.systemLog.create({
        data: {
          message: `${message}`,
          type: LogType.error,
        },
      });
    }
  }

  static async warn(message: string) {
    if (Logger.logToFile) {
      StorageManager.saveLog(message, LogType.warn);
    }
    if (Logger.logToDatabase) {
      await prismaClient.systemLog.create({
        data: {
          message: `${message}`,
          type: LogType.warn,
        },
      });
    }
  }

  static async info(message: string) {
    if (Logger.logToFile) {
      StorageManager.saveLog(message, LogType.info);
    }
    if (Logger.logToDatabase) {
      await prismaClient.systemLog.create({
        data: {
          message: `${message}`,
          type: LogType.info,
        },
      });
    }
  }

  static async debug(message: string) {
    if (Logger.logToFile) {
      StorageManager.saveLog(message, LogType.debug);
    }
    if (Logger.logToDatabase) {
      await prismaClient.systemLog.create({
        data: {
          message: `${message}`,
          type: LogType.debug,
        },
      });
    }
  }

  static async getLogs(type: LogType) {
    const logs = [];
    if (Logger.logToFile) {
      logs.push(StorageManager.getLogs(type));
    }
    logs.push(
      await await prismaClient.systemLog.findMany({
        where: {
          type,
        },
      })
    );

    return logs;
  }
}
