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
      // Generate simple checklist based on type
      const getChecklist = (checklistType: string) => {
        if (checklistType === "feature") {
          return `## Feature Development Checklist

### Planning & Design
- [ ] Define feature requirements and user story
- [ ] Create wireframes or mockups
- [ ] Review technical approach
- [ ] Identify affected components

### Implementation
- [ ] Implement core functionality
- [ ] Add error handling
- [ ] Write unit tests
- [ ] Update existing components as needed

### Testing & Review
- [ ] Test edge cases
- [ ] Perform integration testing
- [ ] Code review completed
- [ ] QA testing passed

### Deployment
- [ ] Deploy to staging
- [ ] Verify functionality in staging
- [ ] Deploy to production
- [ ] Monitor for issues`;
        } else if (checklistType === "module") {
          return `## Module Development Checklist

### Architecture & Planning
- [ ] Define module purpose and scope
- [ ] Design database schema
- [ ] Plan API endpoints
- [ ] Review security requirements

### Backend Implementation
- [ ] Create database models
- [ ] Implement API endpoints
- [ ] Add authentication/authorization
- [ ] Write backend tests

### Frontend Implementation
- [ ] Create UI components
- [ ] Implement data fetching
- [ ] Add form validation
- [ ] Ensure responsive design

### Integration & Testing
- [ ] Integration testing
- [ ] End-to-end testing
- [ ] Performance testing
- [ ] Security testing

### Documentation & Deployment
- [ ] Write user documentation
- [ ] Document API endpoints
- [ ] Deploy to production
- [ ] Monitor and maintain`;
        }
        return null;
      };

      const checklist = getChecklist(type);
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