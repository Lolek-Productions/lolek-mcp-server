import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

// Import WorkflowHelper for development workflow tools
const WorkflowHelper = require("../../lib/workflow-helper.js");

const handler = createMcpHandler(
  async (server) => {
    // Initialize WorkflowHelper instance
    const workflowHelper = new WorkflowHelper();
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
      "Extract headings from any markdown document",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'nextjs', 'shadcn'). Defaults to 'nextjs'"),
        file: z.enum(["content", "index", "headings"]).optional().describe("Which file to read: 'content' for main docs, 'index' for sections+headings, 'headings' for organized headings. Defaults to 'content'"),
        type: z.enum(["markdown", "titles"]).optional().describe("Type of headings to extract: 'markdown' for # headings or 'titles' for TITLE: lines. Defaults to 'titles'")
      },
      async ({ topic = "nextjs", file = "content", type = "titles" }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, `${file}.md`);
          const fileContent = readFileSync(filePath, "utf-8");
          
          let headings;
          let headingType;
          
          if (type === "titles") {
            // Extract titles (lines starting with TITLE:)
            headings = fileContent
              .split("\n")
              .filter(line => line.trim().startsWith("TITLE:"))
              .map(line => line.trim().replace("TITLE: ", ""));
            headingType = "titles";
          } else {
            // Extract markdown headings (lines starting with # followed by space)
            headings = fileContent
              .split("\n")
              .filter(line => line.trim().match(/^#+\s/))
              .map(line => line.trim());
            headingType = "headings";
          }
          
          return {
            content: [{
              type: "text",
              text: headings.length > 0 
                ? `Found ${headings.length} ${headingType} in ${topic}/${file}.md:\n\n${headings.join("\n")}`
                : `No ${headingType} found in ${topic}/${file}.md.`
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
      "Extract section names from topic index files for efficient navigation of large documentation. This provides an index/table of contents to help AI models traverse content without searching through thousands of lines.",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'nextjs', 'shadcn'). Defaults to 'nextjs'")
      },
      async ({ topic = "nextjs" }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, "index.md");
          const fileContent = readFileSync(filePath, "utf-8");
          
          // Extract section names (lines starting with ## followed by number)
          const sections = fileContent
            .split("\n")
            .filter(line => line.trim().match(/^##\s+\d+\.\s/))
            .map(line => line.trim().replace(/^##\s+\d+\.\s+/, ""));
          
          return {
            content: [{
              type: "text",
              text: sections.length > 0 
                ? `Found ${sections.length} sections in ${topic}:\n\n${sections.join("\n")}`
                : `No sections found in ${topic}.`
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
      "List all available documentation files in the docs directory. Use this first to discover what documentation is available, then use get-sections to see topic areas, then get-headings for specific content.",
      {},
      async () => {
        try {
          const docsPath = join(process.cwd(), "docs");
          const entries = readdirSync(docsPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
          
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
          
          return {
            content: [{
              type: "text",
              text: `Available documentation topics:

${topics.map(topic => {
  const files = [];
  if (topic.files.content) files.push('content.md');
  if (topic.files.index) files.push('index.md'); 
  if (topic.files.headings) files.push('headings.md');
  return `${topic.name}/\n  - ${files.join('\n  - ')}`;
}).join('\n\n')}

Workflow: Use get-sections → get-headings → targeted searches`
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
      "Search for specific content across all documentation and guides. Supports regex patterns and scoped searching.",
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
          const searchInFile = (filePath: string, relativePath: string, category: string) => {
            try {
              const content = readFileSync(filePath, "utf-8");
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
                  searchInFile(filePath, relativePath, "docs");
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
                text: `No matches found for "${query}" in ${scope} scope.`
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
              text: `Found ${limitedResults.length} file(s) with matches for "${query}":\n\n${resultText}`
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
