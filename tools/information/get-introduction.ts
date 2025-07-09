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

## Core Capabilities

### 📚 Documentation Navigation (4 tools)
- **list-documents**: Discover available documentation topics
- **get-document-section**: Get specific sections from documentation
- **get-document-titles**: Search and extract documentation titles
- **search-content**: Search across all documentation

### 🎯 Simple Planning Workflow (5 tools)
- **get-workflows**: See all available workflow types
- **get-preplanning-questions**: Get structured planning questions
- **evaluate-preplanning-answers**: Validate planning quality
- **generate-implementation-plan**: Create detailed implementation plans
- **create-simple-checklist**: Generate progress tracking checklists

## Simple Planning Flow
1. **User + Agent Interact** → Use planning questions to create solid foundation
2. **Agent Creates Plan** → Evaluate answers and generate implementation plan
3. **User Reviews Plan** → Review the generated plan for accuracy
4. **Agent Handles Execution** → Create checklist and track progress

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
2. Use \`get-preplanning-questions\` to start planning
3. Use \`list-documents\` to explore available documentation
4. Use \`get-agent-rules\` to review behavioral constraints

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