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
          steps: 12,
          use_case: "Building new major features or standalone modules"
        },
        "feature": {
          name: "Feature Development Workflow", 
          description: "Streamlined workflow for adding features to existing modules",
          steps: 9,
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
2. **Use get-workflow-template** with type "module" or "feature" to get the complete workflow
3. **Use evaluate-workflow-progress** to track your progress through workflow steps
4. **Follow the embedded quality guidelines** for thorough planning

## Workflow Process
- **Get complete workflow** with get-workflow-template (includes embedded questions and standards)
- **Progress tracking** with evaluate-workflow-progress for step-by-step guidance
- **Quality evaluation** automatically included in the workflow steps
- **Implementation planning** generated automatically when quality standards are met

*Each workflow template contains all questions, standards, and step details in one consolidated file.*`
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