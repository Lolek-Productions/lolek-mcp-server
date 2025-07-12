import { readFileSync } from "fs";
import { join } from "path";

export interface TemplateContext {
  module?: {
    name: string;
    tableName: string;
    fields: string[];
    icon?: string;
    description?: string;
    designType?: 'small' | 'medium' | 'large';
  };
  workflow?: {
    name: string;
    type: string;
    description: string;
    steps: number;
    duration: string;
    teamSize: string;
  };
  tool?: {
    name: string;
    description: string;
    category: string;
  };
  [key: string]: any;
}

export class TemplateEngine {
  private static instance: TemplateEngine;
  private templateCache = new Map<string, string>();

  static getInstance(): TemplateEngine {
    if (!TemplateEngine.instance) {
      TemplateEngine.instance = new TemplateEngine();
    }
    return TemplateEngine.instance;
  }

  async resolve(content: string, context: TemplateContext = {}): Promise<string> {
    let resolved = content;

    // Process {{tool:name}} and {{tool:name:section}} references
    resolved = await this.processToolReferences(resolved, context);

    // Process {{shared:template}} references
    resolved = await this.processSharedReferences(resolved, context);

    // Process {{module:property}} references
    resolved = this.processModuleReferences(resolved, context);

    // Process {{workflow:property}} references
    resolved = this.processWorkflowReferences(resolved, context);

    // Process {{env:variable}} references
    resolved = this.processEnvReferences(resolved, context);

    return resolved;
  }

  private async processToolReferences(content: string, context: TemplateContext): Promise<string> {
    const toolPattern = /\{\{tool:([^:}]+)(?::([^}]+))?\}\}/g;
    let match;
    let resolved = content;

    while ((match = toolPattern.exec(content)) !== null) {
      const [fullMatch, toolName, section] = match;
      try {
        // Dynamic import of the tool
        const toolModule = await import(`../information/${toolName}.ts`).catch(() =>
          import(`../workflow/${toolName}.ts`).catch(() =>
            import(`../documentation/${toolName}.ts`).catch(() =>
              import(`../examples/${toolName}.ts`)
            )
          )
        );

        if (toolModule && toolModule[this.toCamelCase(toolName)]) {
          const tool = toolModule[this.toCamelCase(toolName)];
          const result = await tool.handler({}, context);
          
          let toolOutput = '';
          if (result.content && Array.isArray(result.content)) {
            toolOutput = result.content
              .filter((c: any) => c.type === 'text')
              .map((c: any) => c.text)
              .join('\n');
          }

          // If section is specified, extract only that section
          if (section && toolOutput) {
            toolOutput = this.extractSection(toolOutput, section);
          }

          resolved = resolved.replace(fullMatch, toolOutput);
        }
      } catch (error) {
        console.warn(`Failed to resolve tool reference: ${toolName}`, error);
        resolved = resolved.replace(fullMatch, `[Error: Could not resolve tool ${toolName}]`);
      }
    }

    return resolved;
  }

  private async processSharedReferences(content: string, context: TemplateContext): Promise<string> {
    const sharedPattern = /\{\{shared:([^}]+)\}\}/g;
    let match;
    let resolved = content;

    while ((match = sharedPattern.exec(content)) !== null) {
      const [fullMatch, templateName] = match;
      try {
        const template = await this.getSharedTemplate(templateName);
        // Recursively resolve templates within templates
        const resolvedTemplate = await this.resolve(template, context);
        resolved = resolved.replace(fullMatch, resolvedTemplate);
      } catch (error) {
        console.warn(`Failed to resolve shared template: ${templateName}`, error);
        resolved = resolved.replace(fullMatch, `[Error: Could not resolve template ${templateName}]`);
      }
    }

    return resolved;
  }

  private processModuleReferences(content: string, context: TemplateContext): string {
    if (!context.module) return content;

    const modulePattern = /\{\{module:([^}]+)\}\}/g;
    return content.replace(modulePattern, (match, property) => {
      const value = (context.module as any)?.[property];
      return value !== undefined ? String(value) : match;
    });
  }

  private processWorkflowReferences(content: string, context: TemplateContext): string {
    if (!context.workflow) return content;

    const workflowPattern = /\{\{workflow:([^}]+)\}\}/g;
    return content.replace(workflowPattern, (match, property) => {
      const value = (context.workflow as any)?.[property];
      return value !== undefined ? String(value) : match;
    });
  }

  private processEnvReferences(content: string, context: TemplateContext): string {
    const envPattern = /\{\{env:([^}]+)\}\}/g;
    return content.replace(envPattern, (match, variable) => {
      const value = process.env[variable] || context[variable];
      return value !== undefined ? String(value) : match;
    });
  }

  private async getSharedTemplate(templateName: string): Promise<string> {
    if (this.templateCache.has(templateName)) {
      return this.templateCache.get(templateName)!;
    }

    try {
      const templatePath = join(process.cwd(), "tools/shared/templates", `${templateName}.md`);
      const template = readFileSync(templatePath, "utf-8");
      this.templateCache.set(templateName, template);
      return template;
    } catch (error) {
      // Try TypeScript template files
      try {
        const templatePath = join(process.cwd(), "tools/shared/templates", `${templateName}.ts.template`);
        const template = readFileSync(templatePath, "utf-8");
        this.templateCache.set(templateName, template);
        return template;
      } catch (tsError) {
        throw new Error(`Template not found: ${templateName}`);
      }
    }
  }

  private extractSection(content: string, sectionName: string): string {
    // Extract content between section headers
    const sectionPattern = new RegExp(`## ${sectionName}\\s*\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
    const match = content.match(sectionPattern);
    return match ? match[1].trim() : content;
  }

  private toCamelCase(str: string): string {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  // Clear cache for testing/development
  clearCache(): void {
    this.templateCache.clear();
  }
}

// Export singleton instance
export const templateEngine = TemplateEngine.getInstance();

// Utility function for tools to use
export async function resolveTemplate(content: string, context: TemplateContext = {}): Promise<string> {
  return templateEngine.resolve(content, context);
}