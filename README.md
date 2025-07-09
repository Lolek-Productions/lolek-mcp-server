# Lolek MCP Server

**Next.js MCP Server with Documentation Navigation and Development Workflows**

This comprehensive MCP (Model Context Protocol) server provides AI agents with efficient documentation navigation tools and structured development workflows. Built with Next.js and the `@vercel/mcp-adapter`, it helps AI agents build applications quickly and consistently by providing pre-built components, development guidance, and workflow management.

## 🎯 Purpose

This MCP server is designed to help AI agents:
- **Navigate large documentation efficiently** without loading massive files
- **Access pre-built, production-ready React components** for rapid development
- **Follow structured development workflows** with quality evaluation
- **Build consistent applications** using established patterns and best practices

## 🛠️ Available Tools (11 Total)

### Documentation Navigation Tools

#### 1. `list-documents` - Document Discovery
**Purpose**: Discover available documentation topics  
**Usage**: Start here to see all available documentation categories

#### 2. `search-content` - Content Search  
**Purpose**: Search across all documentation with filtering and context  
**Parameters**: 
- `query` (required): Search terms
- `scope` (optional): "docs", "guides", "examples" (defaults to "docs")
- `limit` (optional): Maximum results (default 50)
**Usage**: Search for specific topics, components, or implementation patterns


### Information & Context Tools

#### 3. `get-introduction` - Server Introduction
**Purpose**: Get detailed information about this MCP server's capabilities

#### 4. `get-agent-rules` - Agent Behavioral Rules
**Purpose**: Retrieve guidelines for AI agent behavior and best practices

#### 5. `get-tools` - Tool Reference
**Purpose**: Get comprehensive information about all available MCP tools

### Workflow Management Tools

#### 6. `get-workflows` - Available Workflows
**Purpose**: List all available development workflow types  
**Returns**: Module, Feature, Bug Fix, and Commit workflows with descriptions

#### 7. `get-workflow-template` - Workflow Templates
**Purpose**: Get complete workflow template with embedded questions and quality standards  
**Parameters**: 
- `type` (required): "module" or "feature"
**Usage**: Get comprehensive workflow with pre-planning questions, quality evaluation criteria, and implementation steps

#### 8. `evaluate-workflow-progress` - Progress Evaluation
**Purpose**: Evaluate workflow progress and provide implementation guidance  
**Parameters**: 
- `type` (required): "module" or "feature"
- `currentStep` (required): Current workflow step ID
- `stepProgress` (required): Description of current progress
- `preplanningAnswers` (optional): JSON answers for pre-planning evaluation
**Usage**: Track progress through workflow steps and get quality feedback

#### 9. `load-documentation-context` - Bulk Context Loading
**Purpose**: Efficiently load all essential documentation context at once  
**Usage**: Load comprehensive context including documentation headings, agent rules, and available tools

### Example Management Tools

#### 10. `list-examples` - Available Examples
**Purpose**: List all available code examples organized by category  
**Usage**: Discover available React components, contexts, library files, and scripts

#### 11. `get-example` - Retrieve Example Code
**Purpose**: Get the code content of a specific example file  
**Parameters**: 
- `file` (required): Path to example file (e.g., "components/PublicHeader.jsx", "contexts/AppContextProvider.tsx")
**Usage**: Retrieve production-ready code examples with descriptions and usage notes

## 📊 Recommended Workflows

### Documentation Navigation Workflow
```
1. load-documentation-context → Load all essential context efficiently
   OR
   1. list-documents → See available topics
   2. search-content → Find specific information with context

2. Use specific tools as needed:
   - get-introduction → Server overview
   - get-agent-rules → Behavioral guidelines
   - get-tools → Tool reference
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
documents/
├── README.md                    # Documentation system overview
├── development-guide/           # Comprehensive development guidance
│   ├── content.md              # Complete component library and setup guides
│   └── index.md                # Navigation structure
├── nextjs/                     # Next.js framework documentation
│   ├── content.md              # 685+ Next.js implementation details
│   └── index.md                # Organized sections for navigation
├── shadcn/                     # shadcn/ui component library
│   ├── content.md              # 63+ component usage patterns
│   └── index.md                # Component categories
└── supabase/                   # Supabase integration guides
    ├── content.md              # Authentication and database patterns
    └── index.md                # Supabase service categories
```

## 🔄 Workflow System

The MCP server includes a consolidated workflow system with embedded planning:

### Workflow Structure
```
workflows/
├── feature-workflow.json       # Complete 9-step feature workflow
├── module-workflow.json        # Complete 12-step module workflow
└── __tests__/                  # Comprehensive test suite
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

## 🧩 Component Library

The development guide includes production-ready React components:

### Navigation & Layout
- **MainHeader** - Application header with breadcrumbs
- **MainSidebar** - Navigation sidebar with collapsible sections
- **PublicHeader/Footer** - Public page navigation
- **PageContainer** - Consistent page layouts

### UI Components  
- **CenteredFormCard** - Form container with responsive design
- **CopyButton** - Clipboard functionality with feedback
- **CollapsibleNavSection** - Expandable navigation groups
- **UserProfile** - Authentication dropdown with Supabase

### Context & State
- **AppContextProvider** - Global state management with Supabase auth

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

## 🎯 Example Usage

### Quick Start with Documentation
```
Claude, use load-documentation-context to get all essential context, then help me build a contact management feature.
```

### Feature Planning
```
Claude, use get-workflow-template with type "feature" to help me plan a bulk contact import feature.
```

### Finding Components
```
Claude, use list-examples to see all available components, then use get-example to get the sidebar code.
```

### Getting Example Code
```
Claude, use get-example with file "components/main-sidebar.tsx" to get the sidebar component code.
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