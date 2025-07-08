# Documents Directory Structure

This directory contains the documentation system for the Lolek MCP Server, designed to help AI agents quickly access and understand development resources.

## Directory Structure

```
documents/
├── README.md (this file)
├── development-guide/
│   ├── index.md      # Navigation structure with section headings
│   └── content.md    # Detailed implementation content
├── nextjs/
│   ├── index.md      # Next.js documentation structure
│   └── content.md    # Next.js detailed documentation
├── shadcn/
│   ├── index.md      # shadcn/ui component structure
│   └── content.md    # Component implementation details
└── supabase/
    ├── index.md      # Supabase documentation structure
    └── content.md    # Supabase implementation details
```

## File Types Explained

### index.md
- **Purpose**: Navigation and structure
- **Content**: Section headings, titles, and brief descriptions
- **Used by**: AI agents to quickly navigate and find specific topics
- **Special feature**: Can contain IGNORE directives to filter content

### content.md
- **Purpose**: Detailed implementation content
- **Content**: Full documentation, code examples, detailed explanations
- **Used by**: AI agents when they need complete information about a topic
- **Filtered by**: IGNORE directives from the corresponding index.md file

## Content Filtering System

The MCP server implements intelligent content filtering to improve AI agent efficiency:

### How Filtering Works
1. When searching or reading content.md files, the system checks the corresponding index.md
2. Any IGNORE directives in index.md are applied to filter out sections from content.md
3. This prevents AI agents from seeing outdated or irrelevant content

### IGNORE Directive Syntax

Add IGNORE directives in index.md files:

```markdown
<!-- IGNORE: Section Name -->
<!-- IGNORE: Another Section to Hide -->
```

Example:
```markdown
## 3. Authentication Setup
Brief description of auth setup

<!-- IGNORE: Legacy Auth System -->
<!-- IGNORE: Deprecated OAuth Flow -->
```

This will hide the "Legacy Auth System" and "Deprecated OAuth Flow" sections when content.md is accessed.

## Adding New Documentation

### Step 1: Create a New Topic Directory
```bash
mkdir documents/your-topic
```

### Step 2: Create index.md
Create an index.md with the navigation structure:

```markdown
# Your Topic Documentation

## 1. Getting Started
Brief introduction to the topic

## 2. Core Concepts
Overview of main concepts

## 3. Implementation Guide
Step-by-step implementation

<!-- IGNORE: Work in Progress Section -->
```

### Step 3: Create content.md
Add detailed content with matching section headers:

```markdown
# Your Topic Documentation

## 1. Getting Started
Detailed getting started guide with code examples...

## 2. Core Concepts
In-depth explanation of concepts...

## 3. Implementation Guide
Complete implementation details...

## Work in Progress Section
This section will be filtered out due to IGNORE directive
```

## Best Practices

1. **Keep index.md concise**: Only headings and brief descriptions
2. **Put details in content.md**: All code examples and detailed explanations
3. **Use IGNORE wisely**: Hide outdated, incomplete, or irrelevant sections
4. **Match section headers**: Ensure headers in content.md match those in index.md
5. **Use clear section names**: Make it easy for AI agents to find information

## MCP Tools for Documentation

The following MCP tools work with this documentation structure:

- **list-documents**: Lists all available documentation topics
- **get-document-section**: Retrieves specific sections from index.md
- **get-document-titles**: Extracts titles from content.md or index.md
- **search-content**: Searches across all documentation with filtering applied

## Content Organization Tips

- **Group related content**: Keep similar topics in the same sections
- **Use numbered sections**: Helps with navigation (e.g., "## 1. Introduction")
- **Add code examples**: Include practical examples in content.md
- **Cross-reference**: Link between related documentation topics
- **Keep it current**: Use IGNORE directives to hide outdated content instead of deleting