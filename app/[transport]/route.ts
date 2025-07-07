import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

// Import WorkflowHelper for development workflow tools
const WorkflowHelper = require("../../lib/workflow-helper.js");
const WorkflowOrchestrator = require("../../workflows/workflow-orchestrator.js");
const ContentFilter = require("../../lib/content-filter.js");

const handler = createMcpHandler(
  async (server) => {
    // Initialize WorkflowHelper instance
    const workflowHelper = new WorkflowHelper();
    // Initialize ContentFilter instance
    const contentFilter = new ContentFilter();
    server.tool(
      "Tool 1", // Name
      "description", // Description
      {
        message: z.string(), //Input that the tool receives from the user
      },
      async ({ message }) => ({
        content: [{ type: "text", text: `Tool echo: ${message}` }], //content: the actual response message
      })
    );
    server.tool(
      "Tool 2",
      "description",
      {
        message: z.string(),
      },
      async ({ message }) => ({
        content: [{ type: "text", text: `Tool echo: ${message}` }],
      })
    );
    server.tool(
      "get-headings",
      "Extract headings from any markdown document with content filtering applied",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'custom-components', 'nextjs', 'shadcn'). Defaults to 'custom-components'"),
        file: z.enum(["content", "index", "headings"]).optional().describe("Which file to read: 'content' for main docs, 'index' for sections+headings, 'headings' for organized headings. Defaults to 'content'"),
        type: z.enum(["markdown", "titles"]).optional().describe("Type of headings to extract: 'markdown' for # headings or 'titles' for TITLE: lines. Defaults to 'titles'")
      },
      async ({ topic = "custom-components", file = "content", type = "titles" }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, `${file}.md`);
          const fileContent = readFileSync(filePath, "utf-8");
          
          // Read index content for IGNORE directive filtering
          let indexContent = null;
          try {
            const indexPath = join(process.cwd(), "docs", topic, "index.md");
            indexContent = readFileSync(indexPath, "utf-8");
          } catch (error) {
            // No index file, continue without it
          }

          // Apply content filtering with index content for IGNORE directives
          const headings = contentFilter.getFilteredHeadings(fileContent, type, indexContent);
          const headingType = type === "titles" ? "titles" : "headings";
          
          return {
            content: [{
              type: "text",
              text: headings.length > 0 
                ? `Found ${headings.length} ${headingType} in ${topic}/${file}.md (with IGNORE filtering applied):\n\n${headings.join("\n")}`
                : `No ${headingType} found in ${topic}/${file}.md after applying IGNORE filtering.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading file: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
    server.tool(
      "get-sections",
      "Extract section names from topic index files with content filtering applied",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'custom-components', 'nextjs', 'shadcn'). Defaults to 'custom-components'")
      },
      async ({ topic = "custom-components" }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, "index.md");
          const fileContent = readFileSync(filePath, "utf-8");
          
          // Apply content filtering and extract sections
          const sections = contentFilter.getFilteredSections(fileContent);
          
          return {
            content: [{
              type: "text",
              text: sections.length > 0 
                ? `Found ${sections.length} sections in ${topic} (with IGNORE filtering applied):\n\n${sections.join("\n")}`
                : `No sections found in ${topic} after applying IGNORE filtering.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading file: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
    server.tool(
      "list-docs",
      "List all available documentation files with content filtering applied",
      {},
      async ({}) => {
        try {
          const docsPath = join(process.cwd(), "docs");
          const entries = readdirSync(docsPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name); // Filter topics
          
          const topics = [];
          for (const topic of entries) {
            const topicPath = join(docsPath, topic);
            try {
              const topicFiles = readdirSync(topicPath);
              const hasContent = topicFiles.includes('content.md');
              const hasIndex = topicFiles.includes('index.md');
              const hasHeadings = topicFiles.includes('headings.md');
              
              if (hasContent || hasIndex) {
                topics.push({
                  name: topic,
                  files: {
                    content: hasContent,
                    index: hasIndex,
                    headings: hasHeadings
                  }
                });
              }
            } catch (err) {
              // Skip directories we can't read
            }
          }
          
          // Sort topics to prioritize custom-components first
          topics.sort((a, b) => {
            if (a.name === 'custom-components') return -1;
            if (b.name === 'custom-components') return 1;
            return a.name.localeCompare(b.name);
          });
          
          return {
            content: [{
              type: "text",
              text: `Available documentation topics (with content filtering applied):

${topics.map(topic => {
  const files = [];
  if (topic.files.content) files.push('content.md');
  if (topic.files.index) files.push('index.md'); 
  if (topic.files.headings) files.push('headings.md');
  return `${topic.name}/\n  - ${files.join('\n  - ')}`;
}).join('\n\n')}

Workflow: Use get-sections → get-headings → targeted searches
Note: Tools default to 'custom-components' for component documentation`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading docs directory: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
    
    // Workflow Helper Tools
    server.tool(
      "get-workflow",
      "Get development workflow steps for specific workflow types (module, feature, bug, commit)",
      {
        type: z.enum(["module", "feature", "bug", "commit"]).describe("The workflow type to retrieve")
      },
      async ({ type }) => {
        try {
          const workflow = workflowHelper.getWorkflow(type);
          if (!workflow) {
            return {
              content: [{
                type: "text",
                text: `Workflow type "${type}" not found. Available types: module, feature, bug, commit`
              }]
            };
          }
          
          return {
            content: [{
              type: "text",
              text: workflow
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error retrieving workflow: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "get-checklist",
      "Get completion checklists for feature or module development",
      {
        type: z.enum(["feature", "module"]).describe("The checklist type to retrieve")
      },
      async ({ type }) => {
        try {
          const checklist = workflowHelper.getChecklist(type);
          if (!checklist) {
            return {
              content: [{
                type: "text",
                text: `Checklist type "${type}" not found. Available types: feature, module`
              }]
            };
          }
          
          return {
            content: [{
              type: "text",
              text: checklist
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error retrieving checklist: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "generate-template",
      "Generate a module template with standard structure and naming conventions",
      {
        moduleName: z.string().describe("The name of the module (e.g., 'Petitions')"),
        purpose: z.string().describe("The purpose/description of the module")
      },
      async ({ moduleName, purpose }) => {
        try {
          const template = workflowHelper.generateModuleTemplate(moduleName, purpose);
          
          return {
            content: [{
              type: "text",
              text: template
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error generating template: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "validate-feature",
      "Validate a feature definition against required elements (Purpose, Scope, User Story, Features, Routes)",
      {
        featureText: z.string().describe("The feature definition text to validate")
      },
      async ({ featureText }) => {
        try {
          const validations = workflowHelper.validateFeature(featureText);
          
          return {
            content: [{
              type: "text",
              text: `Feature Validation Results:\n\n${validations.join('\n')}`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error validating feature: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "search-content",
      "Search for specific content across all documentation and guides with content filtering applied",
      {
        query: z.string().describe("The search term or regex pattern to find"),
        scope: z.enum(["all", "docs", "guides"]).optional().describe("Where to search: 'all' (default), 'docs' only, or 'guides' only"),
        caseSensitive: z.boolean().optional().describe("Whether search should be case sensitive (default: false)"),
        maxResults: z.number().optional().describe("Maximum number of results to return (default: 50)")
      },
      async ({ query, scope = "all", caseSensitive = false, maxResults = 50 }) => {
        try {
          const results: Array<{
            file: string;
            category: string;
            matches: Array<{
              line: number;
              content: string;
              context: string;
            }>;
          }> = [];
          const searchRegex = new RegExp(query, caseSensitive ? "g" : "gi");
          
          // Function to search in a file
          const searchInFile = (filePath: string, relativePath: string, category: string, topic?: string) => {
            try {
              let content = readFileSync(filePath, "utf-8");
              
              // Read index content for IGNORE directive filtering (if this is a docs file)
              let indexContent = null;
              if (category === "docs" && topic) {
                try {
                  const indexPath = join(process.cwd(), "docs", topic, "index.md");
                  indexContent = readFileSync(indexPath, "utf-8");
                } catch (error) {
                  // No index file, continue without it
                }
              }
              
              // Apply content filtering
              content = contentFilter.filterContent(content, indexContent);
              
              const lines = content.split("\n");
              const matches: Array<{
                line: number;
                content: string;
                context: string;
              }> = [];
              
              lines.forEach((line, index) => {
                if (searchRegex.test(line)) {
                  matches.push({
                    line: index + 1,
                    content: line.trim(),
                    context: lines.slice(Math.max(0, index - 1), index + 2).join("\n")
                  });
                }
              });
              
              if (matches.length > 0) {
                results.push({
                  file: relativePath,
                  category,
                  matches: matches.slice(0, Math.floor(maxResults / 10)) // Limit matches per file
                });
              }
            } catch (error) {
              // Skip files that can't be read
            }
          };
          
          // Search in docs directory
          if (scope === "all" || scope === "docs") {
            const docsPath = join(process.cwd(), "docs");
            try {
              const topics = readdirSync(docsPath, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);
              
              for (const topic of topics) {
                const topicPath = join(docsPath, topic);
                const files = readdirSync(topicPath)
                  .filter(file => file.endsWith('.md'));
                
                for (const file of files) {
                  const filePath = join(topicPath, file);
                  const relativePath = `docs/${topic}/${file}`;
                  searchInFile(filePath, relativePath, "docs", topic);
                }
              }
            } catch (error) {
              // Skip if docs directory doesn't exist or can't be read
            }
          }
          
          // Search in guides directory
          if (scope === "all" || scope === "guides") {
            const guidesPath = join(process.cwd(), "guides");
            try {
              const files = readdirSync(guidesPath)
                .filter(file => file.endsWith('.md'));
              
              for (const file of files) {
                const filePath = join(guidesPath, file);
                const relativePath = `guides/${file}`;
                searchInFile(filePath, relativePath, "guides");
              }
            } catch (error) {
              // Skip if guides directory doesn't exist or can't be read
            }
          }
          
          // Sort results by relevance (number of matches)
          results.sort((a, b) => b.matches.length - a.matches.length);
          
          // Limit total results
          const limitedResults = results.slice(0, maxResults);
          
          if (limitedResults.length === 0) {
            return {
              content: [{
                type: "text",
                text: `No matches found for "${query}" in ${scope} scope with content filtering applied.`
              }]
            };
          }
          
          const resultText = limitedResults.map(result => {
            const matchesText = result.matches.map(match => 
              `  Line ${match.line}: ${match.content}`
            ).join("\n");
            
            return `**${result.file}** (${result.category})\n${matchesText}`;
          }).join("\n\n");
          
          return {
            content: [{
              type: "text",
              text: `Found ${limitedResults.length} file(s) with matches for "${query}" (with content filtering applied):\n\n${resultText}`
            }]
          };
          
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error searching content: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    // Content Filter Test Tool
    server.tool(
      "test-content-filter",
      "Test content filtering with IGNORE directives on sample text",
      {
        sampleText: z.string().describe("Sample text to test filtering on"),
        indexContent: z.string().optional().describe("Index content with IGNORE directives. If not provided, no filtering will be applied.")
      },
      async ({ sampleText, indexContent = "" }) => {
        try {
          const original = sampleText;
          const filtered = contentFilter.filterContent(sampleText, indexContent);
          
          const wasFiltered = original !== filtered;
          const removedContent = wasFiltered ? original.length - filtered.length : 0;
          
          return {
            content: [{
              type: "text",
              text: `# Content Filter Test

## Original Content (${original.length} characters):
\`\`\`
${original}
\`\`\`

## Filtered Content (${filtered.length} characters):
\`\`\`
${filtered}
\`\`\`

## Filter Results:
- **Content was filtered:** ${wasFiltered ? 'Yes' : 'No'}
- **Characters removed:** ${removedContent}
- **Percentage removed:** ${Math.round((removedContent / original.length) * 100)}%

## How Filtering Works:
- Uses \`<!-- IGNORE -->\` directives in index.md files
- Ignores entire sections when placed before section headings
- Ignores individual items when placed before list items
- Simple and straightforward - no complex profile configurations needed`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error testing content filter: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    // Pre-Planning Tools
    server.tool(
      "get-preplanning-questions",
      "Get pre-planning questions for module or feature development",
      {
        type: z.enum(["module", "feature"]).describe("The type of pre-planning: 'module' for new modules, 'feature' for new features")
      },
      async ({ type }) => {
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
    );

    server.tool(
      "evaluate-preplanning-answers",
      "Evaluate pre-planning answers against quality standards and provide feedback",
      {
        type: z.enum(["module", "feature"]).describe("The type of pre-planning being evaluated"),
        answers: z.string().describe("The answers to the pre-planning questions in JSON format or structured text")
      },
      async ({ type, answers }) => {
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
    );

    server.tool(
      "generate-implementation-plan",
      "Generate a detailed implementation plan based on evaluated pre-planning answers",
      {
        type: z.enum(["module", "feature"]).describe("The type of implementation plan to generate"),
        answers: z.string().describe("The pre-planning answers in JSON format"),
        evaluationScore: z.number().optional().describe("The evaluation score from evaluate-preplanning-answers (if available)")
      },
      async ({ type, answers, evaluationScore }) => {
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
    );

    // Workflow Orchestration Tools
    server.tool(
      "start-workflow",
      "Start a complete development workflow for feature or module development",
      {
        type: z.enum(["feature", "module"]).describe("The type of workflow to start"),
        name: z.string().describe("The name of the feature or module"),
        project: z.string().optional().describe("The project name (optional)")
      },
      async ({ type, name, project }) => {
        try {
          const workflowPath = join(process.cwd(), "workflows", `${type}-workflow.json`);
          const workflow = JSON.parse(readFileSync(workflowPath, "utf-8"));
          
          const sessionId = `${type}_${name}_${Date.now()}`;
          
          return {
            content: [{
              type: "text",
              text: `# ${workflow.name} Started

**Project:** ${project || 'Not specified'}
**${type.charAt(0).toUpperCase() + type.slice(1)}:** ${name}
**Session ID:** ${sessionId}
**Total Steps:** ${workflow.totalSteps}

## Workflow Overview
${workflow.description}

## Steps (${workflow.steps.length} total):
${workflow.steps.map((step: any, index: number) => 
  `${index + 1}. **${step.name}**\n   ${step.description}`
).join('\n\n')}

## Next Action
🚀 **Start with Step 1: ${workflow.steps[0].name}**

Use the command: \`get-workflow-step\` with:
- sessionId: "${sessionId}"
- stepId: "${workflow.steps[0].id}"

**Key Checkpoint:** ${workflow.checkpoints[0]?.checkpoint || 'Complete step 1 activities'}`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error starting workflow: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "get-workflow-step",
      "Get detailed information about a specific workflow step",
      {
        sessionId: z.string().describe("The workflow session ID"),
        stepId: z.string().describe("The step ID to get details for")
      },
      async ({ sessionId, stepId }) => {
        try {
          // Extract type from sessionId
          const workflowType = sessionId.split('_')[0];
          const workflowPath = join(process.cwd(), "workflows", `${workflowType}-workflow.json`);
          const workflow = JSON.parse(readFileSync(workflowPath, "utf-8"));
          
          const step = workflow.steps.find((s: any) => s.id === stepId);
          if (!step) {
            return {
              content: [{
                type: "text",
                text: `Step "${stepId}" not found in workflow.`
              }]
            };
          }

          const stepIndex = workflow.steps.findIndex((s: any) => s.id === stepId);
          const nextStep = workflow.steps[stepIndex + 1];
          const checkpoint = workflow.checkpoints.find((c: any) => c.step === stepId);

          return {
            content: [{
              type: "text",
              text: `# Step ${stepIndex + 1}: ${step.name}

**Session:** ${sessionId}

## Description
${step.description}

## Deliverables
${step.deliverables.map((deliverable: string) => `- ${deliverable}`).join('\n')}

## Activities
${step.activities.map((activity: string) => `- ${activity}`).join('\n')}

## Exit Criteria
${step.exitCriteria.map((criteria: string) => `✓ ${criteria}`).join('\n')}

${checkpoint ? `## 🎯 Key Checkpoint\n${checkpoint.checkpoint}\n` : ''}

## Next Steps
${nextStep ? 
  `After completing this step, proceed to:\n**Step ${stepIndex + 2}: ${nextStep.name}**\n\nUse: \`get-workflow-step\` with stepId: "${nextStep.id}"` :
  '🎉 **This is the final step!** Complete the exit criteria to finish the workflow.'
}

---
💡 **Need help with pre-planning?** Use \`get-preplanning-questions\` tool if this step involves pre-planning activities.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error getting workflow step: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "get-workflow-progress", 
      "Get progress overview for a workflow session",
      {
        sessionId: z.string().describe("The workflow session ID")
      },
      async ({ sessionId }) => {
        try {
          const workflowType = sessionId.split('_')[0];
          const workflowName = sessionId.split('_')[1];
          const workflowPath = join(process.cwd(), "workflows", `${workflowType}-workflow.json`);
          const workflow = JSON.parse(readFileSync(workflowPath, "utf-8"));

          return {
            content: [{
              type: "text",
              text: `# Workflow Progress: ${workflowName}

**Type:** ${workflow.name}
**Session:** ${sessionId}
**Total Steps:** ${workflow.steps.length}

## All Steps Overview
${workflow.steps.map((step: any, index: number) => 
  `${index + 1}. **${step.name}**\n   ${step.description}`
).join('\n\n')}

## Key Checkpoints
${workflow.checkpoints.map((checkpoint: any, index: number) => 
  `${index + 1}. **${checkpoint.step}:** ${checkpoint.checkpoint}`
).join('\n')}

## Team Roles
${workflow.roles.map((role: any) => 
  `**${role.name}:** ${role.responsibilities.join(', ')}`
).join('\n')}

**Total Steps:** ${workflow.totalSteps}

---
Use \`get-workflow-step\` with specific stepId to get detailed step information.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error getting workflow progress: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "list-available-workflows",
      "List all available development workflows",
      {},
      async () => {
        try {
          const workflowsPath = join(process.cwd(), "workflows");
          const workflowFiles = readdirSync(workflowsPath).filter(file => file.endsWith('-workflow.json'));
          
          const workflows = workflowFiles.map(file => {
            const workflowPath = join(workflowsPath, file);
            const workflow = JSON.parse(readFileSync(workflowPath, "utf-8"));
            return {
              type: workflow.type,
              name: workflow.name,
              description: workflow.description,
              totalSteps: workflow.totalSteps,
              steps: workflow.steps.length
            };
          });

          return {
            content: [{
              type: "text",
              text: `# Available Development Workflows

${workflows.map(workflow => 
  `## ${workflow.name}
**Type:** ${workflow.type}
**Total Steps:** ${workflow.totalSteps}
**Description:** ${workflow.description}

To start: \`start-workflow\` with type: "${workflow.type}"`
).join('\n\n')}

## Quick Start Examples
- **For a new feature:** \`start-workflow\` type: "feature", name: "user-profile", project: "myapp"
- **For a new module:** \`start-workflow\` type: "module", name: "contacts", project: "widget"

Each workflow includes pre-planning as a key step with quality evaluation and guided implementation planning.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error listing workflows: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
  },
  {
    capabilities: {
      tools: {
        "Tool 1": {
          description: "Tool 1 description",
        },
        "Tool 2": {
          description: "Tool 2 description",
        },
        "get-headings": {
          description: "Extract headings from any markdown document",
        },
        "get-sections": {
          description: "Extract section names from *_sections.md files for efficient navigation of large documentation",
        },
        "list-docs": {
          description: "List all available documentation files and explain the navigation workflow",
        },
        "get-workflow": {
          description: "Get development workflow steps for specific workflow types (module, feature, bug, commit)",
        },
        "get-checklist": {
          description: "Get completion checklists for feature or module development",
        },
        "generate-template": {
          description: "Generate a module template with standard structure and naming conventions",
        },
        "validate-feature": {
          description: "Validate a feature definition against required elements",
        },
        "search-content": {
          description: "Search for specific content across all documentation and guides with regex support",
        },
        "get-preplanning-questions": {
          description: "Get pre-planning questions for module or feature development",
        },
        "evaluate-preplanning-answers": {
          description: "Evaluate pre-planning answers against quality standards and provide feedback",
        },
        "generate-implementation-plan": {
          description: "Generate a detailed implementation plan based on evaluated pre-planning answers",
        },
        "start-workflow": {
          description: "Start a complete development workflow for feature or module development",
        },
        "get-workflow-step": {
          description: "Get detailed information about a specific workflow step",
        },
        "get-workflow-progress": {
          description: "Get progress overview for a workflow session",
        },
        "list-available-workflows": {
          description: "List all available development workflows",
        },
        "list-filter-profiles": {
          description: "List all available content filter profiles and their configurations",
        },
        "test-content-filter": {
          description: "Test content filtering on a sample text to see what gets filtered out",
        },
      },
    },
  },
  {
    basePath: "",
    verboseLogs: true,
    maxDuration: 800,
    redisUrl: process.env.REDIS_URL,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
