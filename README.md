# Next.js MCP Server with Documentation Navigation

**Uses `@vercel/mcp-adapter`**

This MCP server provides efficient navigation tools for large documentation files, designed to help AI models traverse content without loading massive files all at once.

## Available Tools

### Documentation Navigation Tools

#### 1. `list-docs` - Document Discovery
**Purpose**: Discover what documentation topics are available  
**Usage**: Start here to see available topics

#### 2. `get-document-section` - Section Retrieval  
**Purpose**: Get one or more sections' content from a topic's index file  
**Parameters**: 
- `topic` (optional): "development-guide", "nextjs", "shadcn" (defaults to "development-guide")
- `sectionName` (required): Name of the section(s) to retrieve. Use comma-separated values for multiple sections (e.g., "Navigation Components, Layout Components")
**Usage**: Use after `list-docs` to get specific section content. Supports multiple sections in one request.

#### 3. `get-document-titles` - Documentation Title Extraction and Search
**Purpose**: Extract and search documentation titles from any topic's content files  
**Parameters**: 
- `topic` (optional): "development-guide", "nextjs", "shadcn" (defaults to "development-guide")
- `file` (optional): "content", "index", "headings" (defaults to "content")
- `type` (optional): "markdown" for # headings, "titles" for TITLE: lines (defaults to "titles")
- `keywords` (optional): Search keywords to filter titles (case-insensitive, space-separated)
**Usage**: Extract titles and optionally filter by keywords for targeted searches

### Simple Planning Tools

#### 4. `get-workflow` - Get Available Workflow Types
**Purpose**: See what workflow types are available for planning  
**Parameters**: 
- `type`: "module", "feature", "bug", or "commit"
**Usage**: Discover workflow options for your planning needs

#### 5. `get-preplanning-questions` - Get Planning Questions
**Purpose**: Get structured questions to help create a solid plan  
**Parameters**: 
- `type`: "module" or "feature"
**Usage**: Start the planning process with guided questions

#### 6. `evaluate-preplanning-answers` - Evaluate Plan Quality
**Purpose**: Evaluate your planning answers for quality and completeness  
**Parameters**: 
- `type`: "module" or "feature"
- `answers`: JSON formatted answers to planning questions
**Usage**: Ensure your plan meets quality standards before implementation

#### 7. `generate-implementation-plan` - Create Implementation Plan
**Purpose**: Generate a detailed implementation plan from your evaluated answers  
**Parameters**: 
- `type`: "module" or "feature"
- `answers`: JSON formatted planning answers
- `evaluationScore` (optional): Score from evaluation step
**Usage**: Convert planning into actionable implementation steps

#### 8. `create-simple-checklist` - Create Simple Checklist
**Purpose**: Generate a basic checklist file for tracking progress  
**Parameters**: 
- `type`: "feature" or "module"
- `name`: Name for the checklist
- `filePath` (optional): Custom file path
**Usage**: Create a simple markdown checklist for progress tracking

### Pre-Planning Tools (Used within workflows)

#### 8. `get-preplanning-questions` - Get Pre-Planning Questions
**Purpose**: Get structured questions for module or feature pre-planning  
**Parameters**: `type`: "module" or "feature"  
**Usage**: Start pre-planning process by getting relevant questions

#### 9. `evaluate-preplanning-answers` - Evaluate Pre-Planning
**Purpose**: Evaluate answers against quality standards and provide feedback  
**Parameters**: 
- `type`: "module" or "feature"
- `answers`: JSON formatted answers to the pre-planning questions
**Usage**: Get quality assessment and feedback on your pre-planning

#### 10. `generate-implementation-plan` - Generate Implementation Plan
**Purpose**: Create detailed implementation plan from evaluated pre-planning  
**Parameters**: 
- `type`: "module" or "feature"
- `answers`: JSON formatted pre-planning answers
- `evaluationScore` (optional): Score from evaluation step
**Usage**: Generate actionable implementation plan after quality evaluation

## Recommended Workflows

### Documentation Navigation Workflow
```
1. list-docs              → See available topics
2. get-document-section   → Browse topic areas (single or multiple sections)
3. get-document-titles    → Extract documentation titles (with optional keyword search)
4. Targeted searches      → Find exact information
```

### Simple Planning Workflow

#### The Simple 4-Step Planning Process
```
1. User + Agent Interact         → Use get-preplanning-questions to get structured questions
2. Agent Creates Plan            → Use evaluate-preplanning-answers + generate-implementation-plan
3. User Reviews Plan             → Review the generated implementation plan
4. Agent Handles Execution       → Use create-simple-checklist for progress tracking
```

#### Example: Feature Development
```
1. get-preplanning-questions     → Get feature planning questions
2. Answer questions together     → User and agent collaborate on answers
3. evaluate-preplanning-answers  → Validate quality of planning
4. generate-implementation-plan  → Create detailed implementation plan
5. create-simple-checklist       → Generate tracking checklist
```

