import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const getDevelopmentGuideContent: ToolDefinition = {
  name: "get-development-guide-content",
  description: "Get the complete development guide content with examples, components, and implementation patterns",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const contentPath = join(process.cwd(), "development-guide", "content.md");
      const content = readFileSync(contentPath, "utf-8");
      
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
          text: `Error reading development guide content: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};