import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";

const ContentFilter = require("../../lib/content-filter.js");

import { 
  listDocuments,
  searchContent
} from "../../tools/documentation";
import { 
  getIntroduction, 
  getAgentRules 
} from "../../tools/information";
import { 
  getWorkflows,
  getWorkflowTemplate,
  evaluateWorkflowProgress,
  loadDocumentationContext
} from "../../tools/workflow";
import {
  listExamples,
  getExample
} from "../../tools/examples";
import { ToolDefinition, ToolContext } from "../../tools/types";

const handler = createMcpHandler(
  async (server) => {
    // Initialize ContentFilter instance
    const contentFilter = new ContentFilter();
    
    // Tool context for passing dependencies
    const toolContext: ToolContext = {
      contentFilter
    };
    
    // Helper function to register extracted tools
    const registerTool = (toolDef: ToolDefinition) => {
      // Convert ZodObject to ZodRawShape if needed
      let schema;
      if (toolDef.inputSchema instanceof z.ZodObject) {
        schema = toolDef.inputSchema.shape;
      } else if (toolDef.inputSchema instanceof z.ZodOptional) {
        // For optional schemas, register with no required parameters
        schema = {};
      } else {
        schema = toolDef.inputSchema;
      }
      
      server.tool(
        toolDef.name,
        toolDef.description,
        schema,
        async (params: any) => await toolDef.handler(params || {}, toolContext)
      );
    };
    
    // Register extracted tools
    registerTool(listDocuments);
    registerTool(searchContent);
    registerTool(getIntroduction);
    registerTool(getAgentRules);
    registerTool(getWorkflows);
    registerTool(getWorkflowTemplate);
    registerTool(evaluateWorkflowProgress);
    registerTool(loadDocumentationContext);
    registerTool(listExamples);
    registerTool(getExample);
  },
  {
    capabilities: {
      tools: {
        // Note: All tools are automatically registered via registerTool()
        // No manual tool definitions needed
      },
    },
  },
  {
    basePath: "",
    verboseLogs: true,
    maxDuration: 800,
    redisUrl: process.env.REDIS_URL,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
