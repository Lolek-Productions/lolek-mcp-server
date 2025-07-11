import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const getAgentRules: ToolDefinition = {
  name: "get-agent-rules",
  description: "Get strict application development rules for building web apps with this MCP server",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const rulesPath = join(process.cwd(), "examples", "CLAUDE.md");
      const rulesContent = readFileSync(rulesPath, "utf-8");
      
      return {
        content: [{
          type: "text" as const,
          text: rulesContent
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error reading agent application development rules: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};