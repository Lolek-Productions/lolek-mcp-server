import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const handler = createMcpHandler(
  async (server) => {
    server.tool(
      "Tool 1", // Name
      "description", // Description
      {
        message: z.string(), //Input that the tool receives from the user
      },
      async ({ message }) => ({
        content: [{ type: "text", text: `Tool echo: ${message}` }], //content: the actual response message
      })
    );
    server.tool(
      "Tool 2",
      "description",
      {
        message: z.string(),
      },
      async ({ message }) => ({
        content: [{ type: "text", text: `Tool echo: ${message}` }],
      })
    );
    server.tool(
      "get-headings",
      "Extract headings from any markdown document",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'nextjs', 'shadcn'). Defaults to 'nextjs'"),
        file: z.enum(["content", "index", "headings"]).optional().describe("Which file to read: 'content' for main docs, 'index' for sections+headings, 'headings' for organized headings. Defaults to 'content'"),
        type: z.enum(["markdown", "titles"]).optional().describe("Type of headings to extract: 'markdown' for # headings or 'titles' for TITLE: lines. Defaults to 'titles'")
      },
      async ({ topic = "nextjs", file = "content", type = "titles" }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, `${file}.md`);
          const fileContent = readFileSync(filePath, "utf-8");
          
          let headings;
          let headingType;
          
          if (type === "titles") {
            // Extract titles (lines starting with TITLE:)
            headings = fileContent
              .split("\n")
              .filter(line => line.trim().startsWith("TITLE:"))
              .map(line => line.trim().replace("TITLE: ", ""));
            headingType = "titles";
          } else {
            // Extract markdown headings (lines starting with # followed by space)
            headings = fileContent
              .split("\n")
              .filter(line => line.trim().match(/^#+\s/))
              .map(line => line.trim());
            headingType = "headings";
          }
          
          return {
            content: [{
              type: "text",
              text: headings.length > 0 
                ? `Found ${headings.length} ${headingType} in ${topic}/${file}.md:\n\n${headings.join("\n")}`
                : `No ${headingType} found in ${topic}/${file}.md.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading file: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
    server.tool(
      "get-sections",
      "Extract section names from topic index files for efficient navigation of large documentation. This provides an index/table of contents to help AI models traverse content without searching through thousands of lines.",
      {
        topic: z.string().optional().describe("The topic directory name (e.g., 'nextjs', 'shadcn'). Defaults to 'nextjs'")
      },
      async ({ topic = "nextjs" }) => {
        try {
          const filePath = join(process.cwd(), "docs", topic, "index.md");
          const fileContent = readFileSync(filePath, "utf-8");
          
          // Extract section names (lines starting with ## followed by number)
          const sections = fileContent
            .split("\n")
            .filter(line => line.trim().match(/^##\s+\d+\.\s/))
            .map(line => line.trim().replace(/^##\s+\d+\.\s+/, ""));
          
          return {
            content: [{
              type: "text",
              text: sections.length > 0 
                ? `Found ${sections.length} sections in ${topic}:\n\n${sections.join("\n")}`
                : `No sections found in ${topic}.`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading file: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
    server.tool(
      "list-docs",
      "List all available documentation files in the docs directory. Use this first to discover what documentation is available, then use get-sections to see topic areas, then get-headings for specific content.",
      {},
      async () => {
        try {
          const docsPath = join(process.cwd(), "docs");
          const entries = readdirSync(docsPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
          
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
          
          return {
            content: [{
              type: "text",
              text: `Available documentation topics:

${topics.map(topic => {
  const files = [];
  if (topic.files.content) files.push('content.md');
  if (topic.files.index) files.push('index.md'); 
  if (topic.files.headings) files.push('headings.md');
  return `${topic.name}/\n  - ${files.join('\n  - ')}`;
}).join('\n\n')}

Workflow: Use get-sections → get-headings → targeted searches`
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading docs directory: ${error instanceof Error ? error.message : String(error)}`
            }]
          };
        }
      }
    );
  },
  {
    capabilities: {
      tools: {
        "Tool 1": {
          description: "Tool 1 description",
        },
        "Tool 2": {
          description: "Tool 2 description",
        },
        "get-headings": {
          description: "Extract headings from any markdown document",
        },
        "get-sections": {
          description: "Extract section names from *_sections.md files for efficient navigation of large documentation",
        },
        "list-docs": {
          description: "List all available documentation files and explain the navigation workflow",
        },
      },
    },
  },
  {
    basePath: "",
    verboseLogs: true,
    maxDuration: 800,
    redisUrl: process.env.REDIS_URL,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
