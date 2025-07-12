# CLAUDE.md

**PURPOSE**: This file provides guidance to Claude Code (claude.ai/code) for developing and enhancing the lolek-mcp server.

## 🎯 Project Mission

**You are my assistant in creating an amazing MCP server called lolek-mcp.** We work together to continuously improve this server through experimentation, learning, and iterative development. Our goal is to build the most effective MCP server for AI agents developing web applications.

### Two Operational Perspectives

**CRITICAL**: The lolek-mcp server operates in two distinct contexts that require different approaches:

1. **Development Perspective**: When we (Claude Code assistant + human developer) are actively developing, enhancing, or debugging the MCP server itself
   - Focus: Server architecture, tool implementation, template systems, workflow improvements
   - Actions: Code changes, adding new tools, refining templates, updating documentation
   - Goal: Make the MCP server more capable and effective for end users

2. **End-User Perspective**: When an AI agent is consuming this MCP server's tools to help a human user build their web application
   - Focus: Following strict workflows, using templates, building applications according to constraints
   - Actions: Creating modules, generating code, following development patterns, enforcing standards
   - Goal: Help end users build high-quality web applications using our established patterns

### Perspective Clarification Protocol

**IMPORTANT**: If there is ANY ambiguity about which perspective a user request refers to, you MUST ask for clarification before proceeding:

- "Are you asking me to modify the MCP server itself (development perspective), or are you asking about using the MCP server to build an application (end-user perspective)?"
- Look for context clues like mentions of "the server", "tools", "workflows" vs. "my app", "create a module", "build a feature"
- When in doubt, always ask rather than assume

### Core Collaboration Principles
- **Iterative Improvement**: We constantly enhance the server based on what we learn works best
- **Standards Evolution**: We establish and refine development patterns through experimentation
- **Quality Focus**: We prioritize best practices, consistency, and maintainable code
- **Strict Constraints**: The MCP server enforces rigid behavioral guidelines to ensure end-user agents follow best practices

### Our Development Philosophy
The lolek-mcp server is designed to be **highly opinionated and strict** because:
- **Consistency**: Ensures all applications built using it follow the same high standards
- **Best Practices**: Prevents common mistakes and enforces proven patterns
- **Quality Control**: Maintains code quality across all projects that use the server
- **Constraint-Driven Development**: Clear boundaries lead to better, more predictable outcomes

## 🚀 MCP Server Overview

### What lolek-mcp Does
This Next.js-based MCP (Model Context Protocol) server provides comprehensive development guidance for building web applications. It enforces strict development standards while providing:

- **Documentation Navigation**: Efficient access to framework documentation (Next.js, shadcn/ui)
- **Development Workflows**: Step-by-step processes for module, feature, and app creation
- **Component Templates**: Production-ready code examples and patterns
- **Template Engine**: Mustache-style templating system for code generation
- **Quality Enforcement**: Strict rules and validation for maintaining standards

### Key Components
- **Main Route Handler**: `app/[transport]/route.ts` - MCP server configuration and tool registry
- **Documentation Tools**: Token-efficient navigation through large documentation sets
- **Workflow System**: Comprehensive development processes with quality gates
- **Template Engine**: `tools/shared/template-engine.ts` - Dynamic content generation
- **Shared Templates**: Reusable patterns for server actions, components, workflows

### Templating System Architecture
The server includes a powerful mustache-style templating system:
- `{{tool:name}}` - Insert output from other MCP tools
- `{{shared:template}}` - Reference shared template files
- `{{module:property}}` - Insert module-specific data
- **DRY Principle**: Eliminates code duplication through dynamic generation
- **Consistency**: Ensures all generated code follows identical patterns

## 🔧 Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application  
- `npm start` - Start production server
- `npm test` - Run test suite

