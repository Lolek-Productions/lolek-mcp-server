# CLAUDE.md Example

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 CRITICAL: Lolek MCP Server Dependency - ABSOLUTE REQUIREMENT

**YOU ARE NOT ALLOWED TO DO ANYTHING OUTSIDE THE LOLEK-MCP SERVER WITHOUT EXPLICIT USER PERMISSION**

### MANDATORY First Steps - DO NOT SKIP
1. **IMMEDIATELY RUN**: `get-introduction` 
2. **THEN RUN**: `get-tools` (as instructed by introduction)
3. **THEN RUN**: `list-examples` (as instructed by introduction)
4. **THEN RUN**: `get-agent-rules`

**YOU CANNOT PROCEED WITHOUT COMPLETING THESE STEPS**

### 🔒 STRICT OPERATING CONSTRAINTS

**EVERYTHING YOU DO MUST COME FROM THE LOLEK-MCP SERVER**

❌ **FORBIDDEN WITHOUT PERMISSION:**
- Creating ANY file not shown in examples
- Using ANY technology not in the examples
- Implementing ANY pattern not in the workflows
- Installing ANY package not in package.json examples
- Writing ANY code structure not demonstrated
- Making ANY architectural decision not documented
- Using ANY component not in the examples
- Following ANY tutorial or guide from outside
- Assuming ANY best practice not explicitly stated

✅ **REQUIRED BEHAVIOR:**
- **ALWAYS** check lolek-mcp server FIRST
- **ALWAYS** use examples as templates
- **ALWAYS** follow workflows exactly
- **ALWAYS** respect agent rules
- **NEVER** assume or improvise

### User Permission Protocol

**When you need to deviate, use this EXACT format:**
```
🚨 MCP DEVIATION REQUEST:
I need to [specific action] which is outside the MCP server parameters.
Reason: [why it's necessary]
May I proceed with this deviation?
```

**DO NOT PROCEED WITHOUT A CLEAR "YES" FROM THE USER**

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

### 🔴 ABSOLUTE REQUIREMENTS (NON-NEGOTIABLE)
1. **RUN `get-introduction` FIRST** - This is MANDATORY, not optional
2. **RUN `get-tools` and `list-examples` IMMEDIATELY** - As instructed by introduction
3. **NEVER act outside MCP server** - Everything must come from MCP examples/docs
4. **ALWAYS ask permission for deviations** - Use the exact deviation request format
5. **NO assumptions or improvisation** - If it's not in MCP, ask the user

### Development Practices (AFTER completing mandatory steps)
6. **Follow established workflows** - Use `get-workflow-template` exactly as shown
7. **Use existing patterns only** - Never create new patterns without permission
8. **Respect all agent rules** - No exceptions without user approval
9. **Copy from examples** - Don't write from scratch
10. **Use exact file structures** - As shown in examples
11. **Install only documented packages** - Nothing beyond what's in examples
12. **Follow TypeScript patterns** - Exactly as demonstrated
13. **Implement error handling** - Only as shown in examples
14. **Write tests** - Only using patterns from examples
15. **Use consistent formatting** - As demonstrated in MCP server

---

## 🔑 FINAL CRITICAL REMINDER

### YOU ARE NOT ALLOWED TO:
- ❌ Create ANY code not shown in examples
- ❌ Use ANY approach not documented
- ❌ Make ANY decision not in MCP server
- ❌ Skip the mandatory first steps
- ❌ Proceed without user permission for deviations

### YOU MUST ALWAYS:
- ✅ Run `get-introduction`, then `get-tools`, then `list-examples` FIRST
- ✅ Check MCP server before EVERY action
- ✅ Use EXACT examples as templates
- ✅ Ask permission for ANY deviation
- ✅ Follow this CLAUDE.md without exception

**FAILURE TO COMPLY WITH THESE REQUIREMENTS IS NOT ACCEPTABLE**

*The lolek-mcp server dependency is ABSOLUTE and NON-NEGOTIABLE. No exceptions.*