#### Example: Module Development
```
1. get-preplanning-questions     → Get module planning questions  
2. Answer questions together     → User and agent collaborate on answers
3. evaluate-preplanning-answers  → Validate quality of planning
4. generate-implementation-plan  → Create detailed implementation plan
5. create-simple-checklist       → Generate tracking checklist
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

## Pre-Planning System

The MCP server includes a comprehensive pre-planning system designed to help developers thoroughly plan modules and features before implementation.

### How It Works

1. **Question Templates**: Structured questions for modules and features that cover all critical aspects
2. **Quality Standards**: Automated evaluation against predefined quality criteria with scoring
3. **Implementation Plans**: Generated detailed plans based on quality-evaluated answers

### Example Usage in Your Project

When working in your "widget" project and wanting to build a "contacts" module:

#### Simple Planning Flow
```
1. Claude, use get-preplanning-questions with type "module" to help me plan the contacts module
2. [Work together to answer the planning questions]
3. Claude, use evaluate-preplanning-answers to check our planning quality
4. Claude, use generate-implementation-plan to create the detailed plan
5. Claude, use create-simple-checklist to create a tracking checklist
```

#### For a Feature
For a smaller feature like "bulk contact import":
```
1. Claude, use get-preplanning-questions with type "feature" for bulk contact import
2. [Answer the planning questions together]
3. Claude, evaluate our answers and create the implementation plan
4. Claude, create a simple checklist for tracking progress
```

#### The Result
You end up with:
- A quality-validated implementation plan
- A simple checklist file for tracking progress
- No complex server-side state management
- Clear, actionable next steps

### Workflow Structure

```
workflows/
├── feature-workflow.json       # Complete 8-step feature workflow
├── module-workflow.json        # Complete 11-step module workflow
├── workflow-orchestrator.js    # Workflow session management
├── templates/                  # Pre-planning templates (used in step 1)
│   ├── module/
│   │   ├── questions.json      # 10 comprehensive module questions
│   │   └── quality-standards.json # Scoring criteria and feedback
│   └── feature/
│       ├── questions.json      # 10 focused feature questions
│       └── quality-standards.json # Feature-specific quality standards
├── quality/                    # Quality evaluation criteria
│   └── evaluation-criteria.json
└── examples/                   # Good vs poor planning examples
    ├── module-examples.json
    └── feature-examples.json
```

### Quality Evaluation

The system evaluates pre-planning answers on a 5-point scale:
- **Excellent (4.5+)**: Ready for implementation planning
- **Good (3.5-4.4)**: Minor improvements needed
- **Acceptable (2.5-3.4)**: Needs more detail
- **Needs Improvement (1.5-2.4)**: Significant revision required
- **Inadequate (0-1.4)**: Start over with more thought

### Benefits

- **Consistency**: Ensures all critical aspects are considered
- **Quality**: Prevents poorly planned implementations
- **Efficiency**: Reduces rework and implementation issues
- **Learning**: Helps developers improve planning skills over time

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

## Connecting Claude Code to this MCP Server

To connect Claude Code to this MCP server, you'll need to configure it in your Claude Code settings.

### Prerequisites
- Claude Code installed and running
- This MCP server deployed (e.g., on Vercel)
- Server URL (e.g., `https://mcp-server-flax.vercel.app`)

### Configuration Steps

1. **Add MCP Server using Claude Code CLI**
   
   Use the following Claude Code command to add this MCP server:

   ```bash
   claude mcp add --transport http lolek-mcp https://mcp-server-flax.vercel.app/mcp
   ```

1a. ** Remove the MCP server**

   claude mcp remove lolek-mcp

2. **Alternative: Manual Configuration**
   
   If you prefer to manually configure, add the following to your Claude Code MCP settings:

   ```json
   {
     "mcpServers": {
       "lolek-mcp-server": {
         "transport": {
           "type": "http",
           "url": "https://mcp-server-flax.vercel.app/mcp"
         }
       }
     }
   }
   ```

3. **Verify Configuration**
   
   List your configured MCP servers:
   ```bash
   claude mcp list
   ```

   Get details for a specific server:
   ```bash
   claude mcp get lolek-mcp-server
   ```

### Checking MCP Server Status

Within Claude Code, you can check the status of your MCP servers:

1. **Use the `/mcp` command in Claude Code:**
   ```
   /mcp
   ```
   This opens an interactive menu where you can:
   - View connection status for all servers
   - View server capabilities
   - Authenticate or clear authentication for servers

2. **Check from command line:**
   ```bash
   claude mcp list
   ```

### Usage in Claude Code

Once connected, you can use the three documentation navigation tools described above.

Example usage:
```
Claude, use the list-docs tool to see what documentation is available.
```

### Troubleshooting

- Ensure your server URL is correct and accessible
- Check that the MCP server is properly deployed and running
- Verify the configuration syntax in your Claude Code settings
- Check Claude Code logs for any connection errors


