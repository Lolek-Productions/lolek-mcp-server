import { z } from "zod";
import { ToolDefinition } from "../types";
import { resolveTemplate } from "../shared/template-engine";

export const generateModuleTemplate: ToolDefinition = {
  name: "generate-module-template",
  description: "Generate templated code for a new module including server actions, navigation, and boilerplate",
  inputSchema: z.object({
    moduleName: z.string().describe("Name of the module (e.g., 'Contact', 'Product')"),
    tableName: z.string().describe("Database table name (e.g., 'contacts', 'products')"),
    fields: z.array(z.string()).optional().describe("List of main fields for the module"),
    icon: z.string().optional().describe("Lucide icon name for navigation"),
    description: z.string().optional().describe("Brief description of the module"),
    designType: z.enum(['small', 'medium', 'large']).optional().describe("Module design pattern type"),
    templateType: z.enum(['server-actions', 'sidebar-nav', 'full-module']).describe("Type of template to generate")
  }),
  handler: async ({ moduleName, tableName, fields = [], icon = 'MessageSquare', description, designType = 'medium', templateType }) => {
    try {
      const context = {
        module: {
          name: moduleName,
          tableName,
          fields,
          icon,
          description: description || `Manage ${moduleName.toLowerCase()}s`,
          designType
        }
      };

      let templateContent = '';
      let outputDescription = '';

      switch (templateType) {
        case 'server-actions':
          templateContent = '{{shared:server-actions}}';
          outputDescription = `Server actions for ${moduleName} module`;
          break;
          
        case 'sidebar-nav':
          templateContent = '{{shared:sidebar-nav}}';
          outputDescription = `Navigation configuration for ${moduleName} module`;
          break;
          
        case 'full-module':
          templateContent = `# ${moduleName} Module Template

## Server Actions
\`\`\`typescript
// File: /app/${moduleName.toLowerCase()}/actions.ts
{{shared:server-actions}}
\`\`\`

## Navigation Integration
\`\`\`typescript
// Add to MainSidebar.tsx
{{shared:sidebar-nav}}
\`\`\`

## File Structure
Based on ${designType} module design pattern:

${designType === 'small' ? `
- \`/app/(main)/${moduleName.toLowerCase()}/page.tsx\` - Index with modal create
- \`/app/(main)/${moduleName.toLowerCase()}/components/\` - Component files
- \`/app/(main)/${moduleName.toLowerCase()}/actions.ts\` - Server actions
` : designType === 'medium' ? `
- \`/app/(main)/${moduleName.toLowerCase()}/page.tsx\` - List view
- \`/app/(main)/${moduleName.toLowerCase()}/create/page.tsx\` - Create page
- \`/app/(main)/${moduleName.toLowerCase()}/[id]/page.tsx\` - Edit page
- \`/app/(main)/${moduleName.toLowerCase()}/components/\` - Component files
- \`/app/(main)/${moduleName.toLowerCase()}/actions.ts\` - Server actions
` : `
- \`/app/(main)/${moduleName.toLowerCase()}/page.tsx\` - List view
- \`/app/(main)/${moduleName.toLowerCase()}/create/page.tsx\` - Simple create
- \`/app/(main)/${moduleName.toLowerCase()}/[id]/wizard/page.tsx\` - Wizard
- \`/app/(main)/${moduleName.toLowerCase()}/components/\` - Component files
- \`/app/(main)/${moduleName.toLowerCase()}/actions.ts\` - Server actions
`}

## Database Requirements
Ensure your \`${tableName}\` table includes:
- \`id\` (UUID, primary key)
- \`user_id\` (UUID, foreign key to auth.users)
- \`created_at\` (timestamp)
- \`updated_at\` (timestamp)
${fields.length > 0 ? `- ${fields.map((field: string) => `\`${field}\` (appropriate type)`).join('\n- ')}` : '- Your module-specific fields'}

## Next Steps
1. Create the database table if it doesn't exist
2. Implement the file structure above
3. Add navigation to MainSidebar.tsx
4. Create components based on ${designType} pattern
5. Test server actions and navigation
`;
          outputDescription = `Complete module template for ${moduleName}`;
          break;
      }

      const resolvedContent = await resolveTemplate(templateContent, context);

      return {
        content: [{
          type: "text" as const,
          text: `# ${outputDescription}

${resolvedContent}

---
*Generated with module template system. Customize as needed for your specific requirements.*`
        }]
      };
      
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error generating module template: ${error instanceof Error ? error.message : String(error)}`
        }]
      };
    }
  }
};