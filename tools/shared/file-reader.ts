import { readFileSync } from "fs";
import { join } from "path";

export function createFileReader(
  filePath: string, 
  errorMessagePrefix: string = "Error reading file"
) {
  return async () => {
    try {
      const fullPath = join(process.cwd(), filePath);
      const content = readFileSync(fullPath, "utf-8");
      
      return {
        content: [{
          type: "text" as const,
          text: content
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `${errorMessagePrefix}: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  };
}