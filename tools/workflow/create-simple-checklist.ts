import { z } from "zod";
import { ToolDefinition, ToolContext } from "../types";

export const createSimpleChecklist: ToolDefinition = {
  name: "create-simple-checklist",
  description: "Create a simple completion checklist file for feature or module development",
  inputSchema: {
    type: z.enum(["feature", "module"]).describe("The checklist type to create"),
    name: z.string().describe("Name of the feature/module for the checklist"),
    filePath: z.string().optional().describe("Custom file path (defaults to current directory)")
  },
  handler: async ({ type, name, filePath }, context) => {
    try {
      const checklist = context?.workflowHelper.getChecklist(type);
      if (!checklist) {
        return {
          content: [{
            type: "text" as const,
            text: `Checklist type "${type}" not found. Available types: feature, module`
          }]
        };
      }
      
      const timestamp = new Date().toISOString().split('T')[0];
      const fileName = filePath || `${name}-${type}-checklist-${timestamp}.md`;
      
      const fileContent = `# ${type.charAt(0).toUpperCase() + type.slice(1)} Checklist: ${name}

**Created:** ${new Date().toLocaleDateString()}  
**Status:** 🟡 In Progress

${checklist}

---
*Update checkboxes as you complete each item. Add notes and progress updates as needed.*`;
      
      return {
        content: [{
          type: "text" as const,
          text: `# Simple Checklist Created

**File:** ${fileName}
**Type:** ${type.charAt(0).toUpperCase() + type.slice(1)}

## File Content:
\`\`\`markdown
${fileContent}
\`\`\`

💡 **Next Steps:**
1. Save this content to \`${fileName}\`
2. Check off items as you complete them
3. Add your own notes and progress updates`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error creating checklist: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};