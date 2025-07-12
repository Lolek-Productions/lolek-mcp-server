const fs = require('fs');
const path = require('path');

describe('Workflow Templates', () => {
  const workflowTypes = ['feature', 'module', 'create-app', 'wizard'];

  describe('Workflow Files Existence', () => {
    workflowTypes.forEach(type => {
      it(`should have ${type}-workflow.md file`, () => {
        const workflowPath = path.join(__dirname, '..', `${type}-workflow.md`);
        expect(fs.existsSync(workflowPath)).toBe(true);
      });
    });
  });

  describe('Workflow File Content', () => {
    workflowTypes.forEach(type => {
      it(`should have valid content in ${type}-workflow.md`, () => {
        const workflowPath = path.join(__dirname, '..', `${type}-workflow.md`);
        const content = fs.readFileSync(workflowPath, 'utf-8');
        
        // Basic content checks
        expect(content).toContain('# '); // Should have a title
        expect(content).toContain('Workflow'); // Should mention workflow
        expect(content.length).toBeGreaterThan(1000); // Should have substantial content
      });
    });
  });

  describe('Workflow Structure', () => {
    workflowTypes.forEach(type => {
      it(`should have proper sections in ${type}-workflow.md`, () => {
        const workflowPath = path.join(__dirname, '..', `${type}-workflow.md`);
        const content = fs.readFileSync(workflowPath, 'utf-8');
        
        // Check for required sections
        expect(content).toContain('## Introduction');
        expect(content).toContain('## When to Use This Workflow');
        expect(content).toContain('## Overview');
        expect(content).toContain('## Workflow Steps');
        expect(content).toContain('## Pre-Planning Questions');
        expect(content).toContain('## Success Criteria') || expect(content).toContain('## Notes and Tips'); // Some workflows may have different section structures
      });
    });
  });

  describe('Step Definitions', () => {
    workflowTypes.forEach(type => {
      it(`should have numbered steps in ${type}-workflow.md`, () => {
        const workflowPath = path.join(__dirname, '..', `${type}-workflow.md`);
        const content = fs.readFileSync(workflowPath, 'utf-8');
        
        // Should have at least 5 steps
        const stepMatches = content.match(/### Step \d+:/g);
        expect(stepMatches).toBeTruthy();
        expect(stepMatches.length).toBeGreaterThanOrEqual(5);
      });
    });
  });

  describe('Quality Requirements', () => {
    workflowTypes.forEach(type => {
      it(`should have quality standards in ${type}-workflow.md`, () => {
        const workflowPath = path.join(__dirname, '..', `${type}-workflow.md`);
        const content = fs.readFileSync(workflowPath, 'utf-8');
        
        // Should have quality-related content
        expect(content).toContain('Quality');
        expect(content).toContain('Standard'); // Should mention quality standards
      });
    });
  });
});