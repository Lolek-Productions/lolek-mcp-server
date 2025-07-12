import { z } from "zod";
import { ToolDefinition } from "../types";
import { createFileReader } from "../shared/file-reader";

export const getDevelopmentGuideContent: ToolDefinition = {
  name: "get-development-guide-content",
  description: "Get the complete development guide content with examples, components, and implementation patterns",
  inputSchema: z.object({}).optional(),
  handler: createFileReader("development-guide/content.md", "Error reading development guide content")
};