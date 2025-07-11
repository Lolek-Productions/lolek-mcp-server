import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const getClaudeRules: ToolDefinition = {
  name: "get-claude-rules",
  description: "Get behavioral rules and constraints for how to interact with this MCP server",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const claudeRulesPath = join(process.cwd(), "agent-rules.md");
      const claudeRulesContent = readFileSync(claudeRulesPath, "utf-8");
      
      return {
        content: [{
          type: "text" as const,
          text: claudeRulesContent
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error reading Claude MCP server rules: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};

