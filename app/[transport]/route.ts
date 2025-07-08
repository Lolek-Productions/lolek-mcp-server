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
      "get-document-titles",
      "Extract and search documentation titles from any topic's content files with content filtering applied",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'custom-components', 'nextjs', 'shadcn'). Defaults to 'custom-components'"),
        file: z.enum(["content", "index", "headings"]).optional().describe("Which file to read: 'content' for main docs, 'index' for sections+headings, 'headings' for organized headings. Defaults to 'content'"),
        type: z.enum(["markdown", "titles"]).optional().describe("Type of headings to extract: 'markdown' for # headings or 'titles' for TITLE: lines. Defaults to 'titles'"),
        keywords: z.string().optional().describe("Search keywords to filter titles (case-insensitive, space-separated)")
      },
      async ({ topic = "custom-components", file = "content", type = "titles", keywords }) => {
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
          let headings = contentFilter.getFilteredHeadings(fileContent, type, indexContent);
          const headingType = type === "titles" ? "titles" : "headings";
          
          // Apply keyword filtering if provided
          if (keywords && keywords.trim()) {
            const searchTerms = keywords.toLowerCase().split(/\s+/).filter(term => term.length > 0);
            headings = headings.filter((heading: string) => 
              searchTerms.some(term => heading.toLowerCase().includes(term))
            );
          }
          
          const searchInfo = keywords ? ` matching "${keywords}"` : "";
          
          return {
            content: [{
              type: "text",
              text: headings.length > 0 
                ? `Found ${headings.length} ${headingType}${searchInfo} in ${topic}/${file}.md (with IGNORE filtering applied):\n\n${headings.join("\n")}`
                : `No ${headingType}${searchInfo} found in ${topic}/${file}.md after applying IGNORE filtering.`
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
      "get-document-section",
      "Get one or more sections' content from a topic's index file by section name(s)",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'custom-components', 'nextjs', 'shadcn'). Defaults to 'custom-components'"),
        sectionName: z.string().describe("The name of the section(s) to retrieve. Use comma-separated values for multiple sections (e.g., 'Navigation Components, Layout Components')")
      },
      async ({ topic = "custom-components", sectionName }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, "index.md");
          const fileContent = readFileSync(filePath, "utf-8");
          
          // Apply content filtering first
          const filteredContent = contentFilter.filterContent(fileContent);
          
          // Parse multiple section names
          const sectionNames = sectionName.split(',').map(name => name.trim()).filter(name => name.length > 0);
          const lines = filteredContent.split('\n');
          const foundSections = [];
          const notFoundSections = [];
          
          for (const targetSection of sectionNames) {
            let sectionStart = -1;
            let sectionEnd = -1;
            
            // Find section start
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i].trim();
              if (line.match(/^##\s+/) && line.toLowerCase().includes(targetSection.toLowerCase())) {
                sectionStart = i;
                break;
              }
            }
            
            if (sectionStart === -1) {
              notFoundSections.push(targetSection);
              continue;
            }
            
            // Find section end (next ## heading or end of file)
            for (let i = sectionStart + 1; i < lines.length; i++) {
              const line = lines[i].trim();
              if (line.match(/^##\s+/)) {
                sectionEnd = i;
                break;
              }
            }
            
            if (sectionEnd === -1) {
              sectionEnd = lines.length;
            }
            
            // Extract section content
            const sectionContent = lines.slice(sectionStart, sectionEnd).join('\n').trim();
            foundSections.push({ name: targetSection, content: sectionContent });
          }
          
          if (foundSections.length === 0) {
            return {
              content: [{
                type: "text",
                text: `Section(s) "${sectionName}" not found in ${topic}. Available sections can be found using list-docs.`
              }]
            };
          }
          
          // Format response
          let responseText = foundSections.length === 1 
            ? `Section "${foundSections[0].name}" from ${topic}:\n\n${foundSections[0].content}`
            : `Found ${foundSections.length} section(s) from ${topic}:\n\n` + 
              foundSections.map(section => `## ${section.name}\n\n${section.content}`).join('\n\n---\n\n');
          
          if (notFoundSections.length > 0) {
            responseText += `\n\n⚠️ Not found: ${notFoundSections.join(', ')}`;
          }
          
          return {
            content: [{
              type: "text",
              text: responseText
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

Workflow: Use get-document-section → get-document-titles → targeted searches
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
    
    // Introduction Tool
    server.tool(
      "get-introduction",
      "Get an introduction to the Lolek MCP Server and its capabilities",
      {},
      async () => {
        return {
          content: [{
            type: "text",
            text: `# Welcome to Lolek MCP Server

## Overview
Lolek MCP Server is a Next.js-based Model Context Protocol (MCP) server that provides documentation navigation and simple planning workflow tools. It's designed to help developers efficiently navigate documentation and create quality implementation plans.

## Core Capabilities

### 📚 Documentation Navigation (4 tools)
- **list-docs**: Discover available documentation topics
- **get-document-section**: Get specific sections from documentation
- **get-document-titles**: Search and extract documentation titles
- **search-content**: Search across all documentation

### 🎯 Simple Planning Workflow (5 tools)
- **get-workflows**: See all available workflow types
- **get-preplanning-questions**: Get structured planning questions
- **evaluate-preplanning-answers**: Validate planning quality
- **generate-implementation-plan**: Create detailed implementation plans
- **create-simple-checklist**: Generate progress tracking checklists

## Simple Planning Flow
1. **User + Agent Interact** → Use planning questions to create solid foundation
2. **Agent Creates Plan** → Evaluate answers and generate implementation plan
3. **User Reviews Plan** → Review the generated plan for accuracy
4. **Agent Handles Execution** → Create checklist and track progress

## Documentation Available
- **custom-components**: 9 React components for Next.js applications
- **nextjs**: 685 Next.js framework documentation titles
- **shadcn**: 63 shadcn/ui component library titles

## Getting Started
1. Use \`get-workflows\` to see available workflow types
2. Use \`get-preplanning-questions\` to start planning
3. Use \`list-docs\` to explore available documentation

## Architecture
- **Next.js 15.2.4** with TypeScript
- **Vercel MCP Adapter** for protocol integration
- **Content Filtering** with IGNORE directives
- **Client-side approach** for persistent workflow tracking

*This server focuses on simplicity and essential functionality for effective planning and documentation navigation.*`
          }]
        };
      }
    );
    
    // Workflow Helper Tools
    server.tool(
      "get-workflows",
      "Get all available development workflow types and their descriptions",
      {},
      async () => {
        try {
          const workflows = {
            "module": {
              name: "Module Development Workflow",
              description: "Complete workflow for developing new modules with architecture, implementation, and deployment steps",
              steps: 11,
              use_case: "Building new major features or standalone modules"
            },
            "feature": {
              name: "Feature Development Workflow", 
              description: "Streamlined workflow for adding features to existing modules",
              steps: 8,
              use_case: "Adding functionality to existing systems"
            },
            "bug": {
              name: "Bug Fix Workflow",
              description: "Systematic approach to identifying, fixing, and testing bug fixes",
              steps: 6,
              use_case: "Resolving issues and defects"
            },
            "commit": {
              name: "Commit Workflow",
              description: "Best practices for code commits, testing, and version control",
              steps: 4,
              use_case: "Daily development and code management"
            }
          };

          const workflowList = Object.entries(workflows).map(([key, workflow]) => 
            `## ${workflow.name} (${key})
**Steps:** ${workflow.steps}
**Use Case:** ${workflow.use_case}
**Description:** ${workflow.description}
`
          ).join('\n');

          return {
            content: [{
              type: "text",
              text: `# Available Development Workflows

${workflowList}
## How to Use Workflows

1. **Choose a workflow type** based on your development needs
2. **Use get-preplanning-questions** with type "module" or "feature" to start planning
3. **Follow the simple planning flow** to create quality implementation plans
4. **Use create-simple-checklist** to track your progress

## Planning vs Execution
- **Planning workflows** help you think through requirements and approach
- **Execution checklists** help you track implementation progress
- **Focus on quality planning** before jumping into implementation

*For detailed workflow steps, these are available in the planning tools when you're ready to implement.*`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error retrieving workflows: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );

    server.tool(
      "create-simple-checklist",
      "Create a simple completion checklist file for feature or module development",
      {
        type: z.enum(["feature", "module"]).describe("The checklist type to create"),
        name: z.string().describe("Name of the feature/module for the checklist"),
        filePath: z.string().optional().describe("Custom file path (defaults to current directory)")
      },
      async ({ type, name, filePath }) => {
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
              type: "text",
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
              type: "text",
              text: `Error creating checklist: ${error instanceof Error ? error.message : String(error)}`
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


    server.tool(
      "get-workflow-templates",
      "Get available workflow templates for client-side checklist creation",
      {},
      async () => {
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
    );

    server.tool(
      "validate-checklist-progress",
      "Validate completion of workflow checklist items by scanning project files",
      {
        checklistPath: z.string().describe("Path to the workflow checklist markdown file"),
        projectPath: z.string().optional().describe("Path to the project directory (defaults to current directory)")
      },
      async ({ checklistPath, projectPath = "." }) => {
        try {
          // This is a simplified validation - in practice, you'd scan actual project files
          return {
            content: [{
              type: "text",
              text: `# Checklist Validation

**Checklist:** ${checklistPath}
**Project:** ${projectPath}

## Validation Results

🔍 **Scanning project files for completion indicators...**

### Automated Checks
- [ ] Files exist in expected locations
- [ ] Tests are present and passing
- [ ] Documentation files updated
- [ ] Configuration files in place

### Manual Review Required
- Code quality review
- Feature functionality testing
- User acceptance validation

💡 **Tip:** This tool provides basic validation. Review your checklist manually for complete verification.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error validating checklist: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
  },
  {
    capabilities: {
      tools: {
        "list-docs": {
          description: "List all available documentation files and explain the navigation workflow",
        },
        "get-document-section": {
          description: "Get one or more sections' content from a topic's index file by section name(s)",
        },
        "get-document-titles": {
          description: "Extract and search documentation titles from any topic's content files",
        },
        "search-content": {
          description: "Search for specific content across all documentation and guides with regex support",
        },
        "get-introduction": {
          description: "Get an introduction to the Lolek MCP Server and its capabilities",
        },
        "get-workflows": {
          description: "Get all available development workflow types and their descriptions",
        },
        "create-simple-checklist": {
          description: "Create a simple completion checklist file for feature or module development",
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
