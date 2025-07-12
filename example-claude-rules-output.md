# Example: get-claude-rules Output for lolek-mcp-server

This is what lolek-mcp's `get-claude-rules` tool would return for this MCP server project:

```markdown
# CLAUDE.md

This file provides strict operational rules for the lolek-mcp-server codebase. These rules OVERRIDE all default behaviors.

## STRICT OPERATIONAL RULES

### 1. MCP Tool Development
- ALWAYS define new tools in `app/[transport]/route.ts` using the established pattern
- NEVER create separate tool files - all tools must be in the main route handler
- ALWAYS test with `node scripts/test-client.mjs` before considering a tool complete
- NEVER modify tool schemas without testing parameter validation

### 2. Documentation Hierarchy
- NEVER duplicate framework documentation - reference `/documents/nextjs/` or `/documents/shadcn/`
- ALWAYS add project-specific patterns to `/guides/`
- NEVER create README files unless explicitly requested
- ALWAYS use TITLE: format for searchable content sections

### 3. Error Handling Protocol
- ALWAYS wrap tool handlers in try-catch blocks
- ALWAYS return `{error: string}` format for tool failures
- NEVER expose internal error details to MCP clients
- ALWAYS log errors for debugging while returning safe messages

### 4. Testing Requirements
- ALWAYS run these commands before marking any task complete:
  - `npm run build` - MUST pass without errors
  - `node scripts/test-client.mjs` - MUST successfully connect and list tools
  - Test each modified tool individually
- NEVER commit without successful build and test

### 5. Development Workflow
- ALWAYS use `npm run dev` for local development
- ALWAYS check `node tools/workflow-helper.js workflow mcp-tool` before adding tools
- NEVER use `npm install` - this project uses `pnpm`
- ALWAYS check existing patterns in codebase before implementing

### 6. Performance Rules
- NEVER load all documentation content at once
- ALWAYS use the three-step navigation pattern (list → section → titles)
- NEVER return more than 50 titles in a single response
- ALWAYS paginate large result sets

### 7. Code Style Enforcement
- NEVER add comments unless fixing a bug
- ALWAYS follow existing TypeScript patterns
- NEVER use `any` type - derive types from '@modelcontextprotocol/sdk'
- ALWAYS use async/await over promises

### 8. Deployment Checklist
When deploying changes:
1. Run `npm run build`
2. Test all modified tools
3. Verify Redis connection for SSE transport
4. Check Vercel function timeout settings
5. Ensure fluid compute is enabled

## FORBIDDEN ACTIONS
- Creating new documentation files without explicit request
- Modifying core MCP adapter code
- Adding dependencies without discussing first
- Creating test files without test framework setup
- Implementing features not in the current task scope

## REQUIRED ACTIONS
- Test every tool modification with the test client
- Validate all parameter schemas
- Check build before marking complete
- Follow three-step doc navigation pattern
- Use existing code patterns

## PROJECT-SPECIFIC CONTEXT
This is a Next.js-based MCP server providing documentation tools. Focus on:
- Token-efficient documentation access
- Reliable tool parameter validation  
- Clean error handling
- Consistent response formats
```

## How This Would Work

1. **Agent calls lolek-mcp**: `get-claude-rules --project-type "mcp-server" --framework "nextjs"`
2. **lolek-mcp analyzes**: Detects MCP patterns, Next.js setup, documentation structure
3. **Returns rules**: Formatted CLAUDE.md content with strict, specific instructions
4. **Agent writes locally**: Updates CLAUDE.md, rules take immediate effect

The rules are:
- **Strict**: "ALWAYS", "NEVER", "MUST" language
- **Specific**: Exact file paths, command sequences
- **Opinionated**: Enforces best practices discovered from guides
- **Project-aware**: Tailored to this specific MCP server setup