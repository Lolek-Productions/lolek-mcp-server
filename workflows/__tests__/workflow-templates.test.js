const fs = require('fs');
const path = require('path');

describe('Workflow Templates', () => {
  let featureWorkflow, moduleWorkflow;

  beforeAll(() => {
    // Load workflow templates
    const featureWorkflowPath = path.join(__dirname, '..', 'feature-workflow.json');
    const moduleWorkflowPath = path.join(__dirname, '..', 'module-workflow.json');
    
    featureWorkflow = JSON.parse(fs.readFileSync(featureWorkflowPath, 'utf-8'));
    moduleWorkflow = JSON.parse(fs.readFileSync(moduleWorkflowPath, 'utf-8'));
  });

  describe('Feature Workflow Structure', () => {
    it('should have all required top-level properties', () => {
      expect(featureWorkflow).toHaveProperty('name');
      expect(featureWorkflow).toHaveProperty('description');
      expect(featureWorkflow).toHaveProperty('type', 'feature');
      expect(featureWorkflow).toHaveProperty('totalSteps');
      expect(featureWorkflow).toHaveProperty('questions');
      expect(featureWorkflow).toHaveProperty('qualityStandards');
      expect(featureWorkflow).toHaveProperty('steps');
      expect(featureWorkflow).toHaveProperty('roles');
      expect(featureWorkflow).toHaveProperty('checkpoints');
    });

    it('should have valid questions section', () => {
      const { questions } = featureWorkflow;
      expect(questions).toHaveProperty('title');
      expect(questions).toHaveProperty('description');
      expect(questions).toHaveProperty('questions');
      expect(Array.isArray(questions.questions)).toBe(true);
      expect(questions.questions.length).toBeGreaterThan(0);
    });

    it('should have all questions with required fields', () => {
      const { questions } = featureWorkflow.questions;
      questions.forEach((question, index) => {
        expect(question).toHaveProperty('id');
        expect(typeof question.id).toBe('string');
        expect(question.id.length).toBeGreaterThan(0);
        expect(question).toHaveProperty('question');
        expect(question).toHaveProperty('type');
        expect(question).toHaveProperty('required');
        expect(question).toHaveProperty('guidance');
        expect(question).toHaveProperty('examples');
        expect(Array.isArray(question.examples)).toBe(true);
      });
    });

    it('should have quality standards matching questions', () => {
      const { questions } = featureWorkflow.questions;
      const { criteria } = featureWorkflow.qualityStandards;
      
      // Check that all criteria reference valid question IDs
      const questionIds = new Set(questions.map(q => q.id));
      criteria.forEach(criterion => {
        expect(questionIds.has(criterion.question_id)).toBe(true);
        expect(criterion).toHaveProperty('weight');
        expect(criterion).toHaveProperty('description');
        expect(criterion).toHaveProperty('excellent');
        expect(criterion).toHaveProperty('good');
        expect(criterion).toHaveProperty('acceptable');
        expect(criterion).toHaveProperty('needs_improvement');
        expect(criterion).toHaveProperty('inadequate');
      });
    });

    it('should have proper step sequencing', () => {
      const { steps } = featureWorkflow;
      expect(Array.isArray(steps)).toBe(true);
      expect(steps.length).toBe(featureWorkflow.totalSteps);
      
      // Check step ID sequencing
      steps.forEach((step, index) => {
        expect(step).toHaveProperty('id');
        expect(step).toHaveProperty('name');
        expect(step).toHaveProperty('description');
        expect(step).toHaveProperty('deliverables');
        expect(step).toHaveProperty('activities');
        expect(step).toHaveProperty('exitCriteria');
        expect(Array.isArray(step.deliverables)).toBe(true);
        expect(Array.isArray(step.activities)).toBe(true);
        expect(Array.isArray(step.exitCriteria)).toBe(true);
      });
    });

    it('should have pre-planning step with questions reference', () => {
      const preplanningStep = featureWorkflow.steps.find(step => step.id === '1_preplanning');
      expect(preplanningStep).toBeDefined();
      expect(preplanningStep.description).toContain('embedded questions');
      expect(preplanningStep.activities.some(activity => 
        activity.includes('questions') || activity.includes('evaluate-workflow-progress')
      )).toBe(true);
    });

    it('should have quality scoring thresholds', () => {
      const { scoring } = featureWorkflow.qualityStandards;
      expect(scoring).toHaveProperty('scale', 5);
      expect(scoring).toHaveProperty('thresholds');
      expect(scoring.thresholds).toHaveProperty('excellent');
      expect(scoring.thresholds).toHaveProperty('good', 3.5);
      expect(scoring.thresholds).toHaveProperty('acceptable');
      expect(scoring.thresholds).toHaveProperty('needs_improvement');
      expect(scoring.thresholds).toHaveProperty('inadequate');
    });
  });

  describe('Module Workflow Structure', () => {
    it('should have all required top-level properties', () => {
      expect(moduleWorkflow).toHaveProperty('name');
      expect(moduleWorkflow).toHaveProperty('description');
      expect(moduleWorkflow).toHaveProperty('type', 'module');
      expect(moduleWorkflow).toHaveProperty('totalSteps');
      expect(moduleWorkflow).toHaveProperty('questions');
      expect(moduleWorkflow).toHaveProperty('qualityStandards');
      expect(moduleWorkflow).toHaveProperty('steps');
      expect(moduleWorkflow).toHaveProperty('roles');
      expect(moduleWorkflow).toHaveProperty('checkpoints');
    });

    it('should have more steps than feature workflow', () => {
      expect(moduleWorkflow.totalSteps).toBeGreaterThan(featureWorkflow.totalSteps);
    });

    it('should have different question sets', () => {
      const featureQuestionIds = featureWorkflow.questions.questions.map(q => q.id);
      const moduleQuestionIds = moduleWorkflow.questions.questions.map(q => q.id);
      
      // Should have some different questions
      const intersection = featureQuestionIds.filter(id => moduleQuestionIds.includes(id));
      expect(intersection.length).toBeLessThan(featureQuestionIds.length);
    });
  });

  describe('Workflow Consistency', () => {
    it('should have consistent quality standard structure', () => {
      const featureStructure = Object.keys(featureWorkflow.qualityStandards);
      const moduleStructure = Object.keys(moduleWorkflow.qualityStandards);
      expect(featureStructure).toEqual(moduleStructure);
    });

    it('should have consistent step structure', () => {
      const requiredStepFields = ['id', 'name', 'description', 'deliverables', 'activities', 'exitCriteria'];
      
      [...featureWorkflow.steps, ...moduleWorkflow.steps].forEach(step => {
        requiredStepFields.forEach(field => {
          expect(step).toHaveProperty(field);
        });
      });
    });

    it('should have valid checkpoint references', () => {
      [featureWorkflow, moduleWorkflow].forEach(workflow => {
        const stepIds = workflow.steps.map(step => step.id);
        workflow.checkpoints.forEach(checkpoint => {
          expect(stepIds).toContain(checkpoint.step);
          expect(checkpoint).toHaveProperty('checkpoint');
        });
      });
    });

    it('should have quality criteria weights that sum to reasonable total', () => {
      [featureWorkflow, moduleWorkflow].forEach(workflow => {
        const totalWeight = workflow.qualityStandards.criteria.reduce(
          (sum, criterion) => sum + criterion.weight, 0
        );
        expect(totalWeight).toBeGreaterThan(90); // Should be close to 100%
        expect(totalWeight).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('Required Questions Coverage', () => {
    it('should have essential questions for feature workflow', () => {
      const questionIds = featureWorkflow.questions.questions.map(q => q.id);
      const essentialQuestions = [
        'feature_description',
        'user_story', 
        'acceptance_criteria',
        'technical_approach',
        'rollback_plan'
      ];
      
      essentialQuestions.forEach(essentialId => {
        expect(questionIds).toContain(essentialId);
      });
    });

    it('should have essential questions for module workflow', () => {
      const questionIds = moduleWorkflow.questions.questions.map(q => q.id);
      const essentialQuestions = [
        'purpose',
        'scope',
        'users',
        'data_entities',
        'success_metrics'
      ];
      
      essentialQuestions.forEach(essentialId => {
        expect(questionIds).toContain(essentialId);
      });
    });

    it('should have required questions marked correctly', () => {
      [featureWorkflow, moduleWorkflow].forEach(workflow => {
        const requiredQuestions = workflow.questions.questions.filter(q => q.required);
        expect(requiredQuestions.length).toBeGreaterThan(5); // Should have multiple required questions
        
        requiredQuestions.forEach(question => {
          // Required questions should have quality criteria
          const hasMatchingCriteria = workflow.qualityStandards.criteria.some(
            criterion => criterion.question_id === question.id
          );
          expect(hasMatchingCriteria).toBe(true);
        });
      });
    });
  });

  describe('JSON Validity', () => {
    it('should have valid JSON structure for feature workflow', () => {
      expect(() => {
        JSON.stringify(featureWorkflow);
        JSON.parse(JSON.stringify(featureWorkflow));
      }).not.toThrow();
    });

    it('should have valid JSON structure for module workflow', () => {
      expect(() => {
        JSON.stringify(moduleWorkflow);
        JSON.parse(JSON.stringify(moduleWorkflow));
      }).not.toThrow();
    });
  });
});