# Chapter 1: AI Agent & Tools

## Overview

This chapter establishes the foundation for using AI agents (specifically Claude Code) to build web applications. The goal is to create a collaborative development environment where AI agents can understand project context, follow established patterns, and work effectively with human developers to build complete applications.

## Purpose

The primary objective is to enable conversations with AI that result in 95% complete applications. This collaborative approach helps overcome common development challenges:

### The 95% Complete App Goal
- **Comprehensive Development**: Build fully functional applications through AI collaboration
- **Visualize Complex Components**: Help developers understand app structure, sidebars, wizards, and workflows
- **Database Architecture**: Provide guidance on data structure and relationships
- **Complete Instructions**: Generate specific, actionable instructions for building entire applications

### Key Requirements
- Clear instructions for AI behavior and decision-making
- Established patterns for common development tasks
- Tools and workflows that support AI-assisted development
- Guidelines for maintaining code quality and consistency
- Structured approach to complex features like wizards and multi-step workflows

## Required Reading

- [Next.js Documentation](../docs/nextjs/) - For framework-specific APIs, routing, and configuration
- [shadcn/ui Documentation](../docs/shadcn/) - For component library installation and usage

## Chapter Focus

This chapter covers AI agent setup, MCP integration, and our project-specific technology stack decisions. For detailed framework documentation, reference the docs above.

---

## AI Agent
Claude
Using Claude Code

## MCP Setup Instructions

### What is MCP?
Model Context Protocol (MCP) provides dynamic, real-time context to AI agents, allowing them to understand your project structure, current state, and development patterns without relying on static files.

### Benefits of MCP for Development
- **Dynamic Context**: Real-time project state and file structure
- **Adaptive Instructions**: Context-aware guidance based on current project needs
- **Seamless Integration**: Works directly with Claude Code
- **No Maintenance**: Automatically stays current with your project changes

### Setting Up MCP

#### 1. **Enable MCP in Claude Code**
```bash
# MCP is enabled by default in Claude Code
# Verify it's working by checking available tools
claude --help
```

#### 2. **Project Configuration**
- Place key instruction files in your project root (like CLAUDE.md)
- Organize documentation in clearly named folders (like /ai_instructions/)
- Use consistent naming patterns for files and directories

#### 3. **MCP Server Configuration**
- MCP automatically detects project structure
- Provides context about files, dependencies, and patterns
- Adapts instructions based on your specific project type

### How to Work with MCP

#### For Users/Developers:
- **Ask specific questions**: "How should I structure this module?"
- **Request context-aware help**: "What's the best way to add authentication to this project?"
- **Get real-time guidance**: "What files do I need to modify for this feature?"

#### For AI Agents:
- **Read project context**: Use MCP to understand current project state
- **Follow established patterns**: Adapt to existing code conventions
- **Provide contextual suggestions**: Base recommendations on actual project structure

## Context7 MCP Server Integration

Context7 (https://context7.com) is an MCP server that provides up-to-date documentation for LLMs and AI code editors. It generates contextual documentation resources in real-time, ensuring AI agents have access to current technical information for frameworks like React, Next.js, TypeScript, and other development tools.

The server integrates seamlessly with Claude Code via MCP configuration, allowing developers to ask framework-specific questions like "What's the current best practice for Next.js authentication?" and receive current documentation and examples. For AI agents, Context7 provides a way to verify recommendations against current best practices and access the latest API documentation when providing code suggestions.

## Recommended Technology Stack

### Frontend Stack
- **Framework**: Next.js 15 (App Router) - See [Next.js documentation](../docs/nextjs/) for implementation details
- **Language**: TypeScript for type safety and developer experience
- **Styling**: Tailwind CSS for utility-first styling
- **Components**: shadcn/ui components - See [shadcn/ui documentation](../docs/shadcn/) for usage patterns

### Backend Stack
- **Database & Auth**: Supabase (PostgreSQL + Authentication)
- **Authentication**: Supabase Auth with server-side session management
- **API**: Server Actions for secure data operations

### UI Library
- **Component System**: Radix UI primitives with shadcn/ui styling
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Integration Notes
This stack provides a cohesive development experience for MCP server applications. The Next.js App Router handles routing and server-side rendering, while shadcn/ui provides consistent UI components. Supabase manages authentication and database operations seamlessly.

## Actions for the Agent

### Refresh the Database Structure
Run the following file to refresh the schema for the postgres database hosted at Supabase.
/scripts/generate-database-docs.sh
Once this file is run, you can view the schema at DATABASE.md
Find the example at /DATABASE.md

### How to build the sidebar
Use the main-sidebar component

## Tips
### Separate concerns that COULD be running at the same time using agents:

1. The Sidebar
2. The (main) modules themselves
3. the "/" page and associated items
4. The supabase database via the web browser
5. POSSIBLY - different features could be developed at the same time.
6. marketing parsing - contact information etc.

## Instructions for the Agent
- Do not create migrations for supabase.  
- Ordinarily use Form-Field for the input 
- Use a toast whenever appropriate to give feedback to the user.  
- Use shadcn/ui components - See [shadcn/ui documentation](../docs/shadcn/) for component APIs

### on running npm run build
takes time.  So only do it when asked or when about to push to the repository.

