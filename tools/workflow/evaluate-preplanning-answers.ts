import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const evaluatePreplanningAnswers: ToolDefinition = {
  name: "evaluate-preplanning-answers",
  description: "Evaluate pre-planning answers against quality standards and provide feedback",
  inputSchema: {
    type: z.enum(["module", "feature"]).describe("The type of pre-planning being evaluated"),
    answers: z.string().describe("The answers to the pre-planning questions in JSON format or structured text")
  },
  handler: async ({ type, answers }, context) => {
    try {
      const standardsPath = join(process.cwd(), "workflows", "templates", type, "quality-standards.json");
      const standards = JSON.parse(readFileSync(standardsPath, "utf-8"));
      
      // Parse answers (assuming JSON format for now)
      let parsedAnswers;
      try {
        parsedAnswers = JSON.parse(answers);
      } catch {
        // If not JSON, treat as structured text and attempt to parse
        parsedAnswers = {};
        // Simple parsing for text format - would need more sophisticated parsing in real implementation
      }
      
      const evaluations = [];
      let totalScore = 0;
      let maxScore = 0;
      
      for (const criterion of standards.criteria) {
        const questionAnswer = parsedAnswers[criterion.question_id];
        maxScore += criterion.weight;
        
        // Simple evaluation logic - in real implementation, would use AI/ML for better evaluation
        let score = 0;
        if (questionAnswer) {
          const answerLength = questionAnswer.length;
          const answerQuality = answerLength > 100 ? 5 : answerLength > 50 ? 4 : answerLength > 20 ? 3 : answerLength > 10 ? 2 : 1;
          score = Math.min(answerQuality, 5);
        }
        
        const weightedScore = (score / 5) * criterion.weight;
        totalScore += weightedScore;
        
        const level = score >= 4.5 ? "excellent" : score >= 3.5 ? "good" : score >= 2.5 ? "acceptable" : score >= 1.5 ? "needs_improvement" : "inadequate";
        const feedback = criterion[level] || "No feedback available";
        
        evaluations.push({
          criterion: criterion.description,
          score: score,
          level: level,
          feedback: feedback,
          weight: criterion.weight
        });
      }
      
      const overallScore = totalScore / maxScore * 5;
      const overallLevel = overallScore >= 4.5 ? "excellent" : overallScore >= 3.5 ? "good" : overallScore >= 2.5 ? "acceptable" : overallScore >= 1.5 ? "needs_improvement" : "inadequate";
      
      const evaluationText = evaluations.map(evaluation => 
        `**${evaluation.criterion}** (Weight: ${evaluation.weight}%)\n` +
        `Score: ${evaluation.score}/5 (${evaluation.level})\n` +
        `Feedback: ${evaluation.feedback}`
      ).join("\n\n");
      
      return {
        content: [{
          type: "text",
          text: `# Pre-Planning Evaluation Results

**Overall Score: ${overallScore.toFixed(1)}/5.0 (${overallLevel})**

${standards.recommendations[overallLevel]}

## Detailed Evaluation:

${evaluationText}

## Next Steps:
${overallScore >= 3.5 ? 
  "Your pre-planning is ready for implementation planning. Use the generate-implementation-plan tool to create a detailed plan." : 
  "Please revise your answers based on the feedback above before proceeding to implementation planning."
}`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error evaluating pre-planning answers: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};