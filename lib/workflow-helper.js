#!/usr/bin/env node

/**
 * Workflow Helper Tool for Chapter 8 Development Standards
 * Provides access to development workflows, checklists, and templates
 */

const fs = require('fs');
const path = require('path');

class WorkflowHelper {
  constructor() {
    this.instructionsPath = path.join(__dirname, '../guides/08_tools.md');
    this.workflows = {
      module: 'Module Flow',
      feature: 'Feature Flow', 
      bug: 'Bug Flow',
      commit: 'Commit Flow'
    };
    
    this.checklists = {
      feature: 'Feature Completion Checklist',
      module: 'Module Completion Checklist'
    };
  }

  // Read chapter 8 content
  readChapter8() {
    try {
      return fs.readFileSync(this.instructionsPath, 'utf8');
    } catch (error) {
      console.error('Error reading chapter 8:', error.message);
      return null;
    }
  }

  // Extract specific workflow section
  getWorkflow(workflowType) {
    const content = this.readChapter8();
    if (!content) return null;

    const workflowName = this.workflows[workflowType];
    if (!workflowName) {
      console.error(`Unknown workflow type: ${workflowType}`);
      console.log(`Available workflows: ${Object.keys(this.workflows).join(', ')}`);
      return null;
    }

    const startMarker = `### ${workflowName}`;
    const startIndex = content.indexOf(startMarker);
    
    if (startIndex === -1) {
      console.error(`Workflow "${workflowName}" not found`);
      return null;
    }

    // Find the end of this workflow section
    const nextWorkflowStart = content.indexOf('### ', startIndex + startMarker.length);
    const endIndex = nextWorkflowStart !== -1 ? nextWorkflowStart : content.length;
    
    return content.substring(startIndex, endIndex).trim();
  }

  // Extract checklist
  getChecklist(checklistType) {
    const content = this.readChapter8();
    if (!content) return null;

    const checklistName = this.checklists[checklistType];
    if (!checklistName) {
      console.error(`Unknown checklist type: ${checklistType}`);
      console.log(`Available checklists: ${Object.keys(this.checklists).join(', ')}`);
      return null;
    }

    const startMarker = `### ${checklistName}`;
    const startIndex = content.indexOf(startMarker);
    
    if (startIndex === -1) {
      console.error(`Checklist "${checklistName}" not found`);
      return null;
    }

    // Find the end of this checklist section
    const nextSectionStart = content.indexOf('###', startIndex + startMarker.length);
    const endIndex = nextSectionStart !== -1 ? nextSectionStart : content.length;
    
    return content.substring(startIndex, endIndex).trim();
  }

  // Validate feature definition
  validateFeature(featureText) {
    const requiredElements = [
      'Purpose:',
      'Scope:',
      'User Story:',
      'Features:',
      'Routes:'
    ];

    const validations = [];
    
    requiredElements.forEach(element => {
      if (featureText.includes(element)) {
        validations.push(`✓ ${element} defined`);
      } else {
        validations.push(`✗ ${element} missing`);
      }
    });

    return validations;
  }

  // Generate module template
  generateModuleTemplate(moduleName, purpose) {
    return `Module: ${moduleName}
Purpose: ${purpose}
Features:
  - [Feature 1] - [Description]
  - [Feature 2] - [Description]
  - [Feature 3] - [Description]
Routes:
  - /${moduleName.toLowerCase()} - List view
  - /${moduleName.toLowerCase()}/create - Creation form
  - /${moduleName.toLowerCase()}/[id] - Detail view
  - /${moduleName.toLowerCase()}/[id]/edit - Edit form
Database Tables:
  - ${moduleName.toLowerCase()} - Main entity
  - ${moduleName.toLowerCase()}_settings - Supporting data
Components:
  - ${moduleName}List - Data table
  - ${moduleName}Form - Create/edit form
  - ${moduleName}Detail - View component
Icon: [lucide-react icon]
Sidebar Group: [Group Name]`;
  }

  // Interactive CLI
  async runInteractive() {
    console.log('🛠️  Chapter 8 Workflow Helper');
    console.log('================================');
    
    const args = process.argv.slice(2);
    const command = args[0];
    
    switch (command) {
      case 'workflow':
        const workflowType = args[1];
        if (!workflowType) {
          console.log('Usage: workflow-helper workflow <type>');
          console.log(`Available types: ${Object.keys(this.workflows).join(', ')}`);
          return;
        }
        const workflow = this.getWorkflow(workflowType);
        if (workflow) {
          console.log(workflow);
        }
        break;
        
      case 'checklist':
        const checklistType = args[1];
        if (!checklistType) {
          console.log('Usage: workflow-helper checklist <type>');
          console.log(`Available types: ${Object.keys(this.checklists).join(', ')}`);
          return;
        }
        const checklist = this.getChecklist(checklistType);
        if (checklist) {
          console.log(checklist);
        }
        break;
        
      case 'template':
        const moduleName = args[1];
        const purpose = args.slice(2).join(' ');
        if (!moduleName || !purpose) {
          console.log('Usage: workflow-helper template <ModuleName> <purpose description>');
          return;
        }
        const template = this.generateModuleTemplate(moduleName, purpose);
        console.log(template);
        break;
        
      case 'validate':
        const filePath = args[1];
        if (!filePath) {
          console.log('Usage: workflow-helper validate <file-path>');
          return;
        }
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const validations = this.validateFeature(content);
          console.log('Feature Validation Results:');
          validations.forEach(validation => console.log(validation));
        } catch (error) {
          console.error('Error reading file:', error.message);
        }
        break;
        
      default:
        console.log('Available commands:');
        console.log('  workflow <type>     - Show workflow steps');
        console.log('  checklist <type>    - Show completion checklist');
        console.log('  template <name> <purpose> - Generate module template');
        console.log('  validate <file>     - Validate feature definition');
        console.log('');
        console.log('Examples:');
        console.log('  node workflow-helper.js workflow module');
        console.log('  node workflow-helper.js checklist feature');
        console.log('  node workflow-helper.js template Petitions "Manage prayer petitions"');
        console.log('  node workflow-helper.js validate feature-spec.md');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const helper = new WorkflowHelper();
  helper.runInteractive();
}

module.exports = WorkflowHelper;