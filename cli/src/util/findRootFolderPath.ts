import fs from 'fs'
import path from 'path';

export const findRootFolderPath = (dir: string): string => {
  // Check if the directory contains package.json
  if (fs.existsSync(dir + "/package.json")) {
    return dir;
  }
  // If not found, move up one level and check again
  const parentDir = path.resolve(dir, "..");
  if (parentDir === dir) {
    // Reached the root directory
    return parentDir;
  }
  return findRootFolderPath(parentDir);
};