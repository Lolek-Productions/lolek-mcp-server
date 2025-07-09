import { z } from "zod";
import { ToolDefinition } from "../types";

export const getTools: ToolDefinition = {
  name: "get-tools",
  description: "List all available MCP tools with their descriptions and parameters",
  inputSchema: z.object({}),
  handler: async () => {
    return {
      content: [{
        type: "text" as const,
        text: `# Available MCP Tools (11)

## Documentation Navigation Tools

### list-documents
**Description:** List available documentation topics
**Parameters:** None
**Usage:** Discover what documentation is available

### search-content
**Description:** Search across all documentation and guides
**Parameters:**
- query (required): Search term or regex pattern
- scope (optional): "docs", "guides", "examples" (default: "docs")
- limit (optional): Maximum results (default: 50)
**Usage:** Full-text search across documentation

## Information & Context Tools

### get-introduction
**Description:** Get introduction to Lolek MCP Server and its capabilities
**Parameters:** None
**Usage:** Learn about the server and how to use it

### get-agent-rules
**Description:** Get behavioral rules and constraints for the AI agent
**Parameters:** None
**Usage:** Review agent behavioral rules and project-specific constraints

### get-tools
**Description:** List all available MCP tools with descriptions and parameters
**Parameters:** None
**Usage:** See this complete tool reference

## Workflow Management Tools

### get-workflows
**Description:** List all available development workflow types
**Parameters:** None
**Usage:** Explore available workflow options (Module, Feature, Bug Fix, Commit)

### get-workflow-template
**Description:** Get complete workflow template with embedded questions and quality standards
**Parameters:**
- type (required): "module" or "feature"
**Usage:** Get comprehensive workflow with pre-planning questions and implementation steps

### evaluate-workflow-progress
**Description:** Evaluate workflow progress and provide implementation guidance
**Parameters:**
- type (required): "module" or "feature"
- currentStep (required): Current workflow step ID
- stepProgress (required): Description of current progress
- preplanningAnswers (optional): JSON answers for pre-planning evaluation
**Usage:** Track progress through workflow steps and get quality feedback

### load-documentation-context
**Description:** Efficiently load all essential documentation context at once
**Parameters:** None
**Usage:** Load comprehensive context including documentation headings, agent rules, and available tools

## Example Management Tools

### list-examples
**Description:** List all available code examples organized by category
**Parameters:** None
**Usage:** Discover available React components, contexts, library files, and scripts

### get-example
**Description:** Get the code content of a specific example file
**Parameters:**
- file (required): Path to example file (e.g., "components/PublicHeader.jsx", "contexts/AppContextProvider.tsx")
**Usage:** Retrieve production-ready code examples with descriptions and usage notes

## Quick Start
1. Use **load-documentation-context** to efficiently load all essential context
2. Use **get-workflows** to explore planning options
3. Use **get-workflow-template** to start structured development
4. Use **list-examples** to discover available code components`
      }]
    };
  }
};