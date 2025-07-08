# Agent Rules

This file contains behavioral rules and constraints for the AI agent when working on this project.

## Code Generation Rules

### Database & Migrations
- **DO NOT create Supabase migrations** - Handle database changes through other means
- **DO NOT modify existing migration files** - Always create new migrations if database changes are absolutely necessary

### Component Usage
- **Always use custom components before shadcn/ui components** - Check the `/examples` folder and `/documents/development-guide/` documentation first
- **Prefer existing custom components over creating new ones** - Extend or modify existing components when possible
- **Only use shadcn/ui components when no custom alternative exists** - Document the reason for using shadcn/ui instead of custom components

### Component-Specific Rules
- **For Toast notifications - always use shadcn/ui Toast components** - Use shadcn/ui for all toast messaging needs
- **For Confirmation dialogs - always use shadcn/ui Dialog components** - Use shadcn/ui for all confirmation dialog implementations

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