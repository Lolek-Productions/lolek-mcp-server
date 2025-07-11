import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

/**
 * Extract all TITLE entries from the development guide content
 * @param content - The content.md file content
 * @returns Array of title objects with title, line number, description, and source
 */
function extractTitlesFromContent(content: string) {
  const lines = content.split('\n');
  const titles = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('TITLE:')) {
      const title = line.substring(6).trim(); // Remove "TITLE:" prefix
      const lineNumber = i + 1;
      
      // Look for description on next line
      let description = '';
      if (i + 1 < lines.length && lines[i + 1].trim().startsWith('DESCRIPTION:')) {
        description = lines[i + 1].substring(12).trim(); // Remove "DESCRIPTION:" prefix
      }
      
      // Look for source on the line after description or title
      let source = '';
      const sourceLineIndex = description ? i + 2 : i + 1;
      if (sourceLineIndex < lines.length && lines[sourceLineIndex].trim().startsWith('SOURCE:')) {
        source = lines[sourceLineIndex].substring(7).trim(); // Remove "SOURCE:" prefix
      }
      
      titles.push({
        title,
        description,
        source,
        lineNumber,
        id: generateId(title)
      });
    }
  }
  
  return titles;
}

/**
 * Generate a URL-friendly ID from a title
 * @param title - The title to convert
 * @returns URL-friendly ID
 */
function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Format titles into a readable index
 * @param titles - Array of title objects
 * @returns Formatted index string
 */
function formatIndex(titles: any[]): string {
  let output = "# Development Guide Index\n\n";
  output += `*Dynamically generated from development-guide/content.md - ${titles.length} items*\n\n`;
  
  // Group by category
  const categories: Record<string, any[]> = {
    'Components': [],
    'Layouts': [],
    'Pages': [],
    'Hooks': [],
    'Contexts': [],
    'Scripts': [],
    'Architecture': [],
    'Configuration': [],
    'Other': []
  };
  
  titles.forEach(item => {
    const title = item.title.toLowerCase();
    
    if (title.includes('component')) {
      categories['Components'].push(item);
    } else if (title.includes('layout')) {
      categories['Layouts'].push(item);
    } else if (title.includes('page')) {
      categories['Pages'].push(item);
    } else if (title.includes('hook') || title.includes('use-')) {
      categories['Hooks'].push(item);
    } else if (title.includes('context') || title.includes('provider')) {
      categories['Contexts'].push(item);
    } else if (title.includes('script') || title.includes('.sh') || title.includes('.js')) {
      categories['Scripts'].push(item);
    } else if (title.includes('architecture') || title.includes('system')) {
      categories['Architecture'].push(item);
    } else if (title.includes('configuration') || title.includes('setup') || title.includes('styles')) {
      categories['Configuration'].push(item);
    } else {
      categories['Other'].push(item);
    }
  });
  
  // Output categorized titles
  Object.entries(categories).forEach(([category, items]) => {
    if (items.length > 0) {
      output += `## ${category}\n\n`;
      items.forEach(item => {
        output += `### ${item.title}\n`;
        if (item.description) {
          output += `${item.description}\n`;
        }
        if (item.source) {
          output += `**Source:** ${item.source}\n`;
        }
        output += `**Line:** ${item.lineNumber} | **ID:** ${item.id}\n\n`;
      });
    }
  });
  
  output += "---\n\n";
  output += "**Usage:** Use `get-development-guide-content` to access the complete guide content.\n";
  output += "**Search:** All titles are indexed with descriptions and source locations for easy reference.";
  
  return output;
}

export const getDevelopmentGuideIndex: ToolDefinition = {
  name: "get-development-guide-index",
  description: "Get a dynamically generated index of all development guide sections and components",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const contentPath = join(process.cwd(), "development-guide", "content.md");
      const content = readFileSync(contentPath, "utf-8");
      
      const titles = extractTitlesFromContent(content);
      const indexContent = formatIndex(titles);
      
      return {
        content: [{
          type: "text" as const,
          text: indexContent
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error generating development guide index: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};