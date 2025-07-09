import { z } from "zod";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const getWorkflows: ToolDefinition = {
  name: "get-workflows",
  description: "Get all available development workflow types and their descriptions",
  inputSchema: {},
  handler: async () => {
    try {
      // Read workflows from markdown files
      const workflowsDir = join(process.cwd(), "workflows");
      const workflows: Record<string, any> = {};

      // Module workflow
      const moduleWorkflowPath = join(workflowsDir, "module-workflow.md");
      if (existsSync(moduleWorkflowPath)) {
        const moduleContent = readFileSync(moduleWorkflowPath, "utf-8");
        const moduleTitle = moduleContent.match(/^# (.+)$/m)?.[1] || "Module Development Workflow";
        const moduleDescription = moduleContent.match(/## Introduction[\s\S]*?\n\n(.+?)\n\n/)?.[1] || "Complete workflow for developing new modules with architecture, implementation, and deployment steps";
        const moduleSteps = (moduleContent.match(/\*\*Total Steps:\*\* (\d+)/)?.[1]) || "13";
        
        workflows["module"] = {
          name: moduleTitle,
          description: moduleDescription.replace(/\n/g, " ").trim(),
          steps: parseInt(moduleSteps),
          use_case: "Building new major features or standalone modules"
        };
      }

      // Feature workflow
      const featureWorkflowPath = join(workflowsDir, "feature-workflow.md");
      if (existsSync(featureWorkflowPath)) {
        const featureContent = readFileSync(featureWorkflowPath, "utf-8");
        const featureTitle = featureContent.match(/^# (.+)$/m)?.[1] || "Feature Development Workflow";
        const featureDescription = featureContent.match(/## Introduction[\s\S]*?\n\n(.+?)\n\n/)?.[1] || "Streamlined workflow for adding features to existing modules";
        const featureSteps = (featureContent.match(/\*\*Total Steps:\*\* (\d+)/)?.[1]) || "10";
        
        workflows["feature"] = {
          name: featureTitle,
          description: featureDescription.replace(/\n/g, " ").trim(),
          steps: parseInt(featureSteps),
          use_case: "Adding functionality to existing systems"
        };
      }

      // Legacy workflows (if no markdown exists, use hardcoded values)
      if (!workflows["bug"]) {
        workflows["bug"] = {
          name: "Bug Fix Workflow",
          description: "Systematic approach to identifying, fixing, and testing bug fixes",
          steps: 6,
          use_case: "Resolving issues and defects"
        };
      }
      
      if (!workflows["commit"]) {
        workflows["commit"] = {
          name: "Commit Workflow",
          description: "Best practices for code commits, testing, and version control",
          steps: 4,
          use_case: "Daily development and code management"
        };
      }

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