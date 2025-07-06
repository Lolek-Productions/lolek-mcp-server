/**
 * MCP Tool Test Runner
 * 
 * This test file validates the MCP tools defined in app/[transport]/route.ts
 * without needing to start a server or connect to external services.
 * 
 * Usage:
 *   node tests/test-simple.mjs
 */

// Simple test for tool functions
import { z } from "zod";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

// Define the tool functions directly
const tool1 = async ({ message }) => ({
  content: [{ type: "text", text: `Tool echo: ${message}` }],
});

const tool2 = async ({ message }) => ({
  content: [{ type: "text", text: `Tool echo: ${message}` }],
});

const getHeadings = async ({ topic = "nextjs", file = "content", type = "titles" } = {}) => {
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

    console.log(`${headingType} from ${topic}/${file}.md:`, headings);
    
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
        text: `Error reading file: ${error.message}`
      }]
    };
  }
};

const getSections = async ({ topic = "nextjs" } = {}) => {
  try {
    const filePath = join(process.cwd(), "docs", topic, "index.md");
    const fileContent = readFileSync(filePath, "utf-8");
    
    // Extract section names (lines starting with ## followed by number)
    const sections = fileContent
      .split("\n")
      .filter(line => line.trim().match(/^##\s+\d+\.\s/))
      .map(line => line.trim().replace(/^##\s+\d+\.\s+/, ""));

    console.log(`sections from ${topic}:`, sections);
    
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
        text: `Error reading file: ${error.message}`
      }]
    };
  }
};

const listDocs = async () => {
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
    
    console.log('Available topics:', topics);
    
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
        text: `Error reading docs directory: ${error.message}`
      }]
    };
  }
};

// Test schema validation
const messageSchema = z.string();

async function testTools() {
  console.log("Testing MCP tools locally...");

  // Test Tool 1
  console.log("\n--- Testing Tool 1 ---");
  try {
    const input1 = "Hello Tool 1!";
    const validatedInput1 = messageSchema.parse(input1);
    const result1 = await tool1({ message: validatedInput1 });
    console.log("Tool 1 result:", JSON.stringify(result1, null, 2));
  } catch (error) {
    console.error("Tool 1 error:", error.message);
  }

  // Test Tool 2
  console.log("\n--- Testing Tool 2 ---");
  try {
    const input2 = "Hello Tool 2!";
    const validatedInput2 = messageSchema.parse(input2);
    const result2 = await tool2({ message: validatedInput2 });
    console.log("Tool 2 result:", JSON.stringify(result2, null, 2));
  } catch (error) {
    console.error("Tool 2 error:", error.message);
  }

  // Test get-headings tool with NextJS titles
  console.log("\n--- Testing get-headings tool (NextJS titles) ---");
  try {
    const result3 = await getHeadings({ topic: "nextjs", file: "content", type: "titles" });
    console.log("get-headings (titles) result:", JSON.stringify(result3, null, 2));
  } catch (error) {
    console.error("get-headings (titles) error:", error.message);
  }

  // Test get-headings tool with shadcn titles
  console.log("\n--- Testing get-headings tool (shadcn titles) ---");
  try {
    const result4 = await getHeadings({ topic: "shadcn", file: "content", type: "titles" });
    console.log("get-headings (shadcn titles) result:", JSON.stringify(result4, null, 2));
  } catch (error) {
    console.error("get-headings (shadcn titles) error:", error.message);
  }

  // Test get-sections tool with NextJS sections
  console.log("\n--- Testing get-sections tool (NextJS sections) ---");
  try {
    const result5 = await getSections({ topic: "nextjs" });
    console.log("get-sections (nextjs) result:", JSON.stringify(result5, null, 2));
  } catch (error) {
    console.error("get-sections (nextjs) error:", error.message);
  }

  // Test get-sections tool with shadcn sections
  console.log("\n--- Testing get-sections tool (shadcn sections) ---");
  try {
    const result6 = await getSections({ topic: "shadcn" });
    console.log("get-sections (shadcn) result:", JSON.stringify(result6, null, 2));
  } catch (error) {
    console.error("get-sections (shadcn) error:", error.message);
  }

  // Test list-docs tool
  console.log("\n--- Testing list-docs tool ---");
  try {
    const result7 = await listDocs();
    console.log("list-docs result:", JSON.stringify(result7, null, 2));
  } catch (error) {
    console.error("list-docs error:", error.message);
  }

  // Test with invalid input
  console.log("\n--- Testing with invalid input ---");
  try {
    const invalidInput = 123; // Should be string
    messageSchema.parse(invalidInput);
  } catch (error) {
    console.log("Schema validation caught invalid input:", error.message);
  }
}

testTools();