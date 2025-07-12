import { z } from "zod";
import { ToolDefinition, ToolContext } from "../types";
import { workflowRulesContent } from "./workflow-rules-content";

export const getWorkflowRules: ToolDefinition = {
  name: "get-workflow-rules",
  description: "Get master workflow rules and requirements that apply to all workflows",
  inputSchema: z.object({}).optional(),
  handler: async (params, context) => {
    return {
      content: [{
        type: "text",
        text: workflowRulesContent,
      }]
    };
  }
};