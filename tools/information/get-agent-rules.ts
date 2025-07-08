import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const getAgentRules: ToolDefinition = {
  name: "get-agent-rules",
  description: "Get behavioral rules and constraints for the AI agent",
  inputSchema: {},
  handler: async () => {
    try {
      const rulesPath = join(process.cwd(), "agent-rules.md");
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
          text: `Error reading agent rules: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};