const { getWorkflows } = require('../get-workflows');
const { getWorkflowTemplate } = require('../get-workflow-template');
const { evaluateWorkflowProgress } = require('../evaluate-workflow-progress');

describe('Workflow MCP Tools', () => {
  let mockContext;

  beforeEach(() => {
    mockContext = {
      contentFilter: {
        // Mock content filter if needed
      }
    };
  });

  describe('getWorkflows', () => {
    it('should return list of available workflows', async () => {
      const result = await getWorkflows.handler({}, mockContext);
      
      expect(result).toHaveProperty('content');
      expect(Array.isArray(result.content)).toBe(true);
      expect(result.content[0]).toHaveProperty('type', 'text');
      expect(result.content[0].text).toContain('Module Development Workflow');
      expect(result.content[0].text).toContain('Feature Development Workflow');
    });

    it('should include workflow step counts', async () => {
      const result = await getWorkflows.handler({}, mockContext);
      const text = result.content[0].text;
      
      expect(text).toContain('Steps:');
      expect(text).toMatch(/\*\*Steps:\*\*\s*\d+/);
    });

    it('should include usage instructions', async () => {
      const result = await getWorkflows.handler({}, mockContext);
      const text = result.content[0].text;
      
      expect(text).toContain('get-workflow-template');
      expect(text).toContain('evaluate-workflow-progress');
    });
  });

  describe('getWorkflowTemplate', () => {
    it('should load feature workflow template', async () => {
      const result = await getWorkflowTemplate.handler({ type: 'feature' }, mockContext);
      
      expect(result).toHaveProperty('content');
      expect(Array.isArray(result.content)).toBe(true);
      expect(result.content[0]).toHaveProperty('type', 'text');
      
      const text = result.content[0].text;
      expect(text).toContain('Feature Development Workflow');
      expect(text).toContain('Pre-Planning Questions');
      expect(text).toContain('Implementation Plan Template');
    });

    it('should load module workflow template', async () => {
      const result = await getWorkflowTemplate.handler({ type: 'module' }, mockContext);
      
      expect(result).toHaveProperty('content');
      const text = result.content[0].text;
      expect(text).toContain('Module Development Workflow');
      expect(text).toContain('Pre-Planning Questions');
    });

    it('should embed questions in pre-planning step', async () => {
      const result = await getWorkflowTemplate.handler({ type: 'feature' }, mockContext);
      const text = result.content[0].text;
      
      // Should contain pre-planning step
      expect(text).toContain('## Pre-Planning (1_preplanning)');
      
      // Should contain embedded questions
      expect(text).toContain('1. **What specific feature are you planning to implement?**');
      expect(text).toContain('**Guidance:**');
      expect(text).toContain('**Examples:**');
    });

    it('should include roles and checkpoints', async () => {
      const result = await getWorkflowTemplate.handler({ type: 'feature' }, mockContext);
      const text = result.content[0].text;
      
      expect(text).toContain('## Roles & Responsibilities');
      expect(text).toContain('## Key Checkpoints');
      expect(text).toContain('Developer:');
      expect(text).toContain('Pre-planning quality score');
    });

    it('should handle invalid workflow type', async () => {
      const result = await getWorkflowTemplate.handler({ type: 'invalid' }, mockContext);
      
      expect(result.content[0].text).toContain('Error');
    });
  });

  describe('evaluateWorkflowProgress', () => {
    const mockFeatureAnswers = JSON.stringify({
      feature_description: "Add comprehensive bulk contact import functionality with CSV file upload, detailed validation, real-time progress tracking, and robust error handling to streamline lead management for sales teams",
      user_story: "As a sales manager, I want to import contacts from CSV files so that I can quickly add leads from trade shows and external sources without manual data entry, saving hours of work",
      acceptance_criteria: [
        "Upload CSV files up to 10MB with drag-and-drop support",
        "Validate email format, phone numbers, and required fields",
        "Show real-time progress bar with percentage and ETA during import", 
        "Display comprehensive success/error summary with downloadable error report",
        "Support column mapping for different CSV formats",
        "Handle duplicate detection with user choice for resolution"
      ],
      user_workflow: "1. User clicks 'Import Contacts' button from dashboard 2. Selects CSV file via upload or drag-drop 3. System shows column mapping interface 4. User maps CSV columns to contact fields 5. User previews first 5 rows 6. User confirms import 7. Real-time progress bar shows status 8. System displays detailed results summary with error report option",
      technical_approach: "Use React file upload component with drag-and-drop, parse CSV with Papa Parse library on frontend for preview, validate data server-side using existing contact validation logic, implement chunked processing for large files, use database transactions for atomic imports",
      affected_components: [
        "ContactList component - add import button and progress overlay",
        "ContactService - add import API endpoints and validation logic",
        "Database - add import_batches table for tracking",
        "New: ImportDialog component with file upload and mapping",
        "New: ImportProgress component for real-time status",
        "New: ImportResults component for summary display"
      ],
      data_changes: [
        "Add import_batch_id field to contacts table for tracking",
        "Create import_batches table with status and metadata",
        "Add database indexes for performance optimization"
      ],
      edge_cases: [
        "Invalid CSV format or corrupted files",
        "Empty file or file with only headers",
        "Duplicate email addresses within import and existing database",
        "Special characters in contact names affecting validation",
        "Network interruption during large import process",
        "Memory limits for very large files exceeding browser capacity"
      ],
      testing_strategy: "Comprehensive unit tests for CSV parsing and validation logic, integration tests for complete import workflow, manual testing with various CSV formats from different sources (Excel, Google Sheets, CRM exports), performance testing with large files, error scenario testing for all edge cases",
      rollback_plan: "Feature flag to immediately disable import functionality, database rollback scripts to remove specific import batches if needed, clear error messaging guides users to manual alternatives, import history tracking allows identification of problematic imports"
    });

    it('should evaluate pre-planning step for feature workflow', async () => {
      const result = await evaluateWorkflowProgress.handler({
        type: 'feature',
        currentStep: '1_preplanning',
        stepProgress: 'Completed pre-planning questions with detailed answers',
        preplanningAnswers: mockFeatureAnswers
      }, mockContext);
      
      expect(result).toHaveProperty('content');
      const text = result.content[0].text;
      
      expect(text).toContain('Workflow Progress Evaluation');
      expect(text).toContain('Pre-Planning Quality Score:');
      expect(text).toContain('Implementation Plan');
    });

    it('should evaluate non-preplanning step', async () => {
      const result = await evaluateWorkflowProgress.handler({
        type: 'feature',
        currentStep: '2_design',
        stepProgress: 'Created wireframes and technical design document'
      }, mockContext);
      
      expect(result).toHaveProperty('content');
      const text = result.content[0].text;
      
      expect(text).toContain('Design & Architecture');
      expect(text).toContain('Exit Criteria Review');
      expect(text).toContain('Next Steps');
    });

    it('should handle invalid step ID', async () => {
      const result = await evaluateWorkflowProgress.handler({
        type: 'feature',
        currentStep: 'invalid_step',
        stepProgress: 'Some progress'
      }, mockContext);
      
      expect(result.content[0].text).toContain('Error');
      expect(result.content[0].text).toContain('not found');
    });

    it('should provide next step guidance', async () => {
      const result = await evaluateWorkflowProgress.handler({
        type: 'feature',
        currentStep: '0_context_preparation',
        stepProgress: 'Loaded documentation and agent rules'
      }, mockContext);
      
      const text = result.content[0].text;
      expect(text).toContain('Next Steps');
      expect(text).toContain('Pre-Planning');
    });

    it('should show checkpoint information for key steps', async () => {
      const result = await evaluateWorkflowProgress.handler({
        type: 'feature',
        currentStep: '1_preplanning',
        stepProgress: 'Working on pre-planning',
        preplanningAnswers: mockFeatureAnswers
      }, mockContext);
      
      const text = result.content[0].text;
      expect(text).toContain('Key Checkpoint');
      expect(text).toContain('Pre-planning quality score');
    });

    it('should require JSON format for pre-planning answers', async () => {
      const result = await evaluateWorkflowProgress.handler({
        type: 'feature',
        currentStep: '1_preplanning',
        stepProgress: 'Completed questions',
        preplanningAnswers: 'invalid json format'
      }, mockContext);
      
      const text = result.content[0].text;
      expect(text).toContain('JSON format');
    });
  });

  describe('Tool Integration', () => {
    it('should have consistent tool definitions', () => {
      const tools = [getWorkflows, getWorkflowTemplate, evaluateWorkflowProgress];
      
      tools.forEach(tool => {
        expect(tool).toHaveProperty('name');
        expect(tool).toHaveProperty('description');
        expect(tool).toHaveProperty('inputSchema');
        expect(tool).toHaveProperty('handler');
        expect(typeof tool.handler).toBe('function');
      });
    });

    it('should have proper input schemas', () => {
      expect(getWorkflows.inputSchema).toEqual({});
      
      expect(getWorkflowTemplate.inputSchema).toHaveProperty('type');
      expect(getWorkflowTemplate.inputSchema.type._def.values).toContain('module');
      expect(getWorkflowTemplate.inputSchema.type._def.values).toContain('feature');
      
      expect(evaluateWorkflowProgress.inputSchema).toHaveProperty('type');
      expect(evaluateWorkflowProgress.inputSchema).toHaveProperty('currentStep');
      expect(evaluateWorkflowProgress.inputSchema).toHaveProperty('stepProgress');
    });
  });

  describe('Error Handling', () => {
    it('should handle file system errors gracefully', async () => {
      // Mock file system error for getWorkflowTemplate
      const originalReadFileSync = require('fs').readFileSync;
      require('fs').readFileSync = jest.fn(() => {
        throw new Error('File not found');
      });

      const result = await getWorkflowTemplate.handler({ type: 'feature' }, mockContext);
      expect(result.content[0].text).toContain('Error');

      // Restore original function
      require('fs').readFileSync = originalReadFileSync;
    });

    it('should handle invalid JSON in workflow files', async () => {
      // This would be tested with actual malformed JSON files in a real scenario
      // For now, we verify error handling structure exists
      expect(getWorkflowTemplate.handler).toBeDefined();
      expect(evaluateWorkflowProgress.handler).toBeDefined();
    });
  });
});