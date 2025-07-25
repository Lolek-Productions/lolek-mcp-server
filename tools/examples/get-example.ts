import { z } from "zod";
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { ToolDefinition } from "../types";

export const getExample: ToolDefinition = {
  name: "get-example",
  description: "Get the code content of a specific example file from the examples directory",
  inputSchema: z.object({
    file: z.string().describe("Path to the example file (e.g., 'components/PublicHeader.jsx', 'contexts/AppContextProvider.tsx', 'lib/supabase/client.ts')")
  }),
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
        // Try to find files that match the partial name
        const allFiles = getAllExampleFiles(examplesPath);
        const matches = allFiles.filter(f => f.includes(file) || f.toLowerCase().includes(file.toLowerCase()));
        
        if (matches.length === 0) {
          return {
            content: [{
              type: "text" as const,
              text: `Error: File '${file}' not found in examples directory. Use 'list-examples' to see available files.`
            }]
          };
        } else if (matches.length === 1) {
          // If exactly one match, use it
          const matchedFile = matches[0];
          const matchedFilePath = join(examplesPath, matchedFile);
          const content = readFileSync(matchedFilePath, 'utf-8');
          return buildFileResponse(matchedFile, content, examplesPath);
        } else {
          // Multiple matches - show options
          return {
            content: [{
              type: "text" as const,
              text: `Multiple files match '${file}':\n${matches.map(m => `- ${m}`).join('\n')}\n\nPlease specify the exact file path.`
            }]
          };
        }
      }
      
      // Read file content
      const content = readFileSync(filePath, 'utf-8');
      return buildFileResponse(file, content, examplesPath);
      
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
    'lib/toast-utils.ts': 'Toast notification utilities and helper functions for consistent messaging',
    'hooks/use-mobile.ts': 'Custom React hook for detecting mobile device breakpoints and responsive behavior',
    'hooks/use-toast.ts': 'Custom React hook for toast notifications with consistent styling and behavior',
    'layouts/app-layout.tsx': 'Root application layout component with authentication context and global providers',
    'layouts/main-layout.jsx': 'Main authenticated application layout with sidebar, header, and content area',
    'layouts/public-layout.jsx': 'Public pages layout component with header, footer, and minimal styling',
    'pages/EditForm.tsx': 'Reusable form component for editing entities with validation and error handling',
    'pages/ListTable.jsx': 'Data table component for listing entities with sorting, filtering, and pagination',
    'pages/create-page.tsx': 'Complete page template for creating new entities with form validation',
    'pages/edit-page.jsx': 'Complete page template for editing existing entities with pre-populated forms',
    'pages/list-page.jsx': 'Complete page template for listing entities with table, search, and actions',
    'scripts/generate-database-docs.sh': 'Automated script for generating database schema documentation from Supabase REST API',
    'CLAUDE.md': 'Comprehensive Claude Code configuration example with development commands, architecture overview, and best practices'
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
    'lib/toast-utils.ts': 'Import toast utility functions for consistent messaging across your application. Use for success, error, warning, and info notifications.',
    'hooks/use-mobile.ts': 'Import and use in components that need responsive behavior. Returns boolean indicating if current viewport is mobile.',
    'hooks/use-toast.ts': 'Import and use in components that need toast notifications. Provides toast(), dismiss(), and other toast management functions.',
    'layouts/app-layout.tsx': 'Use as root layout in app/layout.tsx. Provides authentication context and global providers for entire application.',
    'layouts/main-layout.jsx': 'Use for authenticated pages in app/(main)/layout.tsx. Provides sidebar, header, and authenticated user context.',
    'layouts/public-layout.jsx': 'Use for public pages in app/(public)/layout.tsx. Provides header, footer, and minimal styling for landing pages.',
    'pages/EditForm.tsx': 'Use as template for entity edit forms. Customize fields, validation, and submit handling for your specific entity.',
    'pages/ListTable.jsx': 'Use as template for entity listing tables. Customize columns, actions, and data fetching for your specific entity.',
    'pages/create-page.tsx': 'Use as template for entity creation pages. Place in app/your-entity/create/page.tsx with appropriate form fields.',
    'pages/edit-page.jsx': 'Use as template for entity edit pages. Place in app/your-entity/[id]/edit/page.jsx with appropriate form fields.',
    'pages/list-page.jsx': 'Use as template for entity listing pages. Place in app/your-entity/page.jsx with appropriate table configuration.',
    'scripts/generate-database-docs.sh': 'Run with `./scripts/generate-database-docs.sh` to generate DATABASE.md with current schema information.',
    'CLAUDE.md': 'Place in your project root directory to provide Claude Code with project-specific guidance, development commands, and architectural context. Customize the content to match your project\'s specific requirements and conventions.'
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

// Helper function to get all example files recursively
function getAllExampleFiles(basePath: string): string[] {
  const files: string[] = [];
  
  function scanDirectory(dirPath: string, relativePath: string = '') {
    const items = readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = join(dirPath, item);
      const relativeName = relativePath ? `${relativePath}/${item}` : item;
      
      if (statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, relativeName);
      } else {
        files.push(relativeName);
      }
    }
  }
  
  scanDirectory(basePath);
  return files;
}

// Helper function to build file response
function buildFileResponse(file: string, content: string, examplesPath: string): any {
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
}