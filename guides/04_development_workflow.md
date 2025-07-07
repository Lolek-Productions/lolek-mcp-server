# Chapter 4: Development Workflow

## Overview

This chapter covers essential development workflow tools and practices for building web applications efficiently. Development workflow encompasses the tools, scripts, and processes that streamline daily development tasks, from session management to database documentation.

## Purpose

Establish productive development workflows that:
- Provide efficient terminal session management for remote development
- Automate repetitive tasks through custom scripts
- Maintain up-to-date project documentation
- Support collaboration between developers and AI agents
- Ensure consistent development practices across projects

## Required Reading

- [Next.js Documentation](../docs/nextjs/) - For framework-specific build commands, development server, and configuration

## Chapter Focus

This chapter covers project-specific development workflows and tools. For detailed Next.js command documentation, reference the docs above.

---

## Terminal Session Management (tmux)

tmux provides persistent terminal sessions that survive disconnections, essential for remote development work.

### Basic Commands
```bash
tmux new -s work        # Start new session named "work"
Ctrl+b, d              # Detach (safe to disconnect)
tmux attach -t work     # Resume when back online
tmux ls                # List all sessions
tmux kill-session -t session_name # Remove a specific session
tmux kill-server       # Kill all sessions and stop server
```

### Common Use Cases
- **Remote Development**: Maintain long-running processes during disconnections
- **Multiple Projects**: Separate sessions for different projects or tasks
- **Collaboration**: Share sessions between team members

### Session Management Examples
```bash
# Close specific session by ID
tmux kill-session -t 2

# Start session with multiple windows
tmux new -s project -d 'npm run dev'  # See Next.js docs for dev command details
```

### Reference
- [2 min tmux overview (Fireship)](https://www.youtube.com/watch?v=vtB1J_zCv8I)

## Project Automation Scripts

### Available Scripts
- `start-project.sh` - Project initialization and setup
- `generate-database-docs.sh` - Database schema documentation

### ./scripts/generate-database-docs.sh

**Purpose**: Dynamically generate database structure documentation for AI consumption.

**Workflow**: 
1. Human constructs/modifies database structure in Supabase
2. Script extracts current schema and generates DATABASE.md
3. AI agents consume updated documentation to understand structure and business logic

**Philosophy**: 
- AI agents consume structure changes but don't create them
- Maintains human control over database architecture
- Provides real-time documentation for development collaboration
- Enables AI understanding of data relationships and business logic

**Usage**: Run this script whenever database structure changes to keep documentation current.

## Common Development Tasks

### Clearing Next.js Build Cache
Sometimes the Next.js build cache can cause issues with stale builds, component updates not reflecting, or build errors. When encountering these problems:

```bash
# Remove the Next.js cache directory
rm -rf .next

# Then restart your development server
npm run dev  # See Next.js docs for development server details
```

**When to use this:**
- Components not updating despite code changes
- Build errors that don't make sense
- Stale imports or module resolution issues
- After major dependency updates
- TypeScript errors that persist after fixes

For detailed Next.js build and caching information, see [Next.js documentation](../docs/nextjs/).

## Creating a flow: for example creating a homily

## Toast usage: define this