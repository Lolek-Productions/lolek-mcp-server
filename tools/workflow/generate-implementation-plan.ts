import { z } from "zod";
import { ToolDefinition, ToolContext } from "../types";

export const generateImplementationPlan: ToolDefinition = {
  name: "generate-implementation-plan",
  description: "Generate a detailed implementation plan based on evaluated pre-planning answers",
  inputSchema: {
    type: z.enum(["module", "feature"]).describe("The type of implementation plan to generate"),
    answers: z.string().describe("The pre-planning answers in JSON format"),
    evaluationScore: z.number().optional().describe("The evaluation score from evaluate-preplanning-answers (if available)")
  },
  handler: async ({ type, answers, evaluationScore }, context) => {
    try {
      // Check if evaluation score is high enough
      if (evaluationScore && evaluationScore < 3.5) {
        return {
          content: [{
            type: "text",
            text: `Implementation plan cannot be generated. The evaluation score (${evaluationScore}/5.0) is below the minimum threshold of 3.5. Please improve your pre-planning answers first.`
          }]
        };
      }
      
      let parsedAnswers;
      try {
        parsedAnswers = JSON.parse(answers);
      } catch {
        return {
          content: [{
            type: "text",
            text: "Error: Answers must be provided in JSON format."
          }]
        };
      }
      
      // Generate implementation plan based on type
      if (type === "module") {
        const plan = `# ${parsedAnswers.purpose || "Module"} Implementation Plan

## 1. Project Setup
- [ ] Create module directory structure
- [ ] Set up database models for: ${parsedAnswers.data_entities ? parsedAnswers.data_entities.join(", ") : "core entities"}
- [ ] Configure routing and API endpoints
- [ ] Set up authentication and authorization

## 2. Core Features Implementation
${parsedAnswers.scope ? parsedAnswers.scope.map((feature: string, index: number) => `- [ ] ${index + 1}. ${feature}`).join("\n") : "- [ ] Implement core functionality"}

## 3. User Interface Development
- [ ] Create main dashboard/overview page
- [ ] Implement CRUD operations UI
- [ ] Add search and filtering capabilities
- [ ] Ensure mobile responsiveness

## 4. Integration & Testing
- [ ] Integrate with external APIs: ${parsedAnswers.integrations ? parsedAnswers.integrations.join(", ") : "none specified"}
- [ ] Write unit tests for core logic
- [ ] Write integration tests for API endpoints
- [ ] Perform user acceptance testing

## 5. Security & Performance
- [ ] Implement security measures: ${parsedAnswers.security_considerations ? parsedAnswers.security_considerations.join(", ") : "basic security"}
- [ ] Optimize for performance requirements: ${parsedAnswers.performance_requirements || "standard performance"}
- [ ] Add monitoring and logging

## 6. Documentation & Deployment
- [ ] Create user documentation
- [ ] Document API endpoints
- [ ] Set up deployment pipeline
- [ ] Monitor success metrics: ${parsedAnswers.success_metrics ? parsedAnswers.success_metrics.join(", ") : "basic metrics"}

## Estimated Timeline: 4-8 weeks
## Team Size: 2-3 developers
## Key Risks: ${parsedAnswers.constraints ? parsedAnswers.constraints.join(", ") : "No major constraints identified"}`;
        
        return {
          content: [{
            type: "text",
            text: plan
          }]
        };
      } else { // feature
        const plan = `# ${parsedAnswers.feature_description || "Feature"} Implementation Plan

## 1. Analysis & Design
- [ ] Finalize technical approach: ${parsedAnswers.technical_approach || "needs definition"}
- [ ] Create detailed wireframes/mockups
- [ ] Define data model changes: ${parsedAnswers.data_changes ? parsedAnswers.data_changes.join(", ") : "none required"}
- [ ] Review affected components: ${parsedAnswers.affected_components ? parsedAnswers.affected_components.join(", ") : "needs analysis"}

## 2. Development Tasks
- [ ] Implement core functionality
- [ ] Handle edge cases: ${parsedAnswers.edge_cases ? parsedAnswers.edge_cases.join(", ") : "standard error handling"}
- [ ] Update existing components
- [ ] Add new UI components as needed

## 3. Testing Strategy
- [ ] ${parsedAnswers.testing_strategy || "Implement comprehensive testing"}
- [ ] Test edge cases and error scenarios
- [ ] Perform integration testing
- [ ] Conduct user acceptance testing

## 4. User Experience
- [ ] Follow user workflow: ${parsedAnswers.user_workflow || "needs definition"}
- [ ] Ensure acceptance criteria are met: ${parsedAnswers.acceptance_criteria ? parsedAnswers.acceptance_criteria.join(", ") : "criteria needs definition"}
- [ ] Test with target users

## 5. Deployment & Monitoring
- [ ] Set up feature flags if needed
- [ ] Implement rollback plan: ${parsedAnswers.rollback_plan || "needs definition"}
- [ ] Monitor feature usage and performance
- [ ] Gather user feedback

## User Story: ${parsedAnswers.user_story || "needs definition"}
## Estimated Timeline: 1-3 weeks
## Key Dependencies: ${parsedAnswers.affected_components ? parsedAnswers.affected_components.join(", ") : "none identified"}`;
        
        return {
          content: [{
            type: "text",
            text: plan
          }]
        };
      }
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error generating implementation plan: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};