import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const loadDocumentationContext: ToolDefinition = {
  name: "load-documentation-context",
  description: "Load essential documentation headings and project context to prepare AI agent",
  inputSchema: z.object({
    topics: z.array(z.string()).optional().describe("Specific documentation topics to load (defaults to essential topics)"),
    includeProjectStructure: z.boolean().optional().describe("Whether to include project structure analysis (default: true)"),
    includeAgentRules: z.boolean().optional().describe("Whether to include agent rules and constraints (default: true)")
  }),
  handler: async ({ topics, includeProjectStructure = true, includeAgentRules = true }, context) => {
    try {
      const results: string[] = [];
      
      // Default essential topics for context loading
      const defaultTopics = ["nextjs", "shadcn", "development-guide"];
      const topicsToLoad = topics || defaultTopics;
      
      results.push("# AI Agent Context Loading\n");
      results.push("## Documentation Context Loaded\n");
      
      // Load documentation headings from each topic
      for (const topic of topicsToLoad) {
        try {
          const topicPath = join(process.cwd(), "documents", topic);
          const indexPath = join(topicPath, "index.md");
          
          if (readdirSync(process.cwd() + "/documents").includes(topic)) {
            try {
              const indexContent = readFileSync(indexPath, "utf-8");
              
              // Extract headings from index content
              const headings = indexContent
                .split("\n")
                .filter(line => line.startsWith("#"))
                .slice(0, 20); // Limit to first 20 headings for context efficiency
              
              if (headings.length > 0) {
                results.push(`### ${topic.charAt(0).toUpperCase() + topic.slice(1)} Documentation\n`);
                results.push(headings.join("\n"));
                results.push("");
              }
            } catch (error) {
              results.push(`### ${topic} Documentation\n`);
              results.push(`Topic available but index not accessible\n`);
            }
          }
        } catch (error) {
          results.push(`### ${topic}\n`);
          results.push(`Topic not found or inaccessible\n`);
        }
      }
      
      // Load agent rules if requested
      if (includeAgentRules) {
        try {
          const agentRulesPath = join(process.cwd(), "agent-rules.md");
          const agentRules = readFileSync(agentRulesPath, "utf-8");
          results.push("## Agent Rules and Constraints\n");
          results.push(agentRules);
          results.push("");
        } catch (error) {
          results.push("## Agent Rules\n");
          results.push("Agent rules file not found\n");
        }
      }
      
      // Load project structure if requested
      if (includeProjectStructure) {
        try {
          results.push("## Project Structure Overview\n");
          
          // Key directories to highlight
          const keyDirs = ["app", "components", "lib", "tools", "documents", "workflows"];
          const projectRoot = process.cwd();
          
          for (const dir of keyDirs) {
            try {
              const dirPath = join(projectRoot, dir);
              const dirExists = readdirSync(projectRoot).includes(dir);
              if (dirExists) {
                results.push(`- **${dir}/**: Available`);
              }
            } catch (error) {
              // Directory doesn't exist, skip
            }
          }
          results.push("");
          
          // Load CLAUDE.md for project-specific context
          try {
            const claudeMdPath = join(projectRoot, "CLAUDE.md");
            const claudeMdContent = readFileSync(claudeMdPath, "utf-8");
            results.push("## Project Instructions (CLAUDE.md)\n");
            results.push(claudeMdContent.split("\n").slice(0, 50).join("\n")); // First 50 lines
            results.push("");
          } catch (error) {
            results.push("## Project Instructions\n");
            results.push("CLAUDE.md not found\n");
          }
        } catch (error) {
          results.push("## Project Structure\n");
          results.push("Could not analyze project structure\n");
        }
      }
      
      // Add available tools summary
      results.push("## Available MCP Tools Summary\n");
      results.push(`
**Documentation Tools:**
- list-documents: See available documentation topics
- get-sections: Browse topic areas and headings
- search-content: Search across documentation

**Information Tools:**
- get-introduction: Server introduction and capabilities
- get-agent-rules: Behavioral constraints for AI agents
- get-tools: List all available MCP tools

**Workflow Tools:**
- get-workflows: Available development workflows
- create-simple-checklist: Create development checklists
- get-preplanning-questions: Get structured questions for planning
- evaluate-preplanning-answers: Quality assessment of planning
- generate-implementation-plan: Create detailed implementation plans
- get-workflow-templates: Available workflow templates
- validate-checklist-progress: Validate workflow completion

Use these tools throughout the development process for guidance and documentation.
`);
      
      const contextSummary = `
## Context Loading Complete ✅

**Loaded:**
- ${topicsToLoad.length} documentation topics: ${topicsToLoad.join(", ")}
${includeAgentRules ? "- Agent rules and behavioral constraints" : ""}
${includeProjectStructure ? "- Project structure and CLAUDE.md instructions" : ""}
- Available MCP tools summary

**Next Steps:**
1. Proceed with your development workflow
2. Use get-sections tool for specific documentation areas
3. Reference agent-rules throughout development
4. Use workflow tools for structured development process

The AI agent is now prepared with essential project context!
`;
      
      results.push(contextSummary);
      
      return {
        content: [{
          type: "text",
          text: results.join("\n")
        }]
      };
      
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `Error loading documentation context: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};