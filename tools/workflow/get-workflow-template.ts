import { z } from "zod";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const getWorkflowTemplate: ToolDefinition = {
  name: "get-workflow-template",
  description: "Get a specific workflow template with all steps, questions, and implementation guidance",
  inputSchema: z.object({
    type: z.enum(["module", "feature", "create-app", "wizard"]).describe("The type of workflow template to retrieve")
  }),
  handler: async ({ type }, context) => {
    try {
      // Load the markdown workflow file
      const markdownPath = join(process.cwd(), "workflows", `${type}-workflow.md`);
      
      if (!existsSync(markdownPath)) {
        return {
          content: [{
            type: "text",
            text: `Workflow template for '${type}' not found. Available workflows can be seen with get-workflows tool.`
          }]
        };
      }
      
      // Read the markdown workflow file
      const workflowContent = readFileSync(markdownPath, "utf-8");
      
      return {
        content: [{
          type: "text",
          text: workflowContent
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error loading workflow template: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};