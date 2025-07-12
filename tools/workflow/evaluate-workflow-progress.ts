import { z } from "zod";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const evaluateWorkflowProgress: ToolDefinition = {
  name: "evaluate-workflow-progress",
  description: "Evaluate progress on a workflow by checking step completion and providing guidance",
  inputSchema: z.object({
    type: z.enum(["module", "feature", "create-app", "wizard"]).describe("The type of workflow being evaluated"),
    currentStep: z.string().describe("The current step ID (e.g., '1_preplanning', '2_design')"),
    stepProgress: z.string().describe("Description of progress made on the current step"),
    preplanningAnswers: z.string().optional().describe("Pre-planning answers in JSON format (required for step 1_preplanning)")
  }),
  handler: async ({ type, currentStep, stepProgress, preplanningAnswers }, context) => {
    try {
      let workflow: any;
      
      // Load markdown workflow
      const markdownPath = join(process.cwd(), "workflows", `${type}-workflow.md`);
      if (!existsSync(markdownPath)) {
        return {
          content: [{
            type: "text",
            text: `Workflow for '${type}' not found. Available workflows can be seen with get-workflows tool.`
          }]
        };
      }
      
      const markdownContent = readFileSync(markdownPath, "utf-8");
      workflow = parseMarkdownWorkflow(markdownContent, type);
      
      // Find the current step
      const step = workflow.steps.find((s: any) => s.id === currentStep);
      if (!step) {
        return {
          content: [{
            type: "text",
            text: `Error: Step '${currentStep}' not found in ${type} workflow. Available steps: ${workflow.steps.map((s: any) => s.id).join(', ')}`
          }]
        };
      }

      let evaluation = `# Workflow Progress Evaluation

**Workflow:** ${workflow.name}
**Current Step:** ${step.name} (${step.id})
**Description:** ${step.description}

## Progress Assessment
${stepProgress}

## Step Requirements Check`;

      // Special handling for pre-planning step
      if (currentStep === "1_preplanning" && preplanningAnswers) {
        try {
          // Quality standards are now embedded in the workflow
          const standards = workflow.qualityStandards;
          
          // Parse answers
          let parsedAnswers;
          try {
            parsedAnswers = JSON.parse(preplanningAnswers);
          } catch {
            return {
              content: [{
                type: "text",
                text: "Error: Pre-planning answers must be provided in JSON format for step evaluation."
              }]
            };
          }
          
          // Evaluate answers
          const evaluations = [];
          let totalScore = 0;
          let maxScore = 0;
          
          for (const criterion of standards.criteria) {
            const questionAnswer = parsedAnswers[criterion.question_id];
            maxScore += criterion.weight;
            
            // Simple evaluation logic
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
          
          evaluation += `

### Pre-Planning Quality Score: ${overallScore.toFixed(1)}/5.0 (${overallLevel})

${standards.recommendations[overallLevel]}

#### Detailed Evaluation:
${evaluationText}`;

          // Generate implementation plan if score is good enough
          if (overallScore >= 3.5) {
            const implementationPlan = generateImplementationPlan(type, parsedAnswers);
            evaluation += `

### Implementation Plan
${implementationPlan}`;
          }
        } catch (error) {
          evaluation += `\n\nError evaluating pre-planning answers: ${error instanceof Error ? error.message : String(error)}`;
        }
      }

      // Check exit criteria
      evaluation += `

## Exit Criteria Review
${step.exitCriteria.map((criteria: string) => `- [ ] ${criteria}`).join('\n')}

## Next Steps
`;

      // Provide guidance based on current step
      const currentIndex = workflow.steps.findIndex((s: any) => s.id === currentStep);
      const nextStep = workflow.steps[currentIndex + 1];
      
      if (currentStep === "1_preplanning" && preplanningAnswers) {
        const parsedAnswers = JSON.parse(preplanningAnswers || "{}");
        const score = calculateScore(parsedAnswers, type);
        if (score >= 3.5) {
          evaluation += nextStep ? 
            `1. Complete current step exit criteria\n2. Proceed to next step: ${nextStep.name} (${nextStep.id})\n3. Use evaluate-workflow-progress to track progress on the next step` :
            `1. Complete current step exit criteria\n2. Workflow complete!`;
        } else {
          evaluation += `1. Improve pre-planning answers based on feedback above\n2. Re-evaluate using evaluate-workflow-progress\n3. Achieve quality score ≥ 3.5 before proceeding`;
        }
      } else {
        evaluation += nextStep ? 
          `1. Complete remaining exit criteria for current step\n2. Proceed to next step: ${nextStep.name} (${nextStep.id})\n3. Use evaluate-workflow-progress to track progress on the next step` :
          `1. Complete remaining exit criteria\n2. Workflow complete!`;
      }

      // Add checkpoint information if this is a checkpoint step
      const checkpoint = workflow.checkpoints.find((c: any) => c.step === currentStep);
      if (checkpoint) {
        evaluation += `

## 🎯 Key Checkpoint
**${checkpoint.checkpoint}**

This is a critical checkpoint in the workflow. Ensure all criteria are met before proceeding.`;
      }

      return {
        content: [{
          type: "text",
          text: evaluation
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error evaluating workflow progress: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};

// Helper function to calculate score (simplified version)
function calculateScore(answers: any, type: string): number {
  // This is a simplified scoring function
  // In practice, you'd load the quality standards and do proper evaluation
  const answerCount = Object.keys(answers).length;
  const totalAnswerLength = Object.values(answers).reduce((sum: number, answer: any) => {
    return sum + (typeof answer === 'string' ? answer.length : 0);
  }, 0);
  
  // Basic scoring based on completion and length
  const completionScore = answerCount >= 8 ? 3 : answerCount >= 6 ? 2.5 : answerCount >= 4 ? 2 : 1;
  const qualityScore = totalAnswerLength > 1000 ? 2 : totalAnswerLength > 500 ? 1.5 : 1;
  
  return Math.min(completionScore + qualityScore, 5);
}

// Helper function to generate implementation plan
function generateImplementationPlan(type: string, answers: any): string {
  if (type === "module") {
    return `## Implementation Plan

### 1. Project Setup
- [ ] Create module directory structure
- [ ] Set up database models for: ${answers.data_entities ? answers.data_entities.join(", ") : "core entities"}
- [ ] Configure routing and API endpoints
- [ ] Set up authentication and authorization

### 2. Core Features Implementation
${answers.scope ? answers.scope.map((feature: string, index: number) => `- [ ] ${index + 1}. ${feature}`).join("\n") : "- [ ] Implement core functionality"}

### 3. User Interface Development
- [ ] Create main dashboard/overview page
- [ ] Implement CRUD operations UI
- [ ] Add search and filtering capabilities
- [ ] Ensure mobile responsiveness

### 4. Integration & Testing
- [ ] Integrate with external APIs: ${answers.integrations ? answers.integrations.join(", ") : "none specified"}
- [ ] Write unit tests for core logic
- [ ] Write integration tests for API endpoints
- [ ] Perform user acceptance testing

### 5. Security & Performance
- [ ] Implement security measures: ${answers.security_considerations ? answers.security_considerations.join(", ") : "basic security"}
- [ ] Optimize for performance requirements: ${answers.performance_requirements || "standard performance"}
- [ ] Add monitoring and logging

### 6. Documentation & Deployment
- [ ] Create user documentation
- [ ] Document API endpoints
- [ ] Set up deployment pipeline
- [ ] Monitor success metrics: ${answers.success_metrics ? answers.success_metrics.join(", ") : "basic metrics"}

**Estimated Timeline:** 4-8 weeks
**Team Size:** 2-3 developers
**Key Risks:** ${answers.constraints ? answers.constraints.join(", ") : "No major constraints identified"}`;
  } else { // feature
    return `## Implementation Plan

### 1. Analysis & Design
- [ ] Finalize technical approach: ${answers.technical_approach || "needs definition"}
- [ ] Create detailed wireframes/mockups
- [ ] Define data model changes: ${answers.data_changes ? answers.data_changes.join(", ") : "none required"}
- [ ] Review affected components: ${answers.affected_components ? answers.affected_components.join(", ") : "needs analysis"}

### 2. Development Tasks
- [ ] Implement core functionality
- [ ] Handle edge cases: ${answers.edge_cases ? answers.edge_cases.join(", ") : "standard error handling"}
- [ ] Update existing components
- [ ] Add new UI components as needed

### 3. Testing Strategy
- [ ] ${answers.testing_strategy || "Implement comprehensive testing"}
- [ ] Test edge cases and error scenarios
- [ ] Perform integration testing
- [ ] Conduct user acceptance testing

### 4. User Experience
- [ ] Follow user workflow: ${answers.user_workflow || "needs definition"}
- [ ] Ensure acceptance criteria are met: ${answers.acceptance_criteria ? answers.acceptance_criteria.join(", ") : "criteria needs definition"}
- [ ] Test with target users

### 5. Deployment & Monitoring
- [ ] Set up feature flags if needed
- [ ] Implement rollback plan: ${answers.rollback_plan || "needs definition"}
- [ ] Monitor feature usage and performance
- [ ] Gather user feedback

**User Story:** ${answers.user_story || "needs definition"}
**Estimated Timeline:** 1-3 weeks
**Key Dependencies:** ${answers.affected_components ? answers.affected_components.join(", ") : "none identified"}`;
  }
}

// Helper function to parse markdown workflow into JSON-like structure
function parseMarkdownWorkflow(content: string, type: string): any {
  const workflow: any = {
    name: content.match(/^# (.+)$/m)?.[1] || "Workflow",
    type: type,
    steps: [],
    qualityStandards: {
      criteria: [],
      recommendations: {}
    }
  };

  // Parse workflow steps - using manual parsing for compatibility
  const stepRegex = /### Step (\d+(?:\.\d+)?): (.+?)\n\*\*ID:\*\* ([^\n]+?)\s+\n\*\*Name:\*\* ([^\n]+?)\s+\n\*\*Description:\*\* ([^\n]+)/g;
  let stepMatch;
  
  while ((stepMatch = stepRegex.exec(content)) !== null) {
    const [, stepNumber, stepTitle, stepId, stepName, stepDescription] = stepMatch;
    
    workflow.steps.push({
      id: stepId.trim(),
      name: stepName.trim(),
      description: stepDescription.trim(),
      deliverables: [], // Simplified for now
      activities: [],   // Simplified for now
      exitCriteria: []  // Simplified for now
    });
  }

  // For markdown workflows, use simplified quality standards
  // Full quality evaluation will be handled by reading the markdown directly
  workflow.qualityStandards.criteria = []; // Will be populated when JSON fallback is used
  workflow.qualityStandards.recommendations = {
    excellent: "Excellent planning! You're ready to proceed with implementation.",
    good: "Good planning with minor areas for improvement.",
    acceptable: "Acceptable planning but several areas need more detail.",
    needs_improvement: "The planning needs significant improvement.",
    inadequate: "The planning is inadequate. Please start over."
  };

  return workflow;
}