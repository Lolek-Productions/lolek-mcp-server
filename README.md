# Next.js MCP Server with Documentation Navigation

**Uses `@vercel/mcp-adapter`**

This MCP server provides efficient navigation tools for large documentation files, designed to help AI models traverse content without loading massive files all at once.

## Available Tools

### Documentation Navigation Tools

#### 1. `list-docs` - Document Discovery
**Purpose**: Discover what documentation topics are available  
**Usage**: Start here to see available topics

#### 2. `get-sections` - Topic Navigation  
**Purpose**: Get high-level topic areas from documentation  
**Parameters**: `topic` (optional): "nextjs", "shadcn"  
**Usage**: Use after `list-docs` to see topic areas

#### 3. `get-headings` - Content Extraction
**Purpose**: Extract specific content from documentation  
**Parameters**: 
- `topic` (optional): "nextjs", "shadcn"
- `file` (optional): "content", "index", "headings" 
- `type` (optional): "markdown" for # headings, "titles" for TITLE: lines

### Complete Development Workflows

#### 4. `list-available-workflows` - List Available Workflows
**Purpose**: See all available development workflows  
**Usage**: Start here to see what workflows are available

#### 5. `start-workflow` - Start Development Workflow
**Purpose**: Begin a complete development workflow (feature or module)  
**Parameters**: 
- `type`: "feature" or "module"
- `name`: Name of the feature/module
- `project` (optional): Project name
**Usage**: Start guided development process

#### 6. `get-workflow-step` - Get Step Details
**Purpose**: Get detailed information about a specific workflow step  
**Parameters**: 
- `sessionId`: Workflow session ID
- `stepId`: Specific step ID
**Usage**: Get guidance for current workflow step

#### 7. `get-workflow-progress` - View Progress
**Purpose**: See complete workflow overview and progress  
**Parameters**: `sessionId`: Workflow session ID  
**Usage**: Track progress and see all steps

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
1. list-docs          → See available topics
2. get-sections       → Browse topic areas  
3. get-headings       → Extract specific content
4. Targeted searches  → Find exact information
```

### Complete Development Workflows

#### Feature Development Workflow (8 steps)
```
1. start-workflow              → Start feature workflow
2. get-workflow-step          → Get step-by-step guidance
   └─ Step 1: Pre-Planning    → Use pre-planning tools for quality validation
   └─ Step 2: Design          → Create technical and UI designs  
   └─ Step 3: Setup           → Prepare development environment
   └─ Step 4: Implementation  → Build core functionality
   └─ Step 5: Integration     → Test and integrate with system
   └─ Step 6: Review          → Code review and QA
   └─ Step 7: Deployment      → Deploy to production
   └─ Step 8: Monitoring      → Monitor performance and adoption
```

#### Module Development Workflow (11 steps)
```
1. start-workflow                 → Start module workflow
2. get-workflow-step             → Get step-by-step guidance
   └─ Step 1: Pre-Planning       → Use pre-planning tools for quality validation
   └─ Step 2: Architecture       → Design complete system architecture
   └─ Step 3: Setup              → Set up project infrastructure
   └─ Step 4: Data Layer         → Implement database and data access
   └─ Step 5: API Layer          → Build business logic and APIs
   └─ Step 6: UI Implementation  → Create user interface
   └─ Step 7: Integration        → Integrate with existing systems
   └─ Step 8: Testing            → Comprehensive testing
   └─ Step 9: Documentation      → Create documentation and training
   └─ Step 10: Deployment        → Deploy to production
   └─ Step 11: Monitoring        → Post-launch monitoring and support
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

#### Complete Module Workflow
```
Claude, use the start-workflow tool to start a module workflow for "contacts" in project "widget"
```

Claude Code will guide you through the complete 11-step process, starting with:
```
Claude, use the get-workflow-step tool to get details for step 1
```

#### Just Pre-Planning (if you only want planning)
```
Claude, use the get-preplanning-questions tool with type "module" to help me plan the contacts module.
```

#### Complete Feature Workflow  
For a smaller feature like "bulk contact import":
```
Claude, use the start-workflow tool to start a feature workflow for "bulk-contact-import" in project "widget"
```

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
   claude mcp add --transport http lolek-mcp-server https://mcp-server-flax.vercel.app/mcp
   ```

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


