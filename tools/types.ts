import { z } from "zod";

export interface McpToolResult {
  [x: string]: unknown;
  content: Array<{
    [x: string]: unknown;
    type: "text";
    text: string;
  }>;
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, z.ZodType<any>> | z.ZodObject<any>;
  handler: (params: any, context?: ToolContext) => Promise<McpToolResult>;
}

export interface ToolContext {
  contentFilter: any;
}