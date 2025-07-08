import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const getWorkflowTemplate: ToolDefinition = {
  name: "get-workflow-template",
  description: "Get a specific workflow template with all steps, questions, and implementation guidance",
  inputSchema: {
    type: z.enum(["module", "feature"]).describe("The type of workflow template to retrieve")
  },
  handler: async ({ type }, context) => {
    try {
      // Load the consolidated workflow template
      const workflowPath = join(process.cwd(), "workflows", `${type}-workflow.json`);
      const workflow = JSON.parse(readFileSync(workflowPath, "utf-8"));
      
      // Format the workflow with embedded questions and implementation plan template
      const stepsWithDetails = workflow.steps.map((step: any) => {
        let stepContent = `## ${step.name} (${step.id})
${step.description}

**Deliverables:**
${step.deliverables.map((d: string) => `- ${d}`).join('\n')}

**Activities:**
${step.activities.map((a: string) => `- ${a}`).join('\n')}

**Exit Criteria:**
${step.exitCriteria.map((c: string) => `- ${c}`).join('\n')}`;

        // Add questions to the pre-planning step (now embedded in workflow)
        if (step.id === "1_preplanning" && workflow.questions) {
          const formattedQuestions = workflow.questions.questions.map((q: any, index: number) => {
            const guidance = q.guidance ? `\n   **Guidance:** ${q.guidance}` : "";
            const examples = q.examples ? `\n   **Examples:** ${q.examples.join(", ")}` : "";
            const required = q.required ? " *(Required)*" : " *(Optional)*";
            return `${index + 1}. **${q.question}**${required}${guidance}${examples}`;
          }).join("\n\n");
          
          stepContent += `

### Pre-Planning Questions
${workflow.questions.description}

${formattedQuestions}

### Implementation Plan Template
Once you've answered the pre-planning questions and received a quality score ≥ 3.5, an implementation plan will be generated with:
- Project setup tasks
- Core feature implementation steps
- Integration and testing procedures
- Deployment and monitoring activities
- Timeline estimates and resource requirements`;
        }

        return stepContent;
      }).join('\n\n---\n\n');

      return {
        content: [{
          type: "text",
          text: `# ${workflow.name}

${workflow.description}

**Total Steps:** ${workflow.totalSteps}
**Type:** ${workflow.type}

${stepsWithDetails}

---

## Roles & Responsibilities
${workflow.roles.map((role: any) => 
  `**${role.name}:** ${role.responsibilities.join(', ')}`
).join('\n')}

## Key Checkpoints
${workflow.checkpoints.map((checkpoint: any) => 
  `**${checkpoint.step}:** ${checkpoint.checkpoint}`
).join('\n')}

## How to Use This Workflow
1. **Start with get-workflows** to see all available workflow types
2. **Use this workflow template** to understand the complete process
3. **Evaluate your progress** using evaluate-workflow-progress tool
4. **Track completion** by monitoring exit criteria for each step`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error loading workflow template: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};