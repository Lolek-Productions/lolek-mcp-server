# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application  
- `npm start` - Start production server
- `node scripts/test-client.mjs <url>` - Test MCP server tools (default: mcp-server-flax.vercel.app)

### Workflow Helper
- `node tools/workflow-helper.js workflow <type>` - Show development workflow steps
- `node tools/workflow-helper.js checklist <type>` - Show completion checklists
- `node tools/workflow-helper.js template <name> <purpose>` - Generate module templates

## Architecture Overview

### MCP Server Implementation
This is a Next.js-based MCP (Model Context Protocol) server that provides documentation navigation tools. The server uses `@vercel/mcp-adapter` to expose MCP tools via Next.js API routes.

### Key Components
- **Main Route Handler**: `app/[transport]/route.ts` - Contains MCP server configuration and tool definitions
- **Documentation Tools**: Three primary tools for efficient doc navigation:
  - `list-docs` - Discover available documentation topics
  - `get-sections` - Browse high-level topic areas  
  - `get-headings` - Extract specific content from docs
- **Workflow Helper**: `tools/workflow-helper.js` - CLI tool for accessing development workflows and templates

### Data Structure
- **Documentation**: `docs/` directory with topic-based organization
  - `docs/nextjs/` - Next.js documentation (685 titles)
  - `docs/shadcn/` - shadcn/ui documentation (63 titles)
  - Each topic has `content.md` and `index.md` files
- **Development Guides**: `guides/` directory with comprehensive development guides (8 chapters)

### Tool Navigation Pattern
The MCP server implements a three-step navigation workflow:
1. `list-docs` → See available topics
2. `get-sections` → Browse topic areas
3. `get-headings` → Extract specific content

This pattern provides token efficiency and better context management for large documentation sets.

### Development Architecture
- **Next.js 15.2.4** with TypeScript and React 19 - See [Next.js documentation](docs/nextjs/) for detailed framework guidance
- **Vercel MCP Adapter** for MCP protocol integration
- **Redis support** for SSE transport (requires `REDIS_URL` environment variable)
- **Fluid compute** recommended for Vercel deployment
- **pnpm** as package manager
- **shadcn/ui** for component library - See [shadcn/ui documentation](docs/shadcn/) for component usage

### Testing and Validation
- Test clients available in `scripts/` directory
- MCP tools can be tested with the provided test client
- Workflow validation available through workflow-helper tool

## Development Patterns

### Adding New MCP Tools
When adding new tools to the MCP server:
1. Add tool definition in `app/[transport]/route.ts` using `server.tool()`
2. Include tool in capabilities object
3. Follow existing patterns for error handling and response formatting
4. Test with `scripts/test-client.mjs`

### Documentation Structure
- **docs/**: Framework reference documentation (Next.js, shadcn/ui)
- **guides/**: Project-specific development patterns and workflows
- **Cross-references**: Guides reference docs instead of duplicating technical information
- Use TITLE: lines for content extraction
- Organize with numbered sections (## 1. Section Name)
- Maintain clear separation between content.md and index.md files

### Framework Integration
- Refer to [Next.js documentation](docs/nextjs/) for framework-specific patterns
- Refer to [shadcn/ui documentation](docs/shadcn/) for component implementation
- Focus guides on project-specific applications rather than duplicating framework docs