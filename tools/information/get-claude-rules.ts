import { z } from "zod";
import { ToolDefinition } from "../types";
import { createFileReader } from "../shared/file-reader";

export const getClaudeRules: ToolDefinition = {
  name: "get-claude-rules",
  description: "Get behavioral rules and constraints for how to interact with this MCP server",
  inputSchema: z.object({}).optional(),
  handler: createFileReader("tools/information/agent-rules.md", "Error reading Claude MCP server rules")
};

