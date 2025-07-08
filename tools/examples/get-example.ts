import { z } from "zod";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { ToolDefinition } from "../types";

export const getExample: ToolDefinition = {
  name: "get-example",
  description: "Get the code content of a specific example file from the examples directory",
  inputSchema: {
    file: z.string().describe("Path to the example file (e.g., 'components/PublicHeader.jsx', 'contexts/AppContextProvider.tsx', 'lib/supabase/client.ts')")
  },
  handler: async (params) => {
    try {
      const { file } = params;
      const examplesPath = join(process.cwd(), "examples");
      const filePath = join(examplesPath, file);
      
      // Security check - ensure file is within examples directory
      if (!filePath.startsWith(examplesPath)) {
        return {
          content: [{
            type: "text" as const,
            text: "Error: File path must be within the examples directory"
          }]
        };
      }
      
      // Check if file exists
      if (!existsSync(filePath)) {
        return {
          content: [{
            type: "text" as const,
            text: `Error: File '${file}' not found in examples directory. Use 'list-examples' to see available files.`
          }]
        };
      }
      
      // Read file content
      const content = readFileSync(filePath, 'utf-8');
      const extension = extname(file);
      
      // Determine language for syntax highlighting
      const language = getLanguageFromExtension(extension);
      
      // Format output
      const fileName = file.split('/').pop() || file;
      const description = getFileDescription(file);
      
      let output = `# ${fileName}\n\n`;
      output += `**Path**: \`examples/${file}\`\n`;
      output += `**Description**: ${description}\n\n`;
      output += `## Code\n\n`;
      output += "```" + language + "\n";
      output += content;
      output += "\n```\n\n";
      
      // Add usage notes based on file type
      const usageNotes = getUsageNotes(file, extension);
      if (usageNotes) {
        output += `## Usage Notes\n\n${usageNotes}\n\n`;
      }
      
      // Add related files
      const relatedFiles = getRelatedFiles(file);
      if (relatedFiles.length > 0) {
        output += `## Related Files\n\n`;
        relatedFiles.forEach(related => {
          output += `- \`${related}\`\n`;
        });
        output += "\n";
      }
      
      return {
        content: [{
          type: "text" as const,
          text: output
        }]
      };
      
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error reading example file: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};

function getLanguageFromExtension(ext: string): string {
  const languageMap: { [key: string]: string } = {
    '.tsx': 'tsx',
    '.jsx': 'jsx',
    '.ts': 'typescript',
    '.js': 'javascript',
    '.sh': 'bash',
    '.json': 'json',
    '.md': 'markdown'
  };
  
  return languageMap[ext] || 'text';
}

function getFileDescription(file: string): string {
  const descriptions: { [key: string]: string } = {
    'components/PublicFooter.jsx': 'Simple footer component for public-facing pages with company branding',
    'components/PublicHeader.jsx': 'Navigation header for public pages with responsive mobile menu and login button',
    'components/centered-form-card.tsx': 'Reusable centered card container for forms and content with customizable max-width',
    'components/collapsible-nav-section.tsx': 'Collapsible navigation section for sidebar menus with expand/collapse animation',
    'components/copy-button.tsx': 'Button component for copying text to clipboard with visual feedback',
    'components/main-header.tsx': 'Main application header with sidebar trigger and breadcrumb navigation',
    'components/main-sidebar.tsx': 'Main application sidebar with navigation and user profile integration',
    'components/page-container.tsx': 'Page layout container with optional card wrapper for consistent page layouts',
    'components/user-profile.tsx': 'User profile dropdown with authentication integration for Supabase',
    'contexts/AppContextProvider.tsx': 'Application context provider for global state management with Supabase authentication',
    'lib/utils.ts': 'Utility functions for common operations and helper methods',
    'lib/supabase/client.ts': 'Supabase client configuration for browser-side operations',
    'lib/supabase/server.ts': 'Supabase server configuration for server-side operations',
    'lib/supabase/middleware.ts': 'Supabase middleware for authentication and route protection',
    'lib/actions/contacts.ts': 'Server actions for contact management operations',
    'scripts/generate-database-docs.sh': 'Automated script for generating database schema documentation from Supabase REST API'
  };
  
  return descriptions[file] || 'Code example file';
}

function getUsageNotes(file: string, extension: string): string | null {
  const usageMap: { [key: string]: string } = {
    'components/PublicFooter.jsx': 'Place at the bottom of public layout components. No props required.',
    'components/PublicHeader.jsx': 'Place at the top of public layout components. Requires /Lolek-logo.png in public folder.',
    'components/centered-form-card.tsx': 'Wrap forms or content that need centered card layout. Customize maxWidth for different content sizes.',
    'components/collapsible-nav-section.tsx': 'Create collapsible navigation sections in sidebars. Pass array of NavItem objects with title, url, and icon.',
    'components/copy-button.tsx': 'Add copy functionality to any text content. Provide content prop with text to copy.',
    'components/main-header.tsx': 'Place at top of authenticated pages. Pass breadcrumbs array for navigation context.',
    'components/main-sidebar.tsx': 'Main navigation component for authenticated application. Requires /Lolek-logo.png in public folder.',
    'components/page-container.tsx': 'Wrap page content for consistent layout. Use cardTitle prop to wrap content in centered card.',
    'components/user-profile.tsx': 'Place in sidebar footer or header for user authentication features. Requires Supabase configuration.',
    'contexts/AppContextProvider.tsx': 'Wrap your entire application with this provider in your root layout or _app.tsx file. Access state and methods using useAppContext hook.',
    'lib/supabase/client.ts': 'Import this client for browser-side Supabase operations. Configure with your project URL and anon key.',
    'lib/supabase/server.ts': 'Import this for server-side operations that require elevated permissions.',
    'lib/supabase/middleware.ts': 'Add to your middleware.ts file for automatic route protection and authentication.',
    'scripts/generate-database-docs.sh': 'Run with `./scripts/generate-database-docs.sh` to generate DATABASE.md with current schema information.'
  };
  
  return usageMap[file] || null;
}

function getRelatedFiles(file: string): string[] {
  const relatedMap: { [key: string]: string[] } = {
    'components/main-sidebar.tsx': ['components/collapsible-nav-section.tsx', 'components/user-profile.tsx'],
    'components/main-header.tsx': ['components/main-sidebar.tsx'],
    'components/page-container.tsx': ['components/centered-form-card.tsx'],
    'components/user-profile.tsx': ['contexts/AppContextProvider.tsx', 'lib/supabase/client.ts'],
    'contexts/AppContextProvider.tsx': ['lib/supabase/client.ts'],
    'lib/supabase/client.ts': ['lib/supabase/server.ts', 'lib/supabase/middleware.ts'],
    'lib/supabase/server.ts': ['lib/supabase/client.ts', 'lib/supabase/middleware.ts'],
    'lib/supabase/middleware.ts': ['lib/supabase/client.ts', 'lib/supabase/server.ts']
  };
  
  return relatedMap[file] || [];
}