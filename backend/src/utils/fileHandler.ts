import fs from "fs";
import path from "path";

export const readFileContent = (filePath: string): string => {
  const fullPath = path.resolve(filePath);
  return fs.readFileSync(fullPath, "utf-8");
};
