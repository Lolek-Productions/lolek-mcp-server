import { z } from "zod";
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { ToolDefinition } from "../types";

export const listExamples: ToolDefinition = {
  name: "list-examples",
  description: "List all available code examples organized by category (components, scripts, contexts, lib)",
  inputSchema: z.object({}).optional(),
  handler: async (params) => {
    try {
      const examplesPath = join(process.cwd(), "examples");
      
      // Get all items in examples directory
      const items = readdirSync(examplesPath);
      
      // Categorize items
      const categories = {
        components: [] as string[],
        scripts: [] as string[],
        contexts: [] as string[],
        lib: [] as string[],
        hooks: [] as string[],
        layouts: [] as string[],
        pages: [] as string[],
        documentation: [] as string[],
        other: [] as string[]
      };
      
      const directories = [] as string[];
      const files = [] as string[];
      
      // Process each item
      items.forEach(item => {
        const itemPath = join(examplesPath, item);
        const isDirectory = statSync(itemPath).isDirectory();
        
        if (isDirectory) {
          directories.push(item);
          
          // Get contents of known directories
          if (item === "components" || item === "contexts" || item === "lib" || item === "scripts" || item === "hooks" || item === "layouts" || item === "pages") {
            const subItems = readdirSync(itemPath);
            categories[item as keyof typeof categories] = subItems;
          }
        } else {
          files.push(item);
          // Special handling for documentation files
          if (item.toUpperCase() === 'CLAUDE.MD') {
            categories.documentation.push(item);
          } else {
            categories.other.push(item);
          }
        }
      });
      
      // Build organized output
      let output = "# Available Code Examples\n\n";
      
      // Documentation files
      if (categories.documentation.length > 0) {
        output += "## 📋 Documentation Examples\n";
        categories.documentation.forEach(doc => {
          output += `- \`${doc}\` - ${formatDocumentationName(doc)}\n`;
        });
        output += "\n";
      }
      
      // Components directory
      if (categories.components.length > 0) {
        output += "## 🧩 Components\n";
        categories.components.forEach(component => {
          const name = component.replace(/\.(jsx|tsx)$/, '');
          output += `- \`components/${component}\` - ${formatComponentName(name)}\n`;
        });
        output += "\n";
      }
      
      // Contexts directory
      if (categories.contexts.length > 0) {
        output += "## 🔄 Contexts\n";
        categories.contexts.forEach(context => {
          output += `- \`contexts/${context}\` - ${formatComponentName(context.replace(/\.(jsx|tsx)$/, ''))}\n`;
        });
        output += "\n";
      }
      
      // Scripts directory
      if (categories.scripts.length > 0) {
        output += "## 📜 Scripts\n";
        categories.scripts.forEach(script => {
          output += `- \`scripts/${script}\` - ${formatScriptName(script)}\n`;
        });
        output += "\n";
      }
      
      // Lib directory
      if (categories.lib.length > 0) {
        output += "## 📚 Library Files\n";
        
        // Get lib subdirectories
        const libPath = join(examplesPath, "lib");
        const libItems = readdirSync(libPath);
        
        libItems.forEach(libItem => {
          const libItemPath = join(libPath, libItem);
          const isLibDir = statSync(libItemPath).isDirectory();
          
          if (isLibDir) {
            output += `### ${libItem}/\n`;
            const subItems = readdirSync(libItemPath);
            subItems.forEach(subItem => {
              output += `- \`lib/${libItem}/${subItem}\` - ${formatLibName(subItem)}\n`;
            });
          } else {
            output += `- \`lib/${libItem}\` - ${formatLibName(libItem)}\n`;
          }
        });
        output += "\n";
      }
      
      // Hooks directory
      if (categories.hooks.length > 0) {
        output += "## 🪝 Hooks\n";
        categories.hooks.forEach(hook => {
          output += `- \`hooks/${hook}\` - ${formatHookName(hook)}\n`;
        });
        output += "\n";
      }
      
      // Layouts directory
      if (categories.layouts.length > 0) {
        output += "## 🗂️ Layouts\n";
        categories.layouts.forEach(layout => {
          output += `- \`layouts/${layout}\` - ${formatLayoutName(layout)}\n`;
        });
        output += "\n";
      }
      
      // Pages directory
      if (categories.pages.length > 0) {
        output += "## 📄 Pages\n";
        categories.pages.forEach(page => {
          output += `- \`pages/${page}\` - ${formatPageName(page)}\n`;
        });
        output += "\n";
      }
      
      // Other files
      if (categories.other.length > 0) {
        output += "## 📄 Other Files\n";
        categories.other.forEach(file => {
          output += `- \`${file}\`\n`;
        });
        output += "\n";
      }
      
      // Usage instructions
      output += "## 💡 Usage\n";
      output += "Use the `get-example` tool with the file path to retrieve the code:\n";
      output += "```\n";
      output += "get-example --file \"components/PublicHeader.jsx\"\n";
      output += "get-example --file \"contexts/AppContextProvider.tsx\"\n";
      output += "get-example --file \"lib/supabase/client.ts\"\n";
      output += "```\n";
      
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
          text: `Error listing examples: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};

// Helper functions for formatting names
function formatComponentName(name: string): string {
  // Convert kebab-case and PascalCase to readable names
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2') // PascalCase to spaced
    .replace(/-/g, ' ') // kebab-case to spaced
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function formatScriptName(name: string): string {
  if (name === "generate-database-docs.sh") {
    return "Database Documentation Generator";
  }
  return formatComponentName(name.replace(/\.(sh|js|ts)$/, ''));
}

function formatLibName(name: string): string {
  if (name === "client.ts") return "Supabase Client Configuration";
  if (name === "server.ts") return "Supabase Server Configuration";
  if (name === "middleware.ts") return "Supabase Middleware";
  if (name === "utils.ts") return "Utility Functions";
  if (name === "contacts.ts") return "Contact Actions";
  
  return formatComponentName(name.replace(/\.(ts|js)$/, ''));
}

function formatDocumentationName(name: string): string {
  if (name.toUpperCase() === 'CLAUDE.MD') {
    return "Claude Code configuration and best practices example";
  }
  
  return formatComponentName(name.replace(/\.(md|txt)$/, ''));
}

function formatHookName(name: string): string {
  if (name === "use-mobile.ts") return "Mobile device breakpoint detection hook";
  if (name === "use-toast.ts") return "Toast notification management hook";
  
  return formatComponentName(name.replace(/\.(ts|js)$/, ''));
}

function formatLayoutName(name: string): string {
  if (name === "app-layout.tsx") return "Root application layout with global providers";
  if (name === "main-layout.jsx") return "Main authenticated application layout";
  if (name === "public-layout.jsx") return "Public pages layout component";
  
  return formatComponentName(name.replace(/\.(tsx|jsx)$/, ''));
}

function formatPageName(name: string): string {
  if (name === "EditForm.tsx") return "Reusable form component for editing entities";
  if (name === "ListTable.jsx") return "Data table component for listing entities";
  if (name === "create-page.tsx") return "Complete page template for creating entities";
  if (name === "edit-page.jsx") return "Complete page template for editing entities";
  if (name === "list-page.jsx") return "Complete page template for listing entities";
  
  return formatComponentName(name.replace(/\.(tsx|jsx)$/, ''));
}