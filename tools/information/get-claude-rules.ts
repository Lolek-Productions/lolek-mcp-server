import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const getClaudeRules: ToolDefinition = {
  name: "get-claude-rules",
  description: "Get strict CLAUDE.md rules for efficient web app development",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const claudeRulesPath = join(process.cwd(), "examples", "CLAUDE.md");
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
          text: `Error reading Claude rules: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};

