# Lolek MCP Server

**Next.js MCP Server with Documentation Navigation and Development Workflows**

This comprehensive MCP (Model Context Protocol) server provides AI agents with efficient documentation navigation tools and structured development workflows. Built with Next.js and the `@vercel/mcp-adapter`, it helps AI agents build applications quickly and consistently by providing pre-built components, development guidance, and workflow management.

## 🎯 Purpose

This MCP server is designed to help AI agents:
- **Navigate large documentation efficiently** without loading massive files
- **Access pre-built, production-ready React components** for rapid development
- **Follow structured development workflows** with quality evaluation
- **Build consistent applications** using established patterns and best practices

## 🛠️ Available Tools

For a complete list of all available tools and their descriptions, use the `get-introduction` tool. The tools are organized into categories:

- **Documentation Navigation**: Tools for discovering and searching documentation
- **Development Guide**: Tools for accessing comprehensive development guidance and examples
- **Workflow Management**: Tools for managing development workflows and progress tracking
- **Information & Rules**: Tools for server information and agent behavioral guidelines
- **Code Examples**: Tools for browsing and retrieving code examples

## 📊 Recommended Workflows

### Documentation Navigation Workflow
```
1. get-introduction → Get server overview and FOLLOW SETUP INSTRUCTIONS
   (This will tell you to download CLAUDE.md to your project)
2. get-development-guide-index → See all available components and patterns
3. get-development-guide-section → Get specific component or pattern details
   OR
   load-documentation-context → Load all essential context efficiently
   OR
   1. list-documents → See available topics
   2. search-content → Find specific information with context

4. Use specific tools as needed:
   - get-agent-rules → Behavioral guidelines
   - list-examples → Available code examples
   - get-claude-rules → Context-engineering rules for agents
```

### Development Planning Workflow

#### Feature Development (9 Steps)
```
1. get-workflows → See available workflow types
2. get-workflow-template (type: "feature") → Get complete feature workflow
3. Answer pre-planning questions (embedded in workflow)
4. evaluate-workflow-progress → Get quality evaluation and implementation plan
5. Follow workflow steps with progress tracking
6. Use evaluate-workflow-progress for each step guidance
```

#### Module Development (12 Steps)
```
1. get-workflows → See available workflow types
2. get-workflow-template (type: "module") → Get complete module workflow
3. Answer pre-planning questions (embedded in workflow)
4. evaluate-workflow-progress → Get quality evaluation and implementation plan
5. Follow workflow steps with progress tracking
6. Use evaluate-workflow-progress for each step guidance
```

## 📁 Documentation Structure

```
development-guide/
└── content.md                   # Complete component library and development patterns

documents/
├── README.md                    # Documentation system overview
├── nextjs/                     # Next.js framework documentation
│   ├── content.md              # 685+ Next.js implementation details
│   └── index.md                # Organized sections for navigation
├── shadcn/                     # shadcn/ui component library
│   ├── content.md              # 63+ component usage patterns
│   └── index.md                # Component categories
└── supabase/                   # Supabase integration guides
    ├── content.md              # Authentication and database patterns
    └── index.md                # Supabase service categories

workflows/
├── feature-workflow.md          # Complete 10-step feature development workflow
├── module-workflow.md           # Complete 12-step module development workflow
├── create-app-workflow.md       # Complete 12-step new app creation workflow
└── wizard-workflow.md           # Complete 8-step wizard development workflow
```

## 🔄 Workflow System

The MCP server includes a comprehensive workflow system with embedded planning:

### Available Workflows
- **Feature Development** (10 steps) - Add new functionality to existing modules
- **Module Development** (12 steps) - Build entirely new standalone modules
- **Create New App** (12 steps) - Build complete applications from scratch
- **Wizard Development** (8 steps) - Create step-by-step user interfaces

### Workflow Structure
```
workflows/
├── feature-workflow.md          # Complete 10-step feature workflow
├── module-workflow.md           # Complete 12-step module workflow  
├── create-app-workflow.md       # Complete 12-step new app workflow
├── wizard-workflow.md           # Complete 8-step wizard workflow
└── __tests__/                   # Comprehensive test suite
    └── workflow-templates.test.js
```

### Quality Evaluation System

Each workflow includes embedded quality standards that evaluate pre-planning on a 5-point scale:
- **Excellent (4.5+)**: Ready for implementation
- **Good (3.5-4.4)**: Minor improvements needed  
- **Acceptable (2.5-3.4)**: Needs more detail
- **Needs Improvement (1.5-2.4)**: Significant revision required
- **Inadequate (0-1.4)**: Start over with more thought

### Implementation Plan Generation

When pre-planning quality score ≥ 3.5, the system automatically generates:
- Detailed implementation steps
- Component breakdown
- Testing strategy
- Risk mitigation plan
- Success criteria

## 🧩 Development Guide

The development guide provides comprehensive guidance accessed via three dedicated tools:

### Development Guide Tools
- **get-development-guide-index** - Dynamically generated index of all components and patterns
- **get-development-guide-content** - Complete guide content with all examples
- **get-development-guide-section** - Get specific sections by title or partial match

