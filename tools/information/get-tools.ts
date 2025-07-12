import { z } from "zod";
import { ToolDefinition } from "../types";

export const getTools: ToolDefinition = {
  name: "get-tools",
  description: "Get a complete list of all available MCP tools with their descriptions and usage",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    return {
      content: [{
        type: "text" as const,
        text: `# Available MCP Tools

## 📚 Documentation Navigation

### list-documents
**Description**: List all available documentation files with content filtering applied
**Parameters**: None
**Usage**: Use this to discover available documentation topics (development-guide, nextjs, shadcn)

### search-content  
**Description**: Search across all documentation using keywords
**Parameters**: 
- query (required): Search terms
- scope (optional): "docs", "guides", "examples" (defaults to "docs")
- limit (optional): Maximum results (default 50)
**Usage**: Search for specific topics, components, or implementation patterns

## 🎯 Workflow Management

### get-workflows
**Description**: Get all available development workflow types and their descriptions
**Parameters**: None
**Usage**: See available workflow types (feature/module development)

### get-workflow-template
**Description**: Get a specific workflow template with all steps and guidance
**Parameters**: 
- type (required): "module", "feature", "create-app", or "wizard"
**Usage**: Get comprehensive workflow with pre-planning questions and implementation steps

### get-workflow-rules
**Description**: Get master workflow rules and requirements that apply to all workflows
**Parameters**: None
**Usage**: **🚨 CRITICAL** - Run before ANY workflow work to understand DATABASE.md requirements and universal standards

### load-documentation-context
**Description**: Load relevant documentation context for workflow steps
**Parameters**: None
**Usage**: Efficiently load all essential documentation context at once

## 📖 Information & Rules

### get-introduction
**Description**: Get an introduction to the Lolek MCP Server and its capabilities
**Parameters**: None
**Usage**: Understand the server's purpose and how to use it effectively

### get-agent-rules
**Description**: Get behavioral rules and constraints for AI agents
**Parameters**: None
**Usage**: Review project-specific rules and constraints before starting work

### get-tools
**Description**: Get a complete list of all available MCP tools (this tool)
**Parameters**: None
**Usage**: See all available tools with descriptions and parameters

## 🔧 Code Examples

### list-examples
**Description**: List all available code examples organized by category
**Parameters**: None
**Usage**: Discover available React components, contexts, library files, hooks, layouts, pages, and scripts

### get-example
**Description**: Get the code content of a specific example file
**Parameters**: 
- file (required): Path to example file or partial filename
**Usage**: Retrieve production-ready code examples with descriptions and usage notes

## 🔑 Important Notes

1. **Always start with get-introduction** to understand the server
2. **Use list-examples and get-tools** to see available resources
3. **Follow workflows** for structured development
4. **Check agent rules** before making decisions
5. **Search documentation** for specific implementation details

## 📋 Tool Categories Summary
- **Documentation** (2 tools): list-documents, search-content
- **Workflows** (4 tools): get-workflows, get-workflow-template, evaluate-workflow-progress, load-documentation-context  
- **Information** (3 tools): get-introduction, get-agent-rules, get-tools
- **Examples** (2 tools): list-examples, get-example

Total: 11 MCP tools available`
      }]
    };
  }
};