# Documentation Directory

This directory contains comprehensive documentation for the MCP server and its components.

## Available Documentation Topics

- **`custom-components/`** - Custom component documentation (MainHeader, MainSidebar, Breadcrumb systems)
- **`nextjs/`** - Next.js framework documentation and patterns
- **`shadcn/`** - shadcn/ui component library documentation
- **`supabase/`** - Supabase database and authentication documentation
- **`sample-test/`** - Sample test data for content filtering functionality

## MCP Server Setup and Management

### Installing the MCP Server

To add this MCP server to Claude Desktop:

```bash
claude mcp add lolek-mcp-server
```

### Removing the MCP Server

To remove this MCP server from Claude Desktop:

```bash
claude mcp remove lolek-mcp-server
```

### Available MCP Tools

The server provides these tools for documentation navigation:

1. **`list-docs`** - List all available documentation topics (defaults to showing custom-components first)
2. **`get-sections`** - Browse high-level sections within a topic (defaults to custom-components)
3. **`get-headings`** - Extract specific content and headings from documentation (defaults to custom-components)

### Content Filtering

The documentation system includes content filtering using `<!-- IGNORE -->` directives in index.md files to:
- Hide deprecated or obsolete content
- Filter out experimental features
- Customize documentation visibility

## Development

### Testing the Server

```bash
# Start the development server
npm run dev

# Test the MCP tools
node scripts/test-client.mjs http://localhost:3000

# Test content filtering functionality
node scripts/test-end-to-end-filtering.js
```

### Documentation Structure

Each documentation topic follows this structure:
- **`index.md`** - Topic overview and section organization
- **`content.md`** - Detailed documentation entries with TITLE: headers
- **Filtering** - Uses `<!-- IGNORE -->` directives for content control

## Workflow

Recommended workflow for using the MCP tools:

1. **`list-docs`** → See available topics
2. **`get-sections`** → Browse topic areas  
3. **`get-headings`** → Extract specific content

The tools are optimized for AI agents and default to `custom-components` for component-related queries.