### Component Categories
- **Navigation & Layout** - Headers, sidebars, containers, and page layouts
- **UI Components** - Forms, buttons, cards, and interactive elements  
- **Authentication Pages** - Login and signup pages with Supabase integration
- **Page Templates** - CRUD pages, list views, and form templates
- **Development Scripts** - Automation and utility scripts
- **Global Configuration** - CSS, theming, and style configuration

### Key Features
- **Single Source Maintenance** - Only content.md needs updates, index auto-generates
- **Smart Search** - Find components by partial title matching
- **Categorized Organization** - Components grouped by type and purpose
- **Production Ready** - All components include error handling, accessibility, and TypeScript

## 🚀 Technology Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Authentication**: Supabase Auth with server-side sessions
- **Database**: PostgreSQL via Supabase
- **Icons**: Lucide React
- **Testing**: Jest with comprehensive workflow testing

## 📦 Content Filtering System

The MCP server implements intelligent content filtering:
- **IGNORE directives** in index.md files filter out sections from content.md
- **Token efficiency** by preventing AI agents from seeing outdated content
- **Dynamic filtering** applied during content retrieval

## 🔧 Development Tools

### Database Documentation Generator
Automated script that generates comprehensive database schema documentation:
```bash
./scripts/generate-database-docs.sh
```
- Discovers tables via Supabase REST API
- Documents schemas, column types, and constraints
- Checks RLS (Row Level Security) implementation
- Creates read-only DATABASE.md output

### Testing Framework
```bash
npm test                    # Run all tests
npm run test:workflows     # Test workflow system
npm run test:e2e-workflows # End-to-end workflow testing
```

## 📡 Deployment & Usage

### Vercel Deployment
- Uses `@vercel/mcp-adapter` for Next.js integration
- Requires **Fluid compute** for efficient execution
- SSE transport requires Redis via `REDIS_URL` environment variable
- Deploy using the [Next.js MCP template](https://vercel.com/templates/next.js/model-context-protocol-mcp-with-next-js)

### Testing the Server
```bash
# Test MCP tools
node scripts/test-client.mjs <server-url>

# Test end-to-end workflows  
npm run test:e2e-workflows
```

### Claude Code Integration

#### Quick Setup
```bash
# Add MCP server
claude mcp add --transport http lolek-mcp https://mcp-server-flax.vercel.app/mcp

# Verify configuration
claude mcp list

# Remove if needed
claude mcp remove lolek-mcp
```

#### Manual Configuration
Add to Claude Code MCP settings:
```json
{
  "mcpServers": {
    "lolek-mcp": {
      "transport": {
        "type": "http", 
        "url": "https://mcp-server-flax.vercel.app/mcp"
      }
    }
  }
}
```

### Windsurf Integration

Add to Windsurf MCP configuration:
```json
{
  "mcpServers": {
    "lolek-mcp": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp-server-flax.vercel.app/mcp"
      ]
    }
  }
}
```

This configuration uses `mcp-remote` to connect to the deployed MCP server.

## ⚠️ Important Setup Note

**After configuring the MCP server connection, always start by running `get-introduction`**. This tool provides critical setup instructions including downloading the CLAUDE.md file that ensures proper usage patterns and consistency across all projects using lolek-mcp.

## 🚀 Getting Started

### Essential First Step
**Before doing anything else, run the `get-introduction` tool**. This tool will:
- Provide an overview of all server capabilities
- Guide you through the mandatory setup process
- **Instruct you to download the CLAUDE.md file and save it to your project**

This CLAUDE.md file contains strict operational rules that ensure consistency and proper usage of the lolek-mcp server. Following this setup is **critical for success**.

```
Claude, use get-introduction to get started and follow the setup instructions exactly.
```

## 🎯 Example Usage

### Quick Start with Documentation
```
Claude, use get-introduction to understand the server capabilities, then use get-development-guide-index to see all available components and patterns.
```

### Finding Components
```
Claude, use get-development-guide-index to see all available components, then use get-development-guide-section with title "MainSidebar" to get the sidebar component details.
```

### Feature Planning
```
Claude, use get-workflow-template with type "feature" to help me plan a bulk contact import feature.
```

### Getting Complete Development Context
```
Claude, use get-development-guide-content to get the complete development guide with all examples and patterns.
```

### Finding Specific Patterns
```
Claude, use get-development-guide-section with title "authentication" to get login and signup page examples.
```

## 🔍 Troubleshooting

- **Server Connection**: Verify URL accessibility and proper deployment
- **Tool Errors**: Check that all required parameters are provided
- **Quality Evaluation**: Ensure pre-planning answers are in valid JSON format
- **Build Issues**: Run `npm run build` to check for compilation errors

## 📄 Additional Resources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Vercel MCP Adapter](https://www.npmjs.com/package/@vercel/mcp-adapter)
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)

---

**Built with ❤️ by Lolek Productions**  
*Empowering AI agents with structured development workflows and comprehensive documentation navigation.*