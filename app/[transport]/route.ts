import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { readFileSync } from "fs";
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
      "Extract all headings from the NextJS documentation",
      {},
      async () => {
        try {
          const filePath = join(process.cwd(), "docs", "nextjs.md");
          const fileContent = readFileSync(filePath, "utf-8");
          
          // Extract headings (lines starting with #)
          const headings = fileContent
            .split("\n")
            .filter(line => line.trim().startsWith("#"))
            .map(line => line.trim());
          
          return {
            content: [{
              type: "text",
              text: headings.length > 0 
                ? `Found ${headings.length} headings:\n\n${headings.join("\n")}`
                : "No headings found in the document."
            }]
          };
        } catch (error) {
          return {
            content: [{
              type: "text",
              text: `Error reading file: ${error.message}`
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
          description: "Extract all headings from the NextJS documentation",
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
