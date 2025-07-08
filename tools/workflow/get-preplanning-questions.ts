import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const getPreplanningQuestions: ToolDefinition = {
  name: "get-preplanning-questions",
  description: "Get pre-planning questions for module or feature development",
  inputSchema: {
    type: z.enum(["module", "feature"]).describe("The type of pre-planning: 'module' for new modules, 'feature' for new features")
  },
  handler: async ({ type }, context) => {
    try {
      const questionsPath = join(process.cwd(), "workflows", "templates", type, "questions.json");
      const questionsData = JSON.parse(readFileSync(questionsPath, "utf-8"));
      
      const formattedQuestions = questionsData.questions.map((q: any, index: number) => {
        const guidance = q.guidance ? `\n   Guidance: ${q.guidance}` : "";
        const examples = q.examples ? `\n   Examples: ${q.examples.join(", ")}` : "";
        const required = q.required ? " (Required)" : " (Optional)";
        return `${index + 1}. ${q.question}${required}${guidance}${examples}`;
      }).join("\n\n");
      
      return {
        content: [{
          type: "text",
          text: `# ${questionsData.title}

${questionsData.description}

${formattedQuestions}

Instructions:
- Answer each question thoughtfully and specifically
- Required questions must be answered
- Use the guidance and examples to inform your answers
- Once you've answered all questions, use the evaluate-preplanning-answers tool to get feedback`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error loading pre-planning questions: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};