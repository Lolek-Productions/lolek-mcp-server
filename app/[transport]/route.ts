import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

// Import WorkflowHelper for development workflow tools
const WorkflowHelper = require("../../lib/workflow-helper.js");
const WorkflowOrchestrator = require("../../workflows/workflow-orchestrator.js");
const ContentFilter = require("../../lib/content-filter.js");

// Import extracted tools
import { 
  listDocuments,
  searchContent
} from "../../tools/documentation";
import { 
  getIntroduction, 
  getAgentRules, 
  getTools 
} from "../../tools/information";
import { 
  getWorkflows,
  createSimpleChecklist,
  getPreplanningQuestions,
  evaluatePreplanningAnswers,
  generateImplementationPlan,
  getWorkflowTemplates,
  validateChecklistProgress,
  loadDocumentationContext
} from "../../tools/workflow";
import { ToolDefinition, ToolContext } from "../../tools/types";

const handler = createMcpHandler(
  async (server) => {
    // Initialize WorkflowHelper instance
    const workflowHelper = new WorkflowHelper();
    // Initialize ContentFilter instance
    const contentFilter = new ContentFilter();
    
    // Tool context for passing dependencies
    const toolContext: ToolContext = {
      workflowHelper,
      contentFilter
    };
    
    // Helper function to register extracted tools
    const registerTool = (toolDef: ToolDefinition) => {
      server.tool(
        toolDef.name,
        toolDef.description,
        toolDef.inputSchema,
        async (params: any) => await toolDef.handler(params, toolContext)
      );
    };
    
    // Register extracted tools
    registerTool(listDocuments);
    registerTool(searchContent);
    registerTool(getIntroduction);
    registerTool(getAgentRules);
    registerTool(getTools);
    registerTool(getWorkflows);
    registerTool(createSimpleChecklist);
    registerTool(getPreplanningQuestions);
    registerTool(evaluatePreplanningAnswers);
    registerTool(generateImplementationPlan);
    registerTool(getWorkflowTemplates);
    registerTool(validateChecklistProgress);
    registerTool(loadDocumentationContext);
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
