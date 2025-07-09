import { z } from "zod";
import { readdirSync } from "fs";
import { join } from "path";
import { ToolDefinition, McpToolResult } from "../types";

export const listDocuments: ToolDefinition = {
  name: "list-documents",
  description: "List all available documentation files with content filtering applied",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const docsPath = join(process.cwd(), "documents");
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
      
      // Sort topics to prioritize development-guide first
      topics.sort((a, b) => {
        if (a.name === 'development-guide') return -1;
        if (b.name === 'development-guide') return 1;
        return a.name.localeCompare(b.name);
      });
      
      return {
        content: [{
          type: "text" as const,
          text: `Available documentation topics (with content filtering applied):

${topics.map(topic => {
  const files = [];
  if (topic.files.content) files.push('content.md');
  if (topic.files.index) files.push('index.md'); 
  if (topic.files.headings) files.push('headings.md');
  return `${topic.name}/\n  - ${files.join('\n  - ')}`;
}).join('\n\n')}

Workflow: Use get-document-section → get-document-titles → targeted searches
Note: Tools default to 'development-guide' for comprehensive development guidance`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error reading documents directory: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};