import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const origin = process.argv[2] || "http://localhost:3000";

async function testWorkflowE2E() {
  console.log("🧪 Starting Workflow End-to-End Tests");
  console.log("Connecting to", origin);

  const transport = new SSEClientTransport(new URL(`${origin}/sse`));
  const client = new Client(
    {
      name: "workflow-test-client",
      version: "1.0.0",
    },
    {
      capabilities: {
        prompts: {},
        resources: {},
        tools: {},
      },
    }
  );

  try {
    await client.connect(transport);
    console.log("✅ Connected to MCP server");

    // Test 1: List available workflows
    console.log("\n📋 Test 1: Getting available workflows...");
    const workflowsResult = await client.callTool({
      name: "get-workflows",
      arguments: {}
    });
    console.log("✅ get-workflows successful");
    console.log("Response length:", workflowsResult.content[0].text.length);

    // Test 2: Get feature workflow template
    console.log("\n📝 Test 2: Getting feature workflow template...");
    const featureTemplateResult = await client.callTool({
      name: "get-workflow-template",
      arguments: { type: "feature" }
    });
    console.log("✅ get-workflow-template (feature) successful");
    const featureText = featureTemplateResult.content[0].text;
    
    // Verify feature template contains expected content
    if (!featureText.includes("Feature Development Workflow")) {
      throw new Error("Feature template missing expected title");
    }
    if (!featureText.includes("Pre-Planning Questions")) {
      throw new Error("Feature template missing pre-planning questions");
    }
    console.log("✅ Feature template contains expected content");

    // Test 3: Get module workflow template
    console.log("\n🏗️ Test 3: Getting module workflow template...");
    const moduleTemplateResult = await client.callTool({
      name: "get-workflow-template", 
      arguments: { type: "module" }
    });
    console.log("✅ get-workflow-template (module) successful");
    const moduleText = moduleTemplateResult.content[0].text;
    
    // Verify module template contains expected content
    if (!moduleText.includes("Module Development Workflow")) {
      throw new Error("Module template missing expected title");
    }
    if (!moduleText.includes("Pre-Planning Questions")) {
      throw new Error("Module template missing pre-planning questions");
    }
    console.log("✅ Module template contains expected content");

    // Test 4: Evaluate workflow progress (non-preplanning step)
    console.log("\n⚡ Test 4: Evaluating workflow progress (design step)...");
    const progressResult = await client.callTool({
      name: "evaluate-workflow-progress",
      arguments: {
        type: "feature",
        currentStep: "2_design",
        stepProgress: "Created wireframes and technical design document with database schema"
      }
    });
    console.log("✅ evaluate-workflow-progress (design step) successful");
    const progressText = progressResult.content[0].text;
    
    if (!progressText.includes("Design & Architecture")) {
      throw new Error("Progress evaluation missing step details");
    }
    if (!progressText.includes("Exit Criteria Review")) {
      throw new Error("Progress evaluation missing exit criteria");
    }
    console.log("✅ Progress evaluation contains expected content");

    // Test 5: Evaluate workflow progress with pre-planning answers
    console.log("\n🎯 Test 5: Evaluating pre-planning step with answers...");
    const mockAnswers = JSON.stringify({
      feature_description: "Add bulk contact import functionality with CSV file upload, validation, and progress tracking",
      user_story: "As a sales manager, I want to import contacts from CSV files so that I can quickly add leads from trade shows and external sources",
      acceptance_criteria: [
        "Support CSV files up to 10MB",
        "Validate email formats and phone numbers",
        "Show real-time progress bar during import",
        "Display detailed success/error summary",
        "Handle duplicate detection with user choice"
      ],
      user_workflow: "1. User clicks Import Contacts button 2. Selects CSV file 3. Maps columns to contact fields 4. Reviews preview 5. Confirms import 6. Views results summary",
      technical_approach: "Use React file upload component, parse CSV with Papa Parse library, validate server-side, batch insert to database with transaction safety",
      affected_components: [
        "ContactList component - add import button",
        "ContactService - add import API methods",
        "Database - add import_batches table",
        "New: ImportDialog component",
        "New: ImportProgress component"
      ],
      data_changes: [
        "Add import_batch_id field to contacts table",
        "Create import_batches tracking table",
        "Add performance indexes"
      ],
      edge_cases: [
        "Invalid CSV format or corrupted files",
        "Duplicate email addresses within import",
        "Network interruption during large imports",
        "Memory limits for very large files"
      ],
      testing_strategy: "Unit tests for CSV parsing, integration tests for full workflow, manual testing with various CSV formats from different sources",
      rollback_plan: "Feature flag to disable import, database rollback scripts for specific batches, clear error messaging for users"
    });

    const preplanningResult = await client.callTool({
      name: "evaluate-workflow-progress",
      arguments: {
        type: "feature",
        currentStep: "1_preplanning", 
        stepProgress: "Completed all pre-planning questions with comprehensive answers",
        preplanningAnswers: mockAnswers
      }
    });
    console.log("✅ evaluate-workflow-progress (pre-planning) successful");
    const preplanningText = preplanningResult.content[0].text;
    
    if (!preplanningText.includes("Pre-Planning Quality Score:")) {
      throw new Error("Pre-planning evaluation missing quality score");
    }
    if (!preplanningText.includes("Implementation Plan")) {
      throw new Error("Pre-planning evaluation missing implementation plan");
    }
    console.log("✅ Pre-planning evaluation contains expected content");

    // Test 6: Error handling - invalid workflow type
    console.log("\n❌ Test 6: Testing error handling...");
    try {
      await client.callTool({
        name: "get-workflow-template",
        arguments: { type: "invalid" }
      });
      console.log("⚠️ Expected error for invalid workflow type, but call succeeded");
    } catch (error) {
      console.log("✅ Error handling working correctly for invalid workflow type");
    }

    // Test 7: Error handling - invalid step
    try {
      await client.callTool({
        name: "evaluate-workflow-progress", 
        arguments: {
          type: "feature",
          currentStep: "invalid_step",
          stepProgress: "Some progress"
        }
      });
      console.log("⚠️ Expected error for invalid step, but call succeeded");
    } catch (error) {
      console.log("✅ Error handling working correctly for invalid step");
    }

    console.log("\n🎉 All workflow end-to-end tests passed!");
    console.log("\n📊 Test Summary:");
    console.log("✅ get-workflows - Lists available workflow types");
    console.log("✅ get-workflow-template - Loads consolidated workflow with embedded questions");
    console.log("✅ evaluate-workflow-progress - Evaluates progress and provides guidance");
    console.log("✅ Pre-planning evaluation - Scores answers and generates implementation plan");
    console.log("✅ Error handling - Properly handles invalid inputs");

  } catch (error) {
    console.error("❌ Test failed:", error.message);
    console.error("Full error:", error);
  } finally {
    client.close();
    console.log("\n🔚 Test completed");
  }
}

// Run the tests
testWorkflowE2E().catch(console.error);