### MCP Server Tools
- **Documentation**: `list-documents`, `search-content`, `get-development-guide-content`
- **Workflows**: `get-workflows`, `get-workflow-template`, `get-workflow-rules`
- **Templates**: `generate-module-template` - Dynamic code generation
- **Examples**: `list-examples`, `get-example` - Access production-ready code
- **Information**: `get-introduction`, `get-claude-rules`, `get-tools`

## 📐 Architecture & Standards

### Development Architecture
- **Next.js 15.2.4** with TypeScript and React 19
- **Vercel MCP Adapter** for MCP protocol integration
- **Template Engine** for dynamic code generation
- **shadcn/ui** component library with custom extensions
- **Supabase** for database and authentication patterns

### Code Organization
- **tools/**: All MCP tool definitions organized by category
- **workflows/**: Development process documentation
- **examples/**: Production-ready code templates
- **documents/**: Framework reference documentation
- **tools/shared/**: Template engine and shared utilities

### Quality Standards
1. **Strict Type Safety**: TypeScript throughout, no `any` types
2. **Consistent Patterns**: All code follows established templates
3. **DRY Principle**: Use templating system to eliminate duplication
4. **Error Handling**: Comprehensive error boundaries and user feedback
5. **Testing**: Comprehensive test coverage for all tools and templates

## 🎯 Development Approach

### When Adding New Features
1. **Understand Context**: Review existing patterns and standards
2. **Design Template**: Create reusable templates when possible
3. **Enforce Constraints**: Add validation and constraints to maintain quality
4. **Document Thoroughly**: Update workflows and documentation
5. **Test Rigorously**: Ensure reliability and consistency

### When Updating Existing Features
1. **Preserve Backwards Compatibility**: Don't break existing usage
2. **Enhance Templates**: Improve shared templates to benefit all users
3. **Strengthen Constraints**: Add stricter validation when beneficial
4. **Update Documentation**: Keep all references current

### Experimental Development
- **Try New Patterns**: Test ideas in isolated environments
- **Measure Effectiveness**: Evaluate improvements objectively
- **Refine Based on Results**: Iterate on what works best
- **Integrate Success**: Add proven patterns to the main system

## 🛡️ Constraint Philosophy

### Why We're Strict
The lolek-mcp server intentionally constrains end-user agents because:

1. **Prevents Common Mistakes**: Strict patterns prevent architectural errors
2. **Ensures Consistency**: All applications look and work similarly
3. **Maintains Quality**: High standards are enforced automatically
4. **Speeds Development**: Clear constraints reduce decision fatigue
5. **Facilitates Maintenance**: Predictable patterns make updates easier

### Areas of Strict Control
- **File Organization**: Specific directory structures required
- **Component Patterns**: Mandated component architectures
- **Database Operations**: Required security and validation patterns
- **Code Style**: Enforced TypeScript and formatting standards
- **Development Workflows**: Step-by-step processes with quality gates

## 🔄 Continuous Improvement Process

### Our Collaboration Workflow
1. **Identify Opportunities**: Find areas for improvement through usage
2. **Experiment Together**: Test new approaches and patterns
3. **Evaluate Results**: Assess effectiveness and developer experience
4. **Refine Standards**: Update templates and constraints based on learnings
5. **Document Changes**: Update workflows and documentation

### Success Metrics
- **Developer Velocity**: How quickly can quality applications be built?
- **Code Consistency**: Are all applications following the same patterns?
- **Error Reduction**: Are we preventing common mistakes effectively?
- **Maintainability**: How easy is it to update and enhance applications?

## 🎪 Vision

**Together, we're building the most effective MCP server for web application development.** Our strict, opinionated approach ensures that every application built with lolek-mcp is:

- **High Quality**: Following proven best practices
- **Consistent**: Using identical patterns and standards
- **Maintainable**: Easy to update and enhance over time
- **Secure**: Built with security-first principles
- **Fast to Develop**: Rapid iteration through template generation

Through our collaborative development process, we continuously refine and improve the server to better serve AI agents building amazing web applications.

---

*This is a living document that evolves as we learn and improve the lolek-mcp server together.*