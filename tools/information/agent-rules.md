# MCP Server Interaction Rules

**PURPOSE**: This document defines how Claude/AI agents should interact with the lolek-mcp server.
**ACCESSED VIA**: `get-claude-rules` tool
**SCOPE**: Server-level behavioral guidelines, tool usage protocols, and MCP interaction patterns

This file contains behavioral rules and constraints for AI agents when using the lolek-mcp server.

## 🚨 CRITICAL WORKFLOW REQUIREMENT

### Before Starting ANY Workflow
**MANDATORY**: Before beginning any workflow (module, feature, create-app, wizard), agents MUST:

1. **Run `get-workflow-rules`** - Get master workflow rules and database requirements
2. **Understand DATABASE.md requirement** - Any database change requires immediate DATABASE.md update
3. **Review all workflow rules** - Follow universal requirements for all workflows

**This is non-negotiable and applies to ALL workflow-related tasks.**

## Code Generation Rules

### Database & Migrations
- **DO NOT create Supabase migrations** - Handle database changes through other means
- **DO NOT modify existing migration files** - Always create new migrations if database changes are absolutely necessary

### Component Usage
- **Always use custom components before shadcn/ui components** - Check the `/examples` folder and `/documents/development-guide/` documentation first
- **Prefer existing custom components over creating new ones** - Extend or modify existing components when possible
- **Only use shadcn/ui components when no custom alternative exists** - Document the reason for using shadcn/ui instead of custom components
- **Use 'shadcn' package, not 'shadcn-ui'** - The 'shadcn-ui' package is deprecated. Always use the 'shadcn' package instead

### Component-Specific Rules
- **For Toast notifications - always use shadcn/ui Toast components** - Use shadcn/ui for all toast messaging needs
- **For Confirmation dialogs - always use shadcn/ui Dialog components** - Use shadcn/ui for all confirmation dialog implementations
- **For Loading states - ALWAYS place Loading components WITHIN PageContainer** - Never replace PageContainer with Loading components. Use `<PageContainer><Loading centered={false} /></PageContainer>` pattern. Reference `/examples/pages/loading-example-page.tsx` for correct implementation
- **For Form inputs - ALWAYS use FormField component** - Use FormField for ALL form inputs (text, textarea, select) unless you have a specific exception. You MUST request permission before using direct Input/Textarea/Select components. Exception request format: "🚨 FORM FIELD EXCEPTION REQUEST: I need to use direct [Input/Textarea/Select] for [specific use case] because FormField doesn't support [specific requirement]. May I proceed?" Reference `/examples/pages/form-example-page.tsx` for correct patterns

### Code Style & Architecture
- **Follow existing patterns in the codebase** - Maintain consistency with established conventions
- **Use TypeScript strictly** - No `any` types without explicit justification
- **Maintain existing folder structure** - Don't reorganize without explicit permission

## Development Workflow Rules

### File Management
- **Always read existing files before making changes** - Understand context before modifying
- **Use Edit tool for modifications, not Write tool** - Preserve existing content and structure
- **Create new files only when absolutely necessary** - Prefer editing existing files

### Documentation
- **Update documentation when adding new components** - Keep `/documents/development-guide/` up to date
- **Add usage examples for new components** - Include practical implementation examples
- **Document dependencies clearly** - List all required packages and setup steps
- **When user shares new knowledge for development guidelines, always add it to `/documents/development-guide/content.md` first, then update `/documents/development-guide/index.md`** - Follow the two-step process: content first, then index navigation

## Project-Specific Rules

### Authentication
- **Use Supabase for authentication** - Don't implement custom auth solutions
- **Integrate with existing AppContextProvider** - Use the established context pattern
- **Handle loading and error states consistently** - Follow patterns from UserProfile component

### UI/UX
- **Maintain responsive design** - All components must work on mobile and desktop
- **Follow Lolek Productions branding** - Use established colors, fonts, and logo
- **Keep accessibility in mind** - Use proper ARIA labels and semantic HTML

### Navigation & Redirects
- **After creating a simple entity on a create page, redirect to the index page** - Don't redirect to the detail view or stay on the create page after successful creation

## Exceptions & Overrides

These rules can be overridden when:
- Explicitly requested by the user
- Technical constraints make following the rule impossible
- The rule conflicts with a more important requirement

**Note**: Always explain why a rule is being overridden when it happens.

---

*Last updated: 2025-07-08*  
*Edit this file to add new rules or modify existing ones*