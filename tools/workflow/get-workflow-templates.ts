import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const getWorkflowTemplates: ToolDefinition = {
  name: "get-workflow-templates",
  description: "Get available workflow templates for client-side checklist creation",
  inputSchema: {},
  handler: async (params, context) => {
    try {
      const workflowsPath = join(process.cwd(), "workflows");
      const workflowFiles = readdirSync(workflowsPath).filter(file => file.endsWith('-workflow.json'));
      
      const templates = workflowFiles.map(file => {
        const workflowPath = join(workflowsPath, file);
        const workflow = JSON.parse(readFileSync(workflowPath, "utf-8"));
        return {
          type: workflow.type,
          name: workflow.name,
          description: workflow.description,
          totalSteps: workflow.totalSteps,
          keyFeatures: workflow.steps.slice(0, 3).map((s: any) => s.name)
        };
      });

      return {
        content: [{
          type: "text",
          text: `# Available Workflow Templates

${templates.map(template => 
  `## ${template.name}
**Type:** ${template.type}  
**Total Steps:** ${template.totalSteps}  
**Description:** ${template.description}

**Key Steps:** ${template.keyFeatures.join(', ')}, ...

**Usage:** \`create-workflow-checklist\` with type: "${template.type}"`
).join('\n\n')}

## Quick Examples
- **Feature:** \`create-workflow-checklist\` type: "feature", name: "user-profile", project: "myapp"
- **Module:** \`create-workflow-checklist\` type: "module", name: "contacts", project: "widget"

Each template creates a complete markdown checklist file that you can track locally.`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error getting workflow templates: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};