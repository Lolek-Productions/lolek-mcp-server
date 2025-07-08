import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { ToolDefinition, ToolContext } from "../types";

export const searchContent: ToolDefinition = {
  name: "search-content",
  description: "Search for specific content across all documentation and guides with content filtering applied",
  inputSchema: {
    query: z.string().describe("The search term or regex pattern to find"),
    scope: z.enum(["all", "docs", "guides"]).optional().describe("Where to search: 'all' (default), 'docs' only, or 'guides' only"),
    caseSensitive: z.boolean().optional().describe("Whether search should be case sensitive (default: false)"),
    maxResults: z.number().optional().describe("Maximum number of results to return (default: 50)")
  },
  handler: async ({ query, scope = "all", caseSensitive = false, maxResults = 50 }, context) => {
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
          content = context?.contentFilter.filterContent(content, indexContent);
          
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
};