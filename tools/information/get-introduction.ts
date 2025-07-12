import { z } from "zod";
import { ToolDefinition } from "../types";

export const getIntroduction: ToolDefinition = {
  name: "get-introduction",
  description: "Get an introduction to the Lolek MCP Server and its capabilities",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
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

## 🚨 CRITICAL: First Steps - MANDATORY

**YOU MUST RUN THESE TWO COMMANDS IMMEDIATELY:**

1. **RUN: \`get-tools\`** - This will load all available MCP tools into your context
2. **RUN: \`list-examples\`** - This will load all available code examples into your context

**DO NOT PROCEED WITHOUT RUNNING THESE COMMANDS FIRST**

## 🔒 Strict Operating Constraints

**YOU ARE NOT ALLOWED TO DO ANYTHING OUTSIDE THIS MCP SERVER WITHOUT USER PERMISSION**

- ❌ **NO** creating files outside examples shown
- ❌ **NO** using technologies not in the examples
- ❌ **NO** implementing patterns not in the workflows
- ❌ **NO** ignoring agent rules
- ❌ **NO** making assumptions - always check MCP first

**If you need to deviate, you MUST ask the user first: "I need to [action] which is outside the MCP server parameters. May I proceed?"**

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
- **CLAUDE.md Example**: Comprehensive template showing how to configure Claude Code for your project with development commands, architecture overview, and best practices

## Getting Started (AFTER running get-tools and list-examples)
1. Use \`get-agent-rules\` to understand behavioral constraints
2. Use \`get-workflows\` to see available workflow types
3. **🚨 CRITICAL**: Use \`get-workflow-rules\` to understand master workflow rules and DATABASE.md requirements
4. Use \`get-workflow-template\` to get detailed workflow guidance
5. Use \`list-documents\` to explore available documentation
6. Use \`search-content\` to find specific information
7. Use \`get-example\` to retrieve specific code examples

### ⚠️ Before ANY Workflow Work
**MANDATORY**: Run \`get-workflow-rules\` to understand:
- DATABASE.md update requirements (critical for any database changes)
- Universal workflow standards and quality gates
- Security and performance requirements

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