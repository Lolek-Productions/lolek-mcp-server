import { z } from "zod";
import { ToolDefinition } from "../types";

export const getIntroduction: ToolDefinition = {
  name: "get-introduction",
  description: "Get an introduction to the Lolek MCP Server and its capabilities",
  inputSchema: z.object({}),
  handler: async () => {
    return {
      content: [{
        type: "text" as const,
        text: `# Welcome to Lolek MCP Server

## Purpose
Lolek MCP Server is designed to **help AI agents build applications quickly and consistently** by providing:
- Pre-built, production-ready React components
- Complete project setup and configuration guidance  
- Standardized development patterns and workflows
- Infrastructure and deployment procedures

## Overview
This Next.js-based Model Context Protocol (MCP) server provides documentation navigation, planning workflow tools, and comprehensive development guidance. It accelerates application development by offering proven patterns, components, and setup procedures.

## Complete Tool List

### 📚 Documentation Navigation
- **list-documents**: Discover available documentation topics
- **search-content**: Search across all documentation using keywords

### 🎯 Workflow Management
- **get-workflows**: See all available workflow types (feature/module development)
- **get-workflow-template**: Get a specific workflow template with all steps and guidance
- **evaluate-workflow-progress**: Evaluate progress on a workflow by checking step completion
- **load-documentation-context**: Load relevant documentation context for workflow steps

### 📖 Information & Rules
- **get-introduction**: Get an introduction to the Lolek MCP Server and its capabilities
- **get-agent-rules**: Get behavioral rules and constraints for AI agents
- **get-tools**: Get information about available tools (deprecated - use get-introduction instead)

### 🔧 Code Examples
- **list-examples**: List all available code examples organized by category
- **get-example**: Get the code content of a specific example file from the examples directory

## Simple Planning Flow
1. **User + Agent Interact** → Use workflow templates to create solid foundation
2. **Agent Creates Plan** → Evaluate progress and generate implementation guidance
3. **User Reviews Plan** → Review the generated plan for accuracy
4. **Agent Handles Execution** → Track progress through workflow steps

## Documentation Available
- **development-guide**: Pre-built React components + complete project setup guidance
- **nextjs**: 685 Next.js framework documentation titles  
- **shadcn**: 63 shadcn/ui component library titles

### Development Guide Includes:
- Authentication workflows (login, signup, user profiles)
- Navigation structures (headers, sidebars, breadcrumbs)
- Layout containers (forms, pages, cards)
- UI interactions (copy buttons, collapsible sections)
- Complete technology stack and setup guidance

## Getting Started
1. Use \`get-workflows\` to see available workflow types
2. Use \`get-workflow-template\` to get detailed workflow guidance
3. Use \`list-documents\` to explore available documentation
4. Use \`list-examples\` to see available code examples
5. Use \`get-agent-rules\` to review behavioral constraints

## Agent Rules
This server includes behavioral rules for AI agents working on the project:
- Custom components have priority over shadcn/ui components
- No Supabase migration creation
- Maintain existing code patterns and architecture
- Use \`get-agent-rules\` tool for complete rule details

## Architecture
- **Next.js 15.2.4** with TypeScript
- **Vercel MCP Adapter** for protocol integration
- **Content Filtering** with IGNORE directives
- **Client-side approach** for persistent workflow tracking

## AI Agent Benefits
- **Rapid Development**: Start with working components instead of building from scratch
- **Consistent Patterns**: Follow established TypeScript, styling, and architectural patterns
- **Complete Stack**: From database setup to deployment, all guidance is provided
- **Best Practices**: Security, accessibility, and performance considerations built-in

*This server accelerates development by providing proven patterns and comprehensive guidance for building modern web applications.*`
      }]
    };
  }
};