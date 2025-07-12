# Templating System

This directory contains the mustache-style templating system for dynamic content generation across the MCP server.

## Overview

The templating system eliminates code duplication by allowing tools to reference and inject content from other tools and shared templates.

## Syntax

```mustache
{{tool:tool-name}}                    // Insert entire tool output
{{tool:tool-name:section}}            // Insert specific section
{{shared:template-name}}              // Insert shared template
{{module:property}}                   // Insert module-specific data
{{workflow:property}}                 // Insert workflow-specific data
{{env:variable}}                      // Insert environment/config data
```

## Usage

### In Tool Development

```typescript
import { resolveTemplate } from "../shared/template-engine";

const content = `
# Module: {{module:name}}

{{shared:server-actions}}

{{tool:get-claude-rules:security}}
`;

const resolved = await resolveTemplate(content, {
  module: {
    name: "Contact",
    tableName: "contacts",
    fields: ["name", "email", "phone"]
  }
});
```

### Available Templates

#### `/tools/shared/templates/`
- **server-actions.ts.template** - Complete server actions for CRUD operations
- **workflow-intro.md** - Standardized workflow introduction
- **tool-boilerplate.ts.template** - Tool definition boilerplate
- **sidebar-nav.ts.template** - Navigation integration code
- **file-reader-utility.ts.template** - File reading utility

## New Tool: generate-module-template

Use the new `generate-module-template` tool to generate templated code:

```typescript
// Generate server actions for a Contact module
{
  moduleName: "Contact",
  tableName: "contacts", 
  fields: ["name", "email", "phone"],
  icon: "Users",
  designType: "medium",
  templateType: "server-actions"
}
```

## Benefits

### Before Templating
- 150+ lines of duplicated server actions code per module
- Repeated workflow boilerplate across 4+ files  
- 12+ tools with identical error handling patterns
- Manual copying and customization prone to errors

### After Templating
- Single `{{shared:server-actions}}` reference
- Consistent patterns across all modules
- Automatic customization based on context
- DRY principle maintained throughout codebase

## Examples

### Server Actions Generation
```mustache
{{shared:server-actions}}
```
Generates complete TypeScript file with:
- Zod validation schemas
- CRUD operations (create, update, delete, fetch)
- Authentication verification
- RLS enforcement
- Error handling
- Cache revalidation

### Workflow Introduction
```mustache
{{shared:workflow-intro}}
```
Generates standardized workflow structure with:
- Introduction section
- When to use guidelines
- Overview with metadata
- Quality philosophy
- Project integration links

## Extension Points

### Adding New Templates
1. Create template file in `/tools/shared/templates/`
2. Use mustache syntax for dynamic content
3. Reference with `{{shared:template-name}}`

### Adding New Context Properties
1. Extend `TemplateContext` interface in `template-engine.ts`
2. Add processing logic in template engine
3. Use with `{{category:property}}` syntax

### Tool Integration
Any tool can use the templating system by importing `resolveTemplate` and providing appropriate context.

## Performance

- Template caching for repeated use
- Lazy loading of templates
- Recursive resolution with cycle detection
- Error handling with fallback content

This system significantly reduces code duplication while maintaining consistency and enabling rapid development of new modules and workflows.