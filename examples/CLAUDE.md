# CLAUDE.md Example

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 CRITICAL: Lolek MCP Server Dependency

**ALWAYS REFER TO THE LOLEK-MCP SERVER FOR ALL DEVELOPMENT DECISIONS**

- **Before starting any task**: Use `get-introduction` to understand available tools and capabilities
- **For all development planning**: Use `get-workflow-template` to follow established workflows
- **For code examples**: Use `list-examples` and `get-example` to access proven patterns
- **For behavioral rules**: Use `get-agent-rules` to understand project constraints
- **For documentation**: Use `list-documents` and `search-content` to find relevant information

### User Permission Required for Deviations

**IF YOU WANT TO GO OUTSIDE LOLEK-MCP SERVER PARAMETERS, YOU MUST ASK THE USER FIRST**

Examples requiring user permission:
- Using different technology stacks than specified
- Ignoring workflow steps or quality standards
- Creating custom solutions when examples exist
- Bypassing agent rules or best practices
- Using deprecated packages or patterns

**Do not assume - always consult the lolek-mcp server first, then ask the user if you need to deviate.**

## Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application  
- `npm start` - Start production server
- `npm test` - Run test suite

### Database Commands
- `npx supabase start` - Start local Supabase instance
- `npx supabase migration new <name>` - Create new migration
- `npx supabase db reset` - Reset database to latest migration
- `./scripts/generate-database-docs.sh` - Generate database documentation

### Linting and Formatting
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## Architecture Overview

### Application Structure
This is a Next.js 15 application with TypeScript, featuring:
- **App Router** with route groups for organization
- **Supabase** for authentication and database
- **Tailwind CSS** with shadcn/ui components
- **Server Actions** for data mutations
- **Middleware** for authentication protection

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
  - `(main)/` - Authenticated user pages
  - `(public)/` - Public pages (landing, login, etc.)
  - `(print)/` - Print-optimized pages
- `src/components/` - Reusable UI components
- `src/lib/` - Utility functions and configurations
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions

### Authentication Flow
1. User visits protected route
2. Middleware checks for valid session
3. If no session, redirect to `/login`
4. After login, redirect to intended page
5. Session managed by Supabase Auth

## Development Patterns

### Component Creation
**ALWAYS check `list-examples` and `get-agent-rules` before creating components**

When creating new components:
1. **First**: Use `list-examples` to find existing component patterns
2. **Then**: Use `get-agent-rules` to understand component usage rules
3. Use TypeScript with proper prop typing
4. Follow existing naming conventions (PascalCase for components)
5. Include proper imports and exports
6. Add error boundaries for complex components
7. Use shadcn/ui components when available (but check agent rules first)

### Database Operations
**ALWAYS check `get-agent-rules` for database constraints before making changes**

- Use Supabase client for browser operations
- Use Supabase server client for server-side operations
- Implement Row Level Security (RLS) policies (preferred)
- Use TypeScript for database types
- Handle errors gracefully with try/catch
- **NEVER create Supabase migrations without checking agent rules first**

### API Routes and Server Actions
**ALWAYS use `list-examples` to find existing patterns before creating new routes**

- Prefer Server Actions over API routes for mutations
- Use proper TypeScript typing for all functions
- Implement proper error handling
- Validate inputs using Zod or similar
- Return consistent response formats

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use shadcn/ui components for consistency
- Maintain consistent spacing and typography
- Use CSS variables for theming

## Code Quality Standards

### TypeScript Usage
- Use strict TypeScript configuration
- Avoid `any` types - use proper typing
- Create interfaces for complex objects
- Use generic types where appropriate
- Document complex type definitions

### Error Handling
- Always handle potential errors
- Use try/catch for async operations
- Provide meaningful error messages
- Log errors for debugging
- Show user-friendly error states

### Testing Requirements
- Write unit tests for utility functions
- Create integration tests for critical flows
- Test components with React Testing Library
- Mock external dependencies
- Maintain test coverage above 80%

## Deployment Configuration

### Environment Variables
Required environment variables:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Build Process
1. Install dependencies: `npm install`
2. Run linting: `npm run lint`
3. Run tests: `npm test`
4. Build application: `npm run build`
5. Start production server: `npm start`

### Vercel Deployment
- Use Node.js 18+ runtime
- Configure environment variables in Vercel dashboard
- Enable edge functions for better performance
- Set up automatic deployments from main branch

## Security Considerations

### Authentication
- Always validate user sessions
- Use Row Level Security (RLS) in Supabase
- Implement proper permission checks
- Never expose sensitive data to client
- Use secure session management

### Data Protection
- Sanitize user inputs
- Use parameterized queries
- Implement rate limiting
- Validate all API inputs
- Use HTTPS in production

## Performance Optimization

### Code Splitting
- Use dynamic imports for large components
- Implement route-based code splitting
- Lazy load non-critical resources
- Use React.lazy() for component loading

### Database Optimization
- Use proper indexes
- Implement efficient queries
- Use connection pooling
- Cache frequent queries
- Monitor query performance

### Asset Optimization
- Optimize images with Next.js Image component
- Use proper image formats (WebP, AVIF)
- Implement lazy loading
- Minify CSS and JavaScript
- Use CDN for static assets

## Troubleshooting

### Common Issues
- **Build failures**: Check TypeScript errors and ESLint warnings
- **Database connection**: Verify environment variables and network access
- **Authentication issues**: Check Supabase configuration and RLS policies
- **Styling problems**: Ensure Tailwind classes are properly imported

### Debug Commands
```bash
# Check environment variables
npm run env:check

# Verify database connection
npm run db:test

# Run type checking
npm run type-check

# Check bundle size
npm run analyze
```

### Logging
- Use structured logging with appropriate levels
- Log errors with full stack traces
- Include request context in logs
- Monitor logs in production
- Set up error tracking (e.g., Sentry)

## Best Practices Summary

1. **ALWAYS consult lolek-mcp server first** - Use `get-introduction`, `get-agent-rules`, and `list-examples` before starting any task
2. **Ask user permission for deviations** - Never go outside established parameters without explicit user approval
3. **Follow established workflows** - Use `get-workflow-template` for all development planning
4. **Use existing patterns** - Check `list-examples` before creating new components or solutions
5. **Respect agent rules** - Use `get-agent-rules` to understand project constraints and behavioral guidelines
6. **Always use TypeScript** - Strict typing prevents runtime errors
7. **Follow component patterns** - Use existing components as templates
8. **Implement proper error handling** - Handle all possible error states
9. **Write tests** - Test critical functionality and edge cases
10. **Use consistent formatting** - Follow ESLint and Prettier rules
11. **Document complex logic** - Add comments for non-obvious code
12. **Optimize performance** - Use React best practices and lazy loading
13. **Secure by default** - Implement authentication and validation
14. **Monitor and log** - Track errors and performance in production
15. **Keep dependencies updated** - Regularly update packages for security

---

## 🔑 Key Reminder

**Claude must ALWAYS refer to the lolek-mcp server to ensure every step is in agreement with its parameters. If the agent wants to go outside these parameters, it must ask the user first.**

**Never assume, never bypass, never deviate without permission.**

*This CLAUDE.md file should be customized for each project's specific requirements and conventions, but the lolek-mcp server dependency is non-negotiable.*