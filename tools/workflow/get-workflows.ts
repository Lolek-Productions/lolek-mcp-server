import { z } from "zod";
import { ToolDefinition } from "../types";

export const getWorkflows: ToolDefinition = {
  name: "get-workflows",
  description: "Get all available development workflow types and their descriptions",
  inputSchema: {},
  handler: async () => {
    try {
      const workflows = {
        "module": {
          name: "Module Development Workflow",
          description: "Complete workflow for developing new modules with architecture, implementation, and deployment steps",
          steps: 11,
          use_case: "Building new major features or standalone modules"
        },
        "feature": {
          name: "Feature Development Workflow", 
          description: "Streamlined workflow for adding features to existing modules",
          steps: 8,
          use_case: "Adding functionality to existing systems"
        },
        "bug": {
          name: "Bug Fix Workflow",
          description: "Systematic approach to identifying, fixing, and testing bug fixes",
          steps: 6,
          use_case: "Resolving issues and defects"
        },
        "commit": {
          name: "Commit Workflow",
          description: "Best practices for code commits, testing, and version control",
          steps: 4,
          use_case: "Daily development and code management"
        }
      };

      const workflowList = Object.entries(workflows).map(([key, workflow]) => 
        `## ${workflow.name} (${key})
**Steps:** ${workflow.steps}
**Use Case:** ${workflow.use_case}
**Description:** ${workflow.description}
`
      ).join('\n');

      return {
        content: [{
          type: "text" as const,
          text: `# Available Development Workflows

${workflowList}
## How to Use Workflows

1. **Choose a workflow type** based on your development needs
2. **Use get-preplanning-questions** with type "module" or "feature" to start planning
3. **Follow the simple planning flow** to create quality implementation plans
4. **Use create-simple-checklist** to track your progress

## Planning vs Execution
- **Planning workflows** help you think through requirements and approach
- **Execution checklists** help you track implementation progress
- **Focus on quality planning** before jumping into implementation

*For detailed workflow steps, these are available in the planning tools when you're ready to implement.*`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error retrieving workflows: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};