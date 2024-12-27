import * as fs from "fs";
import { findRootFolderPath } from "./util/findRootFolderPath";
import { LogType } from "./Logger";
import * as path from "path";

export class StorageManager {
  private static storageFolder: string =
    findRootFolderPath(__dirname) + "/storage";

  private static checkIfStorageFolderExist() {
    if (!fs.existsSync(this.storageFolder)) {
      fs.mkdirSync(this.storageFolder);
    }
  }

  static async saveFile(folder: string, file: File): Promise<string> {
    this.checkIfStorageFolderExist();
    const folderPath = this.storageFolder + "/" + folder;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    const filePath = folderPath + "/" + file.name;
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, fileBuffer);

    return filePath;
  }

  static getFile(folder: string, fileName: string): File | null {
    const folderPath = this.storageFolder + "/" + folder;
    if (!fs.existsSync(folderPath)) {
      return null;
    }
    const filePath = folderPath + "/" + fileName;
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileBuffer = fs.readFileSync(filePath);
    return new File([fileBuffer], fileName);
  }

  static deleteFile(folder: string, fileName: string): boolean {
    try {
      const folderPath = this.storageFolder + "/" + folder;
      if (!fs.existsSync(folderPath)) {
        return true;
      }
      const filePath = folderPath + "/" + fileName;
      if (!fs.existsSync(filePath)) {
        return true;
      }
      fs.unlinkSync(filePath);
      return true;
    } catch (error) {
      return false;
    }
  }

  static saveLog(message: string, type: LogType): void {
    this.checkIfStorageFolderExist();
    let logPath = path.join(this.storageFolder, "logs");
    if (!fs.existsSync(logPath)) {
      fs.mkdirSync(logPath);
    }
    switch (type) {
      case LogType.log:
        logPath = logPath + "/log.log";
        break;
      case LogType.error:
        logPath = logPath + "/error.log";
        break;
      case LogType.warn:
        logPath = logPath + "/warn.log";
        break;
      case LogType.info:
        logPath = logPath + "/info.log";
        break;
      case LogType.debug:
        logPath = logPath + "/debug.log";
        break;
    }
    const timestamp = new Date().toLocaleString();

    if (!fs.existsSync(logPath)) {
      fs.writeFileSync(
        logPath,
        `{"time": "${timestamp}", "message": ${message}\n}\n`
      );
    } else {
      fs.appendFileSync(
        logPath,
        `{"time": "${timestamp}", "message": ${message}\n}\n`
      );
    }
  }

  static getLogs(type: LogType) {
    let logPath = path.join(this.storageFolder, "logs");

    switch (type) {
      case LogType.log:
        logPath = logPath + "/log.log";
        break;
      case LogType.error:
        logPath = logPath + "/error.log";
        break;
      case LogType.warn:
        logPath = logPath + "/warn.log";
        break;
      case LogType.info:
        logPath = logPath + "/info.log";
        break;
      case LogType.debug:
        logPath = logPath + "/debug.log";
        break;
    }
    if (!fs.existsSync(logPath)) {
      return null;
    }
    const logContent = fs.readFileSync(logPath, "utf8");

    return logContent;
  }
}
