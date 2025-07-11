import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

/**
 * Extract a specific section from the development guide content
 * @param content - The content.md file content
 * @param searchTerm - The title or partial title to search for
 * @returns The section content or null if not found
 */
function extractSection(content: string, searchTerm: string) {
  const lines = content.split('\n');
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  let sectionStart = -1;
  let sectionEnd = -1;
  let foundTitle = '';
  
  // Find the section start
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('TITLE:')) {
      const title = line.substring(6).trim();
      
      // Check if this title matches our search term
      if (title.toLowerCase().includes(normalizedSearch)) {
        sectionStart = i;
        foundTitle = title;
        break;
      }
    }
  }
  
  if (sectionStart === -1) {
    return null; // Section not found
  }
  
  // Find the section end (next TITLE or end of file)
  for (let i = sectionStart + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('TITLE:')) {
      sectionEnd = i;
      break;
    }
  }
  
  if (sectionEnd === -1) {
    sectionEnd = lines.length; // Section goes to end of file
  }
  
  // Extract the section content
  const sectionLines = lines.slice(sectionStart, sectionEnd);
  
  return {
    title: foundTitle,
    content: sectionLines.join('\n'),
    startLine: sectionStart + 1,
    endLine: sectionEnd,
    lineCount: sectionEnd - sectionStart
  };
}

/**
 * Search for multiple potential matches
 * @param content - The content.md file content
 * @param searchTerm - The search term
 * @returns Array of matching titles
 */
function findMatches(content: string, searchTerm: string) {
  const lines = content.split('\n');
  const normalizedSearch = searchTerm.toLowerCase().trim();
  const matches = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('TITLE:')) {
      const title = line.substring(6).trim();
      
      if (title.toLowerCase().includes(normalizedSearch)) {
        matches.push({
          title,
          lineNumber: i + 1
        });
      }
    }
  }
  
  return matches;
}

export const getDevelopmentGuideSection: ToolDefinition = {
  name: "get-development-guide-section",
  description: "Get a specific section from the development guide by searching for a title or part of a title",
  inputSchema: z.object({
    title: z.string().describe("The title or partial title to search for (case-insensitive)")
  }),
  handler: async (params) => {
    try {
      const { title } = params || {};
      
      if (!title) {
        return {
          content: [{
            type: "text" as const,
            text: "Error: title parameter is required"
          }]
        };
      }
      
      const contentPath = join(process.cwd(), "development-guide", "content.md");
      const content = readFileSync(contentPath, "utf-8");
      
      // First, try to find an exact or partial match
      const section = extractSection(content, title);
      
      if (section) {
        let response = `# ${section.title}\n\n`;
        response += `*Found at lines ${section.startLine}-${section.endLine} (${section.lineCount} lines)*\n\n`;
        response += `---\n\n`;
        response += section.content;
        
        return {
          content: [{
            type: "text" as const,
            text: response
          }]
        };
      } else {
        // If no exact match, show potential matches
        const matches = findMatches(content, title);
        
        if (matches.length > 0) {
          let response = `No exact match found for "${title}".\n\n`;
          response += `Found ${matches.length} potential matches:\n\n`;
          
          matches.forEach((match, index) => {
            response += `${index + 1}. **${match.title}** (line ${match.lineNumber})\n`;
          });
          
          response += `\nTry searching with one of these exact titles or a more specific term.`;
          
          return {
            content: [{
              type: "text" as const,
              text: response
            }]
          };
        } else {
          return {
            content: [{
              type: "text" as const,
              text: `No sections found matching "${title}". Use get-development-guide-index to see all available sections.`
            }]
          };
        }
      }
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error retrieving development guide section: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};