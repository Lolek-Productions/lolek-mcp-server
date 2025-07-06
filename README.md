# Next.js MCP Server with Documentation Navigation

**Uses `@vercel/mcp-adapter`**

This MCP server provides efficient navigation tools for large documentation files, designed to help AI models traverse content without loading massive files all at once.

## Available Tools

### 1. `list-docs` - Document Discovery
**Purpose**: Discover what documentation topics are available  
**Usage**: Start here to see available topics

### 2. `get-sections` - Topic Navigation  
**Purpose**: Get high-level topic areas from documentation  
**Parameters**: `topic` (optional): "nextjs", "shadcn"  
**Usage**: Use after `list-docs` to see topic areas

### 3. `get-headings` - Content Extraction
**Purpose**: Extract specific content from documentation  
**Parameters**: 
- `topic` (optional): "nextjs", "shadcn"
- `file` (optional): "content", "index", "headings" 
- `type` (optional): "markdown" for # headings, "titles" for TITLE: lines

## Recommended Workflow

```
1. list-docs          → See available topics
2. get-sections       → Browse topic areas  
3. get-headings       → Extract specific content
4. Targeted searches  → Find exact information
```

## Documentation Structure

```
docs/
├── nextjs/
│   ├── content.md    # 685 Next.js titles
│   └── index.md      # 20 organized sections
└── shadcn/
    ├── content.md    # 63 shadcn/ui titles  
    └── index.md      # 10 organized sections
```

This approach provides **token efficiency**, **faster navigation**, and **better context management** for large documentation sets.

## Usage

This sample app uses the [Vercel MCP Adapter](https://www.npmjs.com/package/@vercel/mcp-adapter) that allows you to drop in an MCP server on a group of routes in any Next.js project.

Update `app/[transport]/route.ts` with your tools, prompts, and resources following the [MCP TypeScript SDK documentation](https://github.com/modelcontextprotocol/typescript-sdk/tree/main?tab=readme-ov-file#server).

## Notes for running on Vercel

- To use the SSE transport, requires a Redis attached to the project under `process.env.REDIS_URL`
- Make sure you have [Fluid compute](https://vercel.com/docs/functions/fluid-compute) enabled for efficient execution
//From the website: As of April 23, 2025, fluid compute is enabled by default for new projects.
- After enabling Fluid compute, open `app/route.ts` and adjust `maxDuration` to 800 if you using a Vercel Pro or Enterprise account
- [Deploy the Next.js MCP template](https://vercel.com/templates/next.js/model-context-protocol-mcp-with-next-js)

## Sample Client

`script/test-client.mjs` contains a sample client to try invocations.

```sh
node scripts/test-client.mjs https://mcp-server-flax.vercel.app
```


