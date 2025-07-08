import { z } from "zod";
import { ToolDefinition } from "../types";

export const getTools: ToolDefinition = {
  name: "get-tools",
  description: "List all available MCP tools with their descriptions and parameters",
  inputSchema: {},
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

### get-document-section
**Description:** Get one or more sections' content from a topic's index file
**Parameters:**
- topic (optional): "development-guide", "nextjs", "shadcn" (default: "development-guide")
- sectionName (required): Name of section(s), comma-separated for multiple
**Usage:** Get specific documentation sections

### get-document-titles
**Description:** Extract and search documentation titles
**Parameters:**
- topic (optional): "development-guide", "nextjs", "shadcn" (default: "development-guide")
- file (optional): "content", "index", "headings" (default: "content")
- type (optional): "markdown", "titles" (default: "titles")
- keywords (optional): Search keywords (space-separated)
**Usage:** Find specific documentation by title search

### search-content
**Description:** Search across all documentation and guides
**Parameters:**
- query (required): Search term or regex pattern
- scope (optional): "all", "documents", "guides" (default: "all")
- caseSensitive (optional): Boolean (default: false)
- maxResults (optional): Number (default: 50)
**Usage:** Full-text search across documentation

## Introduction and Overview

### get-introduction
**Description:** Get introduction to Lolek MCP Server and its capabilities
**Parameters:** None
**Usage:** Learn about the server and how to use it

### get-tools
**Description:** List all available MCP tools with descriptions and parameters
**Parameters:** None
**Usage:** See this complete tool reference

### get-agent-rules
**Description:** Get behavioral rules and constraints for the AI agent
**Parameters:** None
**Usage:** Review agent behavioral rules and project-specific constraints

## Simple Planning Tools

### get-workflows
**Description:** Get all available development workflow types and descriptions
**Parameters:** None
**Usage:** Explore available workflow options for planning

### get-preplanning-questions
**Description:** Get strategic planning questions for development
**Parameters:**
- type (required): "module" or "feature"
**Usage:** Start the planning process with structured questions

### evaluate-preplanning-answers
**Description:** Evaluate planning quality and provide feedback
**Parameters:**
- type (required): "module" or "feature"
- answers (required): JSON formatted answers to planning questions
**Usage:** Validate planning quality before implementation

### generate-implementation-plan
**Description:** Create detailed implementation plans from evaluated answers
**Parameters:**
- type (required): "module" or "feature"
- answers (required): JSON formatted planning answers
- evaluationScore (optional): Score from evaluation step
**Usage:** Generate actionable implementation plan

### create-simple-checklist
**Description:** Create basic checklist file for development tracking
**Parameters:**
- type (required): "feature" or "module"
- name (required): Name for the checklist
- filePath (optional): Custom file path
**Usage:** Generate markdown checklist for progress tracking

## Quick Start
1. Use **get-introduction** to understand the server
2. Use **get-workflows** to explore planning options
3. Use **get-preplanning-questions** to start planning
4. Use **list-documents** to explore documentation`
      }]
    };
  